<script lang="ts">
    import { Clock } from 'lucide-svelte';
    import type { TimelineContent, TimelinePhase } from '$lib/types';
  
    let { content } = $props<{ content: TimelineContent }>();
  </script>
  
  <div class="space-y-6">
    <!-- Custom Timeline Implementation -->
    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-4 inset-y-0 w-0.5 bg-indigo-200"></div>
      
      <!-- Timeline phases -->
      {#each content.phases as phase}
        <div class="relative pl-10 pb-8">
          <!-- Timeline node -->
          <div class="absolute left-2 -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
            {phase.id}
          </div>
          
          <!-- Phase content -->
          <div class="bg-white border rounded-lg p-4 shadow-sm">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <h3 class="font-semibold text-lg text-slate-800">{phase.name}</h3>
                <p class="text-indigo-600 text-sm">{phase.duration}</p>
              </div>
              <div class="badge badge-primary badge-outline">
                {phase.status}
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 class="font-medium text-slate-800 mb-2 flex items-center gap-2">
                  <span class="text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path><path d="M21 11.5V8"></path><path d="M21 16v-4.5"></path><path d="M15.5 3.5a2.12 2.12 0 0 1 0 3l-3 3L8 6l3.5-3a2.12 2.12 0 0 1 3 0z"></path><path d="M12.5 9.5 9 6"></path></svg>
                  </span>
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
                  <span class="text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15s1.1-1.1 3.5-1.5C8.3 13 9.5 12 9.5 12s1.1-1.1 3.5-1.5"></path><path d="M19.3 6.8a23 23 0 0 1-3 10.3c-.3.5-1 1.1-1.4 1.4-.3.3-.6.4-1 .5-.5 0-1.3-.2-1.9-1.2-.6-1-4-7.6-4.8-9.1-.2-.4 0-.9.3-1.2.2-.2.4-.3.6-.3h.5c.7.1 2 .5 4.5 4.2.1.2.2.2.3 0 .3-.7 1.1-2.9 1.3-3.7A5 5 0 0 0 15 6c-.2-1.6-1-2-1.7-2.1a2 2 0 0 0-.5 0"></path><path d="M10.2 10.8c0-1 0-1.5-.5-2 4 1 8.7.8 11.7-1.4a17 17 0 0 1-7 8.4c-2 1-4 2.2-6.2 2.7-3 .7-6.1-.7-7.6-3.1a7.5 7.5 0 0 1-.6-8.5c1.4-2.1 4-3.3 6.4-3a8 8 0 0 1 5.3 2.5c0 .3 0-.8 0 0"></path><path d="M19 6.6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg>
                  </span>
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
          <p class="text-xs text-slate-500">Enero 2024</p>
        </div>
        
        <div class="bg-white rounded-lg p-3 text-center shadow-sm">
          <p class="text-sm text-slate-600">Lanzamiento</p>
          <p class="text-2xl font-bold text-indigo-600">{content.summary.estimatedLaunch}</p>
          <p class="text-xs text-slate-500">Abril 2025</p>
        </div>
      </div>
    </div>
  </div>
