<script lang="ts">
    export interface RiskItem {
        name: string;
        impact: 'Alto' | 'Medio' | 'Bajo';
        probability: 'Alto' | 'Medio' | 'Bajo';
        category?: string;
    }

    let {
        risks = [],
        showLegend = true,
        compact = false
    } = $props<{
        risks: RiskItem[];
        showLegend?: boolean;
        compact?: boolean;
    }>();

    // Map risks to cells in the matrix
    function getRisksForCell(impact: string, probability: string): RiskItem[] {
        return risks.filter((risk: RiskItem) => risk.impact === impact && risk.probability === probability);
    }

    function getCellColor(impact: string, probability: string): string {
        if (impact === 'Alto' && probability === 'Alto') return 'bg-red-100';
        if (impact === 'Alto' && probability === 'Medio') return 'bg-amber-100';
        if (impact === 'Alto' && probability === 'Bajo') return 'bg-green-100';
        if (impact === 'Medio' && probability === 'Alto') return 'bg-red-100';
        if (impact === 'Medio' && probability === 'Medio') return 'bg-amber-100';
        if (impact === 'Medio' && probability === 'Bajo') return 'bg-green-100';
        if (impact === 'Bajo' && probability === 'Alto') return 'bg-amber-100';
        if (impact === 'Bajo' && probability === 'Medio') return 'bg-green-100';
        return 'bg-green-100';
    }

    function getCellAction(impact: string, probability: string): string {
        if (impact === 'Alto' && probability === 'Alto') return 'Crítico - Evitar';
        if (impact === 'Alto' && probability === 'Medio') return 'Mitigar';
        if (impact === 'Alto' && probability === 'Bajo') return 'Monitorear';
        if (impact === 'Medio' && probability === 'Alto') return 'Mitigar';
        if (impact === 'Medio' && probability === 'Medio') return 'Monitorear';
        if (impact === 'Medio' && probability === 'Bajo') return 'Aceptar';
        if (impact === 'Bajo' && probability === 'Alto') return 'Monitorear';
        if (impact === 'Bajo' && probability === 'Medio') return 'Aceptar';
        return 'Ignorar';
    }
</script>

<div class="overflow-x-auto">
    <div class="min-w-[600px]">
        <div class="grid grid-cols-4 gap-2 mb-2">
            <div class="col-start-2 col-span-3 grid grid-cols-3 gap-2">
                <div class="text-center font-medium text-slate-700 p-2 bg-slate-100 rounded">Bajo</div>
                <div class="text-center font-medium text-slate-700 p-2 bg-slate-100 rounded">Medio</div>
                <div class="text-center font-medium text-slate-700 p-2 bg-slate-100 rounded">Alto</div>
            </div>
        </div>
        
        <div class="grid grid-cols-4 gap-2">
            <div class="row-span-3 flex items-center justify-center">
                <div class="transform -rotate-90 font-medium text-slate-700 whitespace-nowrap">
                    Impacto
                </div>
            </div>
            
            <!-- Alto Impacto -->
            {#each ['Bajo', 'Medio', 'Alto'] as probability}
                <div 
                    class={`${getCellColor('Alto', probability)} p-2 rounded text-xs ${compact ? '' : 'h-24'} flex items-center justify-center`}
                >
                    <div>
                        <p class="font-medium mb-1">{getCellAction('Alto', probability)}</p>
                        {#if !compact}
                            <ul class="text-left text-xs">
                                {#each getRisksForCell('Alto', probability) as risk}
                                    <li>• {risk.name}</li>
                                {/each}
                            </ul>
                        {/if}
                    </div>
                </div>
            {/each}
            
            <!-- Medio Impacto -->
            {#each ['Bajo', 'Medio', 'Alto'] as probability}
                <div 
                    class={`${getCellColor('Medio', probability)} p-2 rounded text-xs ${compact ? '' : 'h-24'} flex items-center justify-center`}
                >
                    <div>
                        <p class="font-medium mb-1">{getCellAction('Medio', probability)}</p>
                        {#if !compact}
                            <ul class="text-left text-xs">
                                {#each getRisksForCell('Medio', probability) as risk}
                                    <li>• {risk.name}</li>
                                {/each}
                            </ul>
                        {/if}
                    </div>
                </div>
            {/each}
            
            <!-- Bajo Impacto -->
            {#each ['Bajo', 'Medio', 'Alto'] as probability}
                <div 
                    class={`${getCellColor('Bajo', probability)} p-2 rounded text-xs ${compact ? '' : 'h-24'} flex items-center justify-center`}
                >
                    <div>
                        <p class="font-medium mb-1">{getCellAction('Bajo', probability)}</p>
                        {#if !compact}
                            <ul class="text-left text-xs">
                                {#each getRisksForCell('Bajo', probability) as risk}
                                    <li>• {risk.name}</li>
                                {/each}
                            </ul>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
        
        <div class="grid grid-cols-4 gap-2 mt-2">
            <div class="col-start-2 col-span-3 text-center font-medium text-slate-700">
                Probabilidad
            </div>
        </div>
    </div>
</div>

{#if showLegend && risks.length > 0}
    <div class="mt-4 bg-slate-50 p-3 rounded-lg">
        <h4 class="font-medium text-slate-700 mb-2">Leyenda de Riesgos</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {#each risks as risk}
                <div class="flex items-start gap-2">
                    <div class="w-2 h-2 rounded-full bg-slate-400 mt-2"></div>
                    <div>
                        <p class="text-sm font-medium text-slate-700">{risk.name}</p>
                        <p class="text-xs text-slate-500">
                            {risk.category ? risk.category + ' | ' : ''}
                            Impacto: {risk.impact} | Probabilidad: {risk.probability}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}