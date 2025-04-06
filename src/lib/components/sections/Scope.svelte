<script lang="ts">
    import { CheckCircle } from 'lucide-svelte';
    import type { ScopeContent } from '$lib/types';

    let { content } = $props<{ content: ScopeContent }>();
  </script>
  
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t border-violet-200"></span>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-4 text-lg font-medium text-violet-600">Componentes del Sistema</span>
        </div>
      </div>
      
      <div class="mt-6 space-y-4">
        {#each content.components as component}
          <div class="flex gap-4 items-start">
            <div class="bg-violet-100 text-violet-600 rounded-lg p-3 flex-shrink-0">
              <component.icon class="h-6 w-6" />
            </div>
            <div>
              <h3 class="font-medium text-slate-800">{component.title}</h3>
              <p class="text-sm text-slate-600 mt-1">
                {component.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <div>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t border-violet-200"></span>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-4 text-lg font-medium text-violet-600">Entregables Principales</span>
        </div>
      </div>
      
      <div class="mt-6 space-y-6">
        {#each content.deliverables as deliverable}
          <div class="bg-violet-50 rounded-lg p-4">
            <h3 class="font-medium text-slate-800 mb-2">{deliverable.phase}</h3>
            <ul class="space-y-2">
              {#each deliverable.items as item}
                <li class="flex items-start gap-2">
                  <CheckCircle class="h-5 w-5 text-violet-500 flex-shrink-0 mt-0.5" />
                  <span class="text-slate-700">{item}</span>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>