<script lang="ts">
  import { ArrowRight, DollarSign, TrendingUp, BarChart3 as BarChartIcon } from 'lucide-svelte';
  import type { EconomicFeasibilityContent, EconomicTab, CostBenefitItem, ROIDataPoint } from '$lib/types';
  import { formatCurrency } from '$lib/utils/formatting';

  let { content } = $props<{ content: EconomicFeasibilityContent }>();

  let activeTabId = $state(content.tabs[0]?.id || '');

  function setActiveTab(tabId: string) {
    activeTabId = tabId;
  }

  // Derived value for the currently active tab object
  // Explicitly type the parameter 'tab' in the find callback
  let currentTab = $derived(() => {
    return content.tabs.find((tab: EconomicTab) => tab.id === activeTabId);
  });

  function calculateTotal(items: CostBenefitItem[] | undefined): number {
    if (!items) return 0;
    return items.reduce((sum, item) => sum + item.amount, 0);
  }

  const maxRoiValue = $derived(() => {
    // Access currentTab value directly using currentTab (since it's a derived value now)
    const values = currentTab?.roiChartData?.map((d: ROIDataPoint) => Math.abs(d.value)) || [0];
    return Math.max(...values, 1); // Avoid division by zero, ensure at least 1
  });

</script>

<div class="space-y-6">
  <!-- Tab Navigation -->
  <div class="tabs tabs-boxed">
    {#each content.tabs as tab (tab.id)}
      <button
        class={`tab ${activeTabId === tab.id ? 'tab-active' : ''}`}
        onclick={() => setActiveTab(tab.id)}
      >
        {#if tab.tabIcon?.component}
          {@const IconComponent = tab.tabIcon.component}
          <IconComponent class={tab.tabIcon.className || 'h-4 w-4 mr-1'} />
        {/if}
        <span>{tab.tabTitle}</span>
      </button>
    {/each}
  </div>

  <!-- Tab Content -->
  {#if currentTab} <!-- Check if currentTab is found -->
    <div class="bg-white border rounded-lg p-4 shadow-sm">
      {#if currentTab.contentTitle}
        <h3 class="font-semibold text-lg mb-3 text-slate-800">{currentTab.contentTitle}</h3>
      {/if}

      {#if currentTab.id === 'costs' && currentTab.items}
        <div class="space-y-4">
          {#each currentTab.items as cost (cost.name)}
            <div class="flex items-center">
              <div class="w-1/3">
                <p class="font-medium text-slate-700">{cost.name}</p>
              </div>
              <div class="w-1/3">
                <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-green-500 rounded-full"
                    style={`width: ${cost.percentage}%`}
                  ></div>
                </div>
              </div>
              <div class="w-1/3 text-right">
                <p class="text-slate-700">{formatCurrency(cost.amount)}</p>
                <p class="text-xs text-slate-500">{cost.percentage}% del total</p>
              </div>
            </div>
          {/each}
          <div class="pt-4 border-t mt-4">
            <div class="flex justify-between items-center">
              <p class="font-semibold text-slate-800">{currentTab.totalLabel || 'Costo Total Estimado:'}</p>
              <p class="font-bold text-lg text-green-700">
                {formatCurrency(calculateTotal(currentTab.items))}
              </p>
            </div>
          </div>
        </div>
      {:else if currentTab.id === 'benefits' && currentTab.items}
        <div class="space-y-4">
          {#each currentTab.items as benefit (benefit.name)}
            <div class="flex items-center">
              <div class="w-1/3">
                <p class="font-medium text-slate-700">{benefit.name}</p>
              </div>
              <div class="w-1/3">
                <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-cyan-500 rounded-full"
                    style={`width: ${benefit.percentage}%`}
                  ></div>
                </div>
              </div>
              <div class="w-1/3 text-right">
                <p class="text-slate-700">{formatCurrency(benefit.amount)}</p>
                <p class="text-xs text-slate-500">{benefit.percentage}% del total</p>
              </div>
            </div>
          {/each}
          <div class="pt-4 border-t mt-4">
            <div class="flex justify-between items-center">
              <p class="font-semibold text-slate-800">{currentTab.totalLabel || 'Beneficio Anual Estimado:'}</p>
              <p class="font-bold text-lg text-cyan-700">
                {formatCurrency(calculateTotal(currentTab.items))}
              </p>
            </div>
          </div>
        </div>
        {#if currentTab.note}
            <div class="mt-6 p-4 bg-cyan-50 rounded-lg">
                <p class="text-slate-700" style="white-space: pre-wrap;">{currentTab.note}</p>
            </div>
        {/if}
      {:else if currentTab.id === 'roi' && currentTab.roiChartData}
        <div class="h-64 mb-6 bg-slate-50 p-4 rounded-lg flex items-end justify-around gap-2">
          {#each currentTab.roiChartData as bar (bar.yearLabel)}
            <div class="flex flex-col items-center">
              <div class="text-sm text-slate-600 mb-2">
                {bar.formattedValue}
              </div>
              <div
                class={`${bar.value >= 0 ? 'bg-green-500' : 'bg-red-500'} rounded-t-md w-12`}
                style={`height: ${ (Math.abs(bar.value) / maxRoiValue) * 150 }px; min-height: 5px;`}
              ></div>
              <div class="mt-2 text-sm font-medium">{bar.yearLabel}</div>
            </div>
          {/each}
        </div>
        {#if currentTab.roiSummaryItems}
            <div class="space-y-4">
                {#each currentTab.roiSummaryItems as summaryItem (summaryItem.label)}
                    <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <p class="font-medium text-slate-700">{summaryItem.label}</p>
                        <p class={`font-semibold ${summaryItem.valueColorClass || 'text-slate-800'}`}>{summaryItem.value}</p>
                    </div>
                {/each}
            </div>
        {/if}
      {/if}
    </div>
  {:else}
    <p class="text-center text-slate-500 py-4">Seleccione una pestaña para ver el contenido.</p>
  {/if}

  <!-- Funding Sources -->
  <div class="bg-white border rounded-lg p-4 shadow-sm">
    <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
      {#if content.funding.titleIcon?.component}
        {@const FundingIconComponent = content.funding.titleIcon.component}
        <FundingIconComponent class={content.funding.titleIcon.className || 'h-5 w-5 text-green-600'} />
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-green-600"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      {/if}
      {content.funding.title}
    </h3>

    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-green-50 p-3 rounded-lg">
        <h4 class="font-medium text-slate-800 mb-2">{content.funding.publicTitle}</h4>
        <ul class="space-y-1">
          {#each content.funding.publicSources as source (source.text)}
            <li class="flex items-center gap-2">
              {#if source.icon?.component}
                {@const SourceIconComponent = source.icon.component}
                <SourceIconComponent class={source.icon.className || 'h-4 w-4 text-green-600 flex-shrink-0'} />
              {:else}
                <ArrowRight class="h-4 w-4 text-green-600 flex-shrink-0" />
              {/if}
              <span class="text-sm text-slate-700">{source.text}</span>
            </li>
          {/each}
        </ul>
      </div>

      <div class="bg-green-50 p-3 rounded-lg">
        <h4 class="font-medium text-slate-800 mb-2">{content.funding.privateTitle}</h4>
        <ul class="space-y-1">
          {#each content.funding.privateSources as source (source.text)}
            <li class="flex items-center gap-2">
              {#if source.icon?.component}
                {@const SourceIconComponent = source.icon.component}
                <SourceIconComponent class={source.icon.className || 'h-4 w-4 text-green-600 flex-shrink-0'} />
              {:else}
                <ArrowRight class="h-4 w-4 text-green-600 flex-shrink-0" />
              {/if}
              <span class="text-sm text-slate-700">{source.text}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>