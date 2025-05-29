<script lang="ts">
  import { AlertTriangle, ShieldCheck } from 'lucide-svelte';
  import { RiskMatrix } from '$lib/components'; // Assuming RiskMatrix is ok
  import type { RisksContent, RiskItemData, IconDetail } from '$lib/types';
  import { getRiskLevelClass } from '$lib/utils/formatting';

  let { content } = $props<{ content: RisksContent }>();

  interface RiskGroup {
    id: string;
    category: string; // This is the title for the tab
    icon?: IconDetail;
    items: RiskItemData[];
  }

  // Correctly derive riskGroups. Ensure content.riskCategories is properly typed.
  const riskGroups = $derived<RiskGroup[]>(() => {
    if (content.riskCategories && content.riskCategories.length > 0) {
      return content.riskCategories.map(cat => ({
        id: cat.id, // Ensure cat.id is defined in RisksContent -> riskCategories
        category: cat.title,
        icon: cat.icon,
        items: cat.risks,
      }));
    }
    if (content.allRisks && content.allRisks.length > 0) {
      // Fallback: Group allRisks by category if riskCategories is not provided
      const groups: Record<string, RiskItemData[]> = {};
      content.allRisks.forEach((risk) => {
        if (!groups[risk.category]) groups[risk.category] = [];
        groups[risk.category].push(risk);
      });
      return Object.entries(groups).map(([categoryName, items]) => ({
        id: categoryName.toLowerCase().replace(/\s+/g, '-'),
        category: categoryName,
        items,
        // icon: undefined // No specific icon in this fallback structure
      }));
    }
    return [];
  });

  // Initial activeCategoryId: use the id of the first group, or an empty string.
  let activeCategoryId = $state(riskGroups[0]?.id ?? '');

  // Effect to update activeCategoryId if riskGroups changes and current activeId is no longer valid
  $effect(() => {
    if (riskGroups.length > 0 && !riskGroups.find(g => g.id === activeCategoryId)) {
      activeCategoryId = riskGroups[0].id;
    } else if (riskGroups.length === 0) {
      activeCategoryId = '';
    }
  });


  function setActiveCategory(categoryId: string) {
    activeCategoryId = categoryId;
  }

  let currentRisks = $derived<RiskItemData[]>(() => {
    if (!activeCategoryId) {
        // If content.allRisks exists and no category is active, show all.
        // Otherwise, if riskGroups exist, this case shouldn't be hit often as activeCategoryId defaults.
        return content.allRisks || [];
    }
    const group = riskGroups.find(g => g.id === activeCategoryId);
    return group ? group.items : [];
  });

</script>

<div class="space-y-6">
  {#if riskGroups.length > 0}
    <div class="bg-white border rounded-lg p-4 shadow-sm">
      <div class="tabs tabs-boxed">
        {#each riskGroups as group (group.id)}
          <button
            class={`tab ${activeCategoryId === group.id ? 'tab-active' : ''}`}
            onclick={() => setActiveCategory(group.id)}
          >
            {#if group.icon?.component}
              <!-- <svelte:component this={group.icon.component} class={group.icon.className || 'h-4 w-4 mr-2'} /> -->
              {@const IconComponent = group.icon.component}
             <IconComponent class={group.icon.className || 'h-4 w-4 mr-2'} />
            {:else}
              <AlertTriangle class="h-4 w-4 mr-2" /> <!-- Default icon for tab -->
            {/if}
            {group.category}
          </button>
        {/each}
      </div>

      <div class="mt-4">
        {#if currentRisks.length > 0}
          <div class="space-y-4">
            {#each currentRisks as risk (risk.name)}
              <div class="bg-white border rounded-lg p-4 shadow-sm">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div class="flex items-center gap-2">
                    <AlertTriangle class="h-5 w-5 text-red-500" />
                    <h4 class="font-medium text-slate-800">{risk.name}</h4>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class={`badge ${getRiskLevelClass(risk.impact)}`}>
                      Impacto: {risk.impact}
                    </span>
                    <span class={`badge ${getRiskLevelClass(risk.probability)}`}>
                      Probabilidad: {risk.probability}
                    </span>
                  </div>
                </div>

                <div class="mt-2 p-3 bg-slate-50 rounded-lg">
                  <div class="flex items-center gap-2 mb-1">
                    <ShieldCheck class="h-4 w-4 text-green-600" />
                    <h5 class="font-medium text-slate-700">{content.mitigationStrategyLabel || 'Estrategia de Mitigación:'}</h5>
                  </div>
                  <p class="text-slate-700 text-sm">{risk.mitigation}</p>
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <p class="text-slate-500 text-center py-4">No hay riesgos definidos para { riskGroups.find(rg => rg.id === activeCategoryId)?.category || 'esta categoría' }.</p>
        {/if}
      </div>
    </div>
  {/if}

  <div class="bg-white border rounded-lg p-4 shadow-sm">
    <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
      {#if content.matrixTitleIcon?.component}
        {@const IconComponent = content.matrixTitleIcon.component}
        <IconComponent class={content.matrixTitleIcon.className || 'h-5 w-5 text-red-600'} />
      {:else}
        <AlertTriangle class="h-5 w-5 text-red-600" />
      {/if}
      {content.matrixTitle}
    </h3>
    <RiskMatrix risks={content.allRisks || []} /> <!-- RiskMatrix needs all risks to build the matrix cells -->
  </div>
</div>