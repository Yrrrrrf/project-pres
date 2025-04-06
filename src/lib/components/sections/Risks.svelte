<script lang="ts">
  import { AlertTriangle, ShieldCheck } from 'lucide-svelte';
  import { RiskMatrix } from '$lib/components';
  import type { RisksContent, RiskItem } from '$lib/types';

  let { content, getRiskColor } = $props<{ 
    content: RisksContent;
    getRiskColor: (level: string) => string; 
  }>();

  // Group risks by category
  interface RiskGroup {
    category: string;
    items: RiskItem[];
  }
  
  const riskGroups = $derived(() => {
    const groups: Record<string, RiskItem[]> = {};
    
    // Group risks by category
    content.risks.forEach((risk: RiskItem) => {
      if (!groups[risk.category]) {
        groups[risk.category] = [];
      }
      groups[risk.category].push(risk);
    });
    
    // Convert to array format
    return Object.entries(groups).map(([category, items]) => ({
      category,
      items
    }));
  });
  
  let activeCategory = $state(riskGroups[0]?.category || '');
  
  function setActiveCategory(category: string) {
    activeCategory = category;
  }
  
  // Get current category risks
  let currentRisks = $derived(() => {
    const group = riskGroups.find(g => g.category === activeCategory);
    return group ? group.items : [];
  });
</script>

<div class="space-y-6">
  <div class="bg-white border rounded-lg p-4 shadow-sm">
    <div class="tabs tabs-boxed">
      {#each riskGroups as group}
        <button 
          class={`tab ${activeCategory === group.category ? 'tab-active' : ''}`}
          onclick={() => setActiveCategory(group.category)}
        >
          <AlertTriangle class="h-4 w-4 mr-2" />
          {group.category}
        </button>
      {/each}
    </div>
    
    <div class="mt-4">
      {#if currentRisks.length > 0}
        <div class="space-y-4">
          {#each currentRisks as risk}
            <div class="bg-white border rounded-lg p-4 shadow-sm">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div class="flex items-center gap-2">
                  <AlertTriangle class="h-5 w-5 text-red-500" />
                  <h4 class="font-medium text-slate-800">{risk.name}</h4>
                </div>
                <div class="flex items-center gap-2">
                  <span class={`badge ${getRiskColor(risk.impact)}`}>
                    Impacto: {risk.impact}
                  </span>
                  <span class={`badge ${getRiskColor(risk.probability)}`}>
                    Probabilidad: {risk.probability}
                  </span>
                </div>
              </div>
              
              <div class="mt-2 p-3 bg-slate-50 rounded-lg">
                <div class="flex items-center gap-2 mb-1">
                  <ShieldCheck class="h-4 w-4 text-green-600" />
                  <h5 class="font-medium text-slate-700">Estrategia de Mitigación:</h5>
                </div>
                <p class="text-slate-700 text-sm">{risk.mitigation}</p>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  
  <div class="bg-white border rounded-lg p-4 shadow-sm">
    <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
      <AlertTriangle class="h-5 w-5 text-red-600" />
      Matriz de Riesgos
    </h3>
    
    <RiskMatrix risks={content.risks} />
  </div>
</div>