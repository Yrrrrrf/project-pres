<script lang="ts">
  // Removed: import { ThumbsUp, ThumbsDown, GitBranch, Users, CreditCard, Wrench, Layers, Award, Lightbulb, Smartphone } from 'lucide-svelte';    
  import type { OperativeFeasibilityContent } from '$lib/types'; // Correct type
  let { content } = $props<{ content: OperativeFeasibilityContent }>(); // Use correct type
</script>

<div class="space-y-6">
  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
        {#if content.orgChangesIcon?.component}
            {@const Icon = content.orgChangesIcon.component}
            <Icon class={content.orgChangesIcon.className || 'h-5 w-5 text-amber-600'} />
        {/if}
        {content.orgChangesTitle}
      </h3>
      
      <div class="space-y-3">
        {#each content.orgChangesItems as item}
        <div class="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
          <div class="bg-amber-100 p-1.5 rounded-full mt-0.5">
            {#if item.icon?.component}
                {@const ItemIcon = item.icon.component}
                <ItemIcon class={item.icon.className || 'h-4 w-4 text-amber-600'} />
            {/if}
          </div>
          <div>
            <p class="font-medium text-slate-800">{item.title}</p>
            <p class="text-sm text-slate-600 mt-1">
              {item.description}
            </p>
          </div>
        </div>
        {/each}
      </div>
    </div>
    
    <div class="bg-white border rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
        {#if content.adoptionStrategiesIcon?.component}
            {@const Icon = content.adoptionStrategiesIcon.component}
            <Icon class={content.adoptionStrategiesIcon.className || 'h-5 w-5 text-amber-600'} />
        {/if}
        <span>{content.adoptionStrategiesTitle}</span>
      </h3>
      
      <div class="space-y-3">
        {#each content.adoptionStrategiesItems as item}
        <div class="flex items-center gap-2 p-3 border border-amber-200 rounded-lg">
          <div class="bg-amber-100 p-1.5 rounded-full">
            {#if item.icon?.component}
                {@const ItemIcon = item.icon.component}
                <ItemIcon class={item.icon.className || 'h-4 w-4 text-amber-600'} />
            {/if}
          </div>
          <div>
            <p class="font-medium text-slate-800">{item.title}</p>
            <p class="text-sm text-slate-600">{item.description}</p>
          </div>
        </div>
        {/each}
      </div>
    </div>
  </div>
  
  <div class="bg-white border rounded-lg p-4 shadow-sm">
    <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
      {#if content.resistanceAnalysisIcon?.component}
        {@const Icon = content.resistanceAnalysisIcon.component}
        <Icon class={content.resistanceAnalysisIcon.className || 'h-5 w-5 text-amber-600'} />
      {/if}
      <span>{content.resistanceAnalysisTitle}</span>
    </h3>
    
    <div class="grid md:grid-cols-2 gap-4">
      <div class="p-4 bg-amber-50 rounded-lg">
        <h4 class="font-medium text-slate-800 mb-2 flex items-center gap-2">
          {#if content.resistanceSourcesIcon?.component}
            {@const Icon = content.resistanceSourcesIcon.component}
            <Icon class={content.resistanceSourcesIcon.className || 'text-amber-600 h-4 w-4'} />
          {/if}
          {content.resistanceSourcesTitle}
        </h4>
        <ul class="space-y-2">
          {#each content.resistanceSourcePoints as point}
          <li class="flex items-start gap-2">
            {#if point.icon?.component}
                {@const PointIcon = point.icon.component}
                <PointIcon class={point.icon.className || 'w-2 h-2 rounded-full bg-amber-500 mt-2'} />
            {:else} <!-- Fallback if icon not provided, e.g. a div based bullet -->
                <div class="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
            {/if}
            <p class="text-slate-700">{point.text}</p>
          </li>
          {/each}
        </ul>
      </div>
      
      <div class="p-4 bg-amber-50 rounded-lg">
        <h4 class="font-medium text-slate-800 mb-2 flex items-center gap-2">
          {#if content.mitigationStrategiesIcon?.component}
            {@const Icon = content.mitigationStrategiesIcon.component}
            <Icon class={content.mitigationStrategiesIcon.className || 'text-green-600 h-4 w-4'} />
          {/if}
          {content.mitigationStrategiesTitle}
        </h4>
        <ul class="space-y-2">
          {#each content.mitigationStrategyPoints as point}
          <li class="flex items-start gap-2">
            {#if point.icon?.component}
                {@const PointIcon = point.icon.component}
                <PointIcon class={point.icon.className || 'w-2 h-2 rounded-full bg-green-500 mt-2'} />
            {:else}
                <div class="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
            {/if}
            <p class="text-slate-700">{point.text}</p>
          </li>
          {/each}
        </ul>
      </div>
    </div>
    
    <div class="mt-6 p-4 bg-white border border-amber-200 rounded-lg">
      <div class="flex items-center gap-2 mb-2">
        {#if content.stakeholderImpactIcon?.component}
            {@const Icon = content.stakeholderImpactIcon.component}
            <Icon class={content.stakeholderImpactIcon.className || 'h-5 w-5 text-amber-600'} />
        {/if}
        <h4 class="font-medium text-slate-800">{content.stakeholderImpactTitle}</h4>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-amber-200">
          <thead>
            <tr>
              {#each content.stakeholderImpactTableHeaders as header}
              <th class="px-4 py-2 text-left text-sm font-medium text-slate-700">{header}</th>
              {/each}
            </tr>
          </thead>
          <tbody class="divide-y divide-amber-100">
            {#each content.stakeholderImpactRows as row}
            <tr>
              <td class="px-4 py-2 text-sm text-slate-700">{row.group}</td>
              <td class="px-4 py-2 text-sm text-slate-700">{row.impact}</td>
              <td class="px-4 py-2 text-sm text-slate-700">
                <span class={`badge ${row.resistanceBadgeClass || (row.resistanceLevel === 'Alto' ? 'bg-red-100 text-red-700' : row.resistanceLevel === 'Medio' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700')}`}>
                    {row.resistanceLevel}
                </span>
              </td>
              <td class="px-4 py-2 text-sm text-slate-700">{row.strategy}</td>
            </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>