<script lang="ts">
  import { Clock } from 'lucide-svelte';
  import type { TimelineContent, TimelinePhase } from '$lib/types';

  let { content } = $props<{ content: TimelineContent }>();
</script>

<div class="space-y-6">
  <div class="relative">
    <div class="absolute left-4 inset-y-0 w-0.5 bg-indigo-200"></div>
    
    {#each content.phases as phase}
      <div class="relative pl-10 pb-8">
        <div class="absolute left-2 -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
          {phase.id}
        </div>
        
        <div class="bg-white border rounded-lg p-4 shadow-sm">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
            <div>
              <h3 class="font-semibold text-lg text-slate-800">{phase.name}</h3>
              <p class="text-indigo-600 text-sm">{phase.duration}</p>
            </div>
            <div class="badge bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              {phase.status}
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 class="font-medium text-slate-800 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                  <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                  <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                  <path d="M21 11.5V8"></path>
                  <path d="M21 16v-4.5"></path>
                  <path d="M15.5 3.5a2.12 2.12 0 0 1 0 3l-3 3L8 6l3.5-3a2.12 2.12 0 0 1 3 0z"></path>
                  <path d="M12.5 9.5 9 6"></path>
                </svg>
                Tareas Principales
              </h4>
              <ul class="space-y-1">
                {#each phase.tasks as task}
                  <li class="flex items-start gap-2">
                    <div class="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
                    <p class="text-sm text-slate-700">{task}</p>
                  </li>
                {/each}
              </ul>
            </div>
            
            <div>
              <h4 class="font-medium text-slate-800 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600">
                  <path d="m19 5 5 5-5 5"></path>
                  <path d="M5 5h14"></path>
                  <path d="M5 12h6"></path>
                  <path d="M5 19h14"></path>
                </svg>
                Hitos
              </h4>
              <ul class="space-y-1">
                {#each phase.milestones as milestone}
                  <li class="flex items-start gap-2">
                    <div class="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
                    <p class="text-sm text-slate-700">{milestone}</p>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  <div class="bg-indigo-50 rounded-lg p-4">
    <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
      <Clock class="h-5 w-5 text-indigo-600" />
      Resumen de Tiempos
    </h3>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-white rounded-lg p-3 text-center shadow-sm">
        <p class="text-sm text-slate-600">Duración Total</p>
        <p class="text-2xl font-bold text-indigo-600">{content.summary.totalDuration}</p>
        <p class="text-xs text-slate-500">Fases 1-4</p>
      </div>
      
      <div class="bg-white rounded-lg p-3 text-center shadow-sm">
        <p class="text-sm text-slate-600">Fase más Larga</p>
        <p class="text-2xl font-bold text-indigo-600">{content.summary.longestPhase}</p>
        <p class="text-xs text-slate-500">Desarrollo</p>
      </div>
      
      <div class="bg-white rounded-lg p-3 text-center shadow-sm">
        <p class="text-sm text-slate-600">Inicio Estimado</p>
        <p class="text-2xl font-bold text-indigo-600">{content.summary.estimatedStart}</p>
        <p class="text-xs text-slate-500">Abril 2025</p>
      </div>
      
      <div class="bg-white rounded-lg p-3 text-center shadow-sm">
        <p class="text-sm text-slate-600">Lanzamiento</p>
        <p class="text-2xl font-bold text-indigo-600">{content.summary.estimatedLaunch}</p>
        <p class="text-xs text-slate-500">Octubre 2026</p>
      </div>
    </div>
  </div>
</div>