<script lang="ts">
    import type { TechnicalFeasibilityContent } from '$lib/types';
    import { Server, CheckCircle } from 'lucide-svelte';
  
    let { content } = $props<{ content: TechnicalFeasibilityContent }>();
  </script>
  
  <div class="space-y-6">
    <div class="bg-blue-50 rounded-lg p-4">
      <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
        <Server class="h-5 w-5 text-blue-600" />
        Tecnologías Requeridas
      </h3>
      
      <div class="grid md:grid-cols-2 gap-4">
        {#each content.technologies as tech}
          <div class="bg-white rounded-lg border p-3 shadow-sm">
            <div class="flex items-center gap-2 mb-2">
              <div class="bg-blue-100 p-1.5 rounded-full">
                <svelte:component this={tech.icon} class="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h4 class="font-medium text-slate-800">{tech.name}</h4>
                <p class="text-xs text-slate-500">{tech.category}</p>
              </div>
              <span class={`ml-auto badge ${tech.level === 'Alto' ? 'bg-blue-100 text-blue-800' : tech.level === 'Medio' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                {tech.level}
              </span>
            </div>
            <p class="text-sm text-slate-600">{tech.description}</p>
          </div>
        {/each}
      </div>
    </div>
  
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
          <CheckCircle class="h-5 w-5 text-blue-600" />
          Viabilidad Técnica
        </h3>
        
        <div class="bg-white border rounded-lg p-4 shadow-sm">
          <p class="text-slate-700 mb-3">
            El proyecto es técnicamente viable utilizando tecnologías maduras y ampliamente probadas. 
            Las principales consideraciones técnicas incluyen:
          </p>
          
          <div class="space-y-3">
            <div class="flex items-start gap-2">
              <div class="bg-blue-100 rounded-full p-1 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-blue-600">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p class="font-medium text-slate-700">Precisión de geolocalización</p>
                <p class="text-sm text-slate-600">En áreas urbanas densas con edificios altos</p>
              </div>
            </div>
            
            <div class="flex items-start gap-2">
              <div class="bg-blue-100 rounded-full p-1 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-blue-600">
                  <path d="M13 2 3 14h9l-1 8 10-16h-9l1-4z"/>
                </svg>
              </div>
              <div>
                <p class="font-medium text-slate-700">Sincronización en tiempo real</p>
                <p class="text-sm text-slate-600">Entre múltiples dispositivos y servidores</p>
              </div>
            </div>
            
            <div class="flex items-start gap-2">
              <div class="bg-blue-100 rounded-full p-1 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-blue-600">
                  <rect width="3" height="7" x="4" y="10" rx="1.5"/>
                  <rect width="3" height="12" x="10.5" y="5" rx="1.5"/>
                  <rect width="3" height="18" x="17" y="2" rx="1.5"/>
                </svg>
              </div>
              <div>
                <p class="font-medium text-slate-700">Manejo de picos de tráfico</p>
                <p class="text-sm text-slate-600">Durante horas de mayor demanda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-blue-600">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          Disponibilidad de Recursos
        </h3>
        
        <div class="bg-white border rounded-lg p-4 shadow-sm">
          <p class="text-slate-700 mb-3">
            Se requiere un equipo multidisciplinario con experiencia en diversas áreas técnicas:
          </p>
          
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-blue-500"></div>
              <p class="text-slate-700">Desarrollo móvil (Svelte-Kit + Tauri2)</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-blue-500"></div>
              <p class="text-slate-700">Desarrollo backend (Rust: Axum)</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-blue-500"></div>
              <p class="text-slate-700">Bases de datos (PostgreSQL)</p>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-blue-500"></div>
              <p class="text-slate-700">Geolocalización y mapas (Google Maps API)</p>
            </div>
          </div>
          
          <div class="mt-4 p-3 bg-blue-50 rounded-lg">
            <p class="text-slate-700 text-sm">
              <strong>Nota:</strong> La Universidad cuenta con talento en estas áreas a través de 
              estudiantes avanzados y personal docente de la Licenciatura de Ingeniería en Computación, 
              quienes pueden aportar al desarrollo bajo supervisión adecuada.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>