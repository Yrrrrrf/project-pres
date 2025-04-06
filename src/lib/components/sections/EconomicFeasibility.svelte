<script lang="ts">
  import { ArrowRight, DollarSign, TrendingUp, BarChart3 } from 'lucide-svelte';
  import type { EconomicFeasibilityContent, EconomicTab, CostItem, BenefitItem, ROIData } from '$lib/types';

  let { 
    content, 
    formatCurrency 
  } = $props<{ 
    content: EconomicFeasibilityContent; 
    formatCurrency: (amount: number) => string;
  }>();

  // Tab management
  let activeTab = $state(content.tabs[0]?.id || 'costs');
  
  function setActiveTab(tabId: string) {
    activeTab = tabId;
  }
  
  // Get current tab data
  let currentTab = $derived(() => {
    return content.tabs.find(tab => tab.id === activeTab);
  });
  
  // Calculate totals
  function calculateTotal(items: CostItem[] | BenefitItem[]): number {
    return items.reduce((sum, item) => sum + item.amount, 0);
  }
</script>

<div class="space-y-6">
  <!-- Tab Navigation -->
  <div class="tabs tabs-boxed">
    {#each content.tabs as tab}
      <button 
        class={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
        on:click={() => setActiveTab(tab.id)}
      >
        {#if tab.icon === DollarSign}
          <DollarSign class="h-4 w-4 mr-1" />
        {:else if tab.icon === TrendingUp}
          <TrendingUp class="h-4 w-4 mr-1" />
        {:else if tab.icon === BarChart3}
          <BarChart3 class="h-4 w-4 mr-1" />
        {/if}
        <span>{tab.title}</span>
      </button>
    {/each}
  </div>
  
  <!-- Tab Content -->
  {#if currentTab?.id === 'costs' && currentTab.costs}
    <div class="bg-white border rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-3 text-slate-800">Costos Estimados del Proyecto</h3>
      
      <div class="space-y-4">
        {#each currentTab.costs as cost}
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
            <p class="font-semibold text-slate-800">Costo Total Estimado:</p>
            <p class="font-bold text-lg text-green-700">
              {formatCurrency(calculateTotal(currentTab.costs))}
            </p>
          </div>
        </div>
      </div>
    </div>
  {:else if currentTab?.id === 'benefits' && currentTab.benefits}
    <div class="bg-white border rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-3 text-slate-800">Beneficios Económicos Esperados</h3>
      
      <div class="space-y-4">
        {#each currentTab.benefits as benefit}
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
            <p class="font-semibold text-slate-800">Beneficio Anual Estimado:</p>
            <p class="font-bold text-lg text-cyan-700">
              {formatCurrency(calculateTotal(currentTab.benefits))}
            </p>
          </div>
        </div>
      </div>
      
      <div class="mt-6 p-4 bg-cyan-50 rounded-lg">
        <p class="text-slate-700">
          <strong>Nota:</strong> Basado en datos del IMCO, que estima que la congestión en ciudades mexicanas 
          cuesta 94 mil millones de pesos anuales, una reducción del 10% en tiempos de espera y congestión 
          podría representar un ahorro de aproximadamente 9.4 mil millones de pesos a nivel nacional.
        </p>
      </div>
    </div>
  {:else if currentTab?.id === 'roi' && currentTab.roi}
    <div class="bg-white border rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-3 text-slate-800">Retorno de Inversión Proyectado</h3>
      
      <div class="h-64 mb-6 bg-slate-50 p-4 rounded-lg flex items-end justify-between">
        {#each currentTab.roi.values as value, index}
          <div class="flex flex-col items-center">
            <div class="text-sm text-slate-600 mb-2">
              {value >= 0 ? '+' : ''}{formatCurrency(value)}
            </div>
            <div 
              class={`${value >= 0 ? 'bg-green-500' : 'bg-red-500'} rounded-t-md w-12`}
              style={`height: ${Math.abs(value) / 60000}px; min-height: 20px;`}
            ></div>
            <div class="mt-2 text-sm font-medium">Año {index + 1}</div>
          </div>
        {/each}
      </div>
      
      <div class="space-y-4">
        <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
          <p class="font-medium text-slate-700">Inversión Inicial:</p>
          <p class="font-semibold text-red-600">{formatCurrency(Math.abs(currentTab.roi.values[0]))}</p>
        </div>
        
        <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
          <p class="font-medium text-slate-700">Punto de Equilibrio:</p>
          <p class="font-semibold text-slate-800">Año 3</p>
        </div>
        
        <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
          <p class="font-medium text-slate-700">ROI a 5 años:</p>
          <p class="font-semibold text-green-600">150%</p>
        </div>
      </div>
    </div>
  {/if}
  
  <!-- Funding Sources -->
  <div class="bg-white border rounded-lg p-4 shadow-sm">
    <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-green-600">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
      Fuentes de Financiamiento
    </h3>
    
    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-green-50 p-3 rounded-lg">
        <h4 class="font-medium text-slate-800 mb-2">Fondos Públicos</h4>
        <ul class="space-y-1">
          {#each content.funding.public as source}
            <li class="flex items-center gap-2">
              <ArrowRight class="h-4 w-4 text-green-600 flex-shrink-0" />
              <span class="text-sm text-slate-700">{source}</span>
            </li>
          {/each}
        </ul>
      </div>
      
      <div class="bg-green-50 p-3 rounded-lg">
        <h4 class="font-medium text-slate-800 mb-2">Fondos Privados</h4>
        <ul class="space-y-1">
          {#each content.funding.private as source}
            <li class="flex items-center gap-2">
              <ArrowRight class="h-4 w-4 text-green-600 flex-shrink-0" />
              <span class="text-sm text-slate-700">{source}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>