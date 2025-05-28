<script lang="ts">
    import { CheckCircle, ThumbsUp, AlertTriangle, ArrowRight } from 'lucide-svelte';
    import type { ConclusionsContent } from '$lib/types';
  
    let { content } = $props<{ content: ConclusionsContent }>();
  </script>
  
  <div class="space-y-6">
    <div class="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-6 border border-teal-100">
      <h3 class="font-semibold text-xl mb-4 text-slate-800 text-center">Conclusión General</h3>
      
      <p class="text-slate-700 leading-relaxed mb-4">
        {content.mainConclusion}
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
          <ThumbsUp class="h-5 w-5 text-teal-600" />
          Fortalezas del Proyecto
        </h3>
        
        <div class="space-y-2">
          {#each content.strengths as strength}
            <div class="flex items-start gap-2 p-3 bg-teal-50 rounded-lg">
              <CheckCircle class="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p class="font-medium text-slate-800">{strength.title}</p>
                <p class="text-sm text-slate-600">{strength.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
          <AlertTriangle class="h-5 w-5 text-amber-600" />
          Consideraciones Clave
        </h3>
        
        <div class="space-y-2">
          {#each content.considerations as consideration}
            <div class="flex items-start gap-2 p-3 bg-amber-50 rounded-lg">
              <AlertTriangle class="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p class="font-medium text-slate-800">{consideration.title}</p>
                <p class="text-sm text-slate-600">{consideration.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
    
    <div class="bg-white border rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-4 text-slate-800 flex items-center gap-2">
        <ArrowRight class="h-5 w-5 text-teal-600" />
        Próximos Pasos Recomendados
      </h3>
      
      <div class="relative">
        <div class="absolute left-4 inset-y-0 w-0.5 bg-teal-200"></div>
        
        <div class="space-y-6">
          <div class="relative pl-10">
            <div class="absolute left-2 -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-medium text-slate-800 mb-2">Establecer Comité Directivo</h4>
              <p class="text-sm text-slate-600">
                Formar un comité con representantes de todas las partes interesadas: gobierno, 
                operadores de transporte, usuarios, expertos técnicos y académicos.
              </p>
              <div class="mt-2 flex justify-end">
                <span class="badge bg-teal-100 text-teal-800">Prioridad: Alta</span>
              </div>
            </div>
          </div>
          
          <div class="relative pl-10">
            <div class="absolute left-2 -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-medium text-slate-800 mb-2">Asegurar Financiamiento Inicial</h4>
              <p class="text-sm text-slate-600">
                Gestionar los recursos necesarios para la fase inicial de desarrollo, 
                explorando las diversas fuentes de financiamiento identificadas.
              </p>
              <div class="mt-2 flex justify-end">
                <span class="badge bg-teal-100 text-teal-800">Prioridad: Alta</span>
              </div>
            </div>
          </div>
          
          <div class="relative pl-10">
            <div class="absolute left-2 -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-medium text-slate-800 mb-2">Estudio Detallado de Rutas Prioritarias</h4>
              <p class="text-sm text-slate-600">
                Realizar un análisis detallado de las rutas con mayor demanda y problemática
                para implementación piloto, recopilando datos de flujo de pasajeros.
              </p>
              <div class="mt-2 flex justify-end">
                <span class="badge bg-teal-100 text-teal-800">Prioridad: Media</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>