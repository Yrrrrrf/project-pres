<script lang="ts">
  import { ProgressDisplay } from '$lib/components';
  import { CheckCircle } from 'lucide-svelte';
  import type { ObjectivesContent } from '$lib/types';

  let { content } = $props<{ content: ObjectivesContent }>();
</script>

<div class="space-y-6">
  <p class="text-slate-700">
    {content.description}
  </p>
  
  <div class="grid gap-4">
    {#each content.objectives as objective}
      <ProgressDisplay 
        id={objective.id}
        name={objective.name}
        progress={objective.progress}
        icon={objective.icon}
      />
    {/each}
  </div>
  
  <div class="bg-cyan-50 rounded-lg p-4 mt-4">
    <h3 class="font-semibold text-lg mb-2 text-slate-800 flex items-center gap-2">
      <CheckCircle class="h-5 w-5 text-cyan-600" />
      Criterios de Éxito
    </h3>
    <div class="grid md:grid-cols-2 gap-4">
      {#each content.successCriteria as criterion}
        <div class="flex items-start gap-2">
          <div class="bg-cyan-100 rounded-full p-1 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-cyan-600">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div>
            <p class="font-medium text-slate-700">{criterion.title}</p>
            <p class="text-sm text-slate-600">{criterion.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>