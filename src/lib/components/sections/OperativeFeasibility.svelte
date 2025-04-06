<script lang="ts">
    import { ThumbsUp, ThumbsDown, GitBranch, Users, CreditCard, Wrench, Layers, Award, Lightbulb, Smartphone } from 'lucide-svelte';
    
    // Operative Feasibility is not defined in the types yet, 
    // but we're creating it based on the React implementation
    let { content } = $props<{ content: any }>();
  </script>
  
  <div class="space-y-6">
    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
          <GitBranch class="h-5 w-5 text-amber-600" />
          Cambios Organizacionales
        </h3>
        
        <div class="space-y-3">
          <div class="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
            <div class="bg-amber-100 p-1.5 rounded-full mt-0.5">
              <Users class="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p class="font-medium text-slate-800">Capacitación de Personal</p>
              <p class="text-sm text-slate-600 mt-1">
                Conductores y personal administrativo requerirán capacitación en el uso de nuevas 
                tecnologías y procedimientos operativos.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
            <div class="bg-amber-100 p-1.5 rounded-full mt-0.5">
              <CreditCard class="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p class="font-medium text-slate-800">Procedimientos de Cobro</p>
              <p class="text-sm text-slate-600 mt-1">
                Adaptación de métodos de cobro tradicionales a un sistema digital integrado 
                con múltiples opciones de pago.
              </p>
            </div>
          </div>
          
          <div class="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
            <div class="bg-amber-100 p-1.5 rounded-full mt-0.5">
              <Wrench class="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p class="font-medium text-slate-800">Mantenimiento Técnico</p>
              <p class="text-sm text-slate-600 mt-1">
                Nuevos protocolos para el mantenimiento de dispositivos GPS y módulos 
                de transmisión instalados en las unidades.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
          <ThumbsUp class="h-5 w-5 text-amber-600" />
          <span>Estrategias de Adopción</span>
        </h3>
        
        <div class="space-y-3">
          <div class="flex items-center gap-2 p-3 border border-amber-200 rounded-lg">
            <div class="bg-amber-100 p-1.5 rounded-full">
              <Layers class="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p class="font-medium text-slate-800">Implementación Gradual</p>
              <p class="text-sm text-slate-600">Comenzando con rutas de mayor demanda</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2 p-3 border border-amber-200 rounded-lg">
            <div class="bg-amber-100 p-1.5 rounded-full">
              <Award class="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p class="font-medium text-slate-800">Incentivos para Usuarios</p>
              <p class="text-sm text-slate-600">Descuentos y viajes gratuitos promocionales</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2 p-3 border border-amber-200 rounded-lg">
            <div class="bg-amber-100 p-1.5 rounded-full">
              <Lightbulb class="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p class="font-medium text-slate-800">Campañas Educativas</p>
              <p class="text-sm text-slate-600">Información sobre beneficios del sistema</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2 p-3 border border-amber-200 rounded-lg">
            <div class="bg-amber-100 p-1.5 rounded-full">
              <Smartphone class="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p class="font-medium text-slate-800">Alternativas Tecnológicas</p>
              <p class="text-sm text-slate-600">Tarjetas físicas para usuarios sin smartphones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-white border rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
        <ThumbsDown class="h-5 w-5 text-amber-600" />
        <span>Resistencia al Cambio</span>
      </h3>
      
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-amber-50 rounded-lg">
          <h4 class="font-medium text-slate-800 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="m15 9-6 6"/>
              <path d="m9 9 6 6"/>
            </svg>
            Fuentes de Resistencia
          </h4>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
              <p class="text-slate-700">Operadores de transporte reacios a implementar nuevas tecnologías</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
              <p class="text-slate-700">Usuarios sin acceso a smartphones o datos móviles</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
              <p class="text-slate-700">Preocupaciones sobre privacidad y uso de datos personales</p>
            </li>
          </ul>
        </div>
        
        <div class="p-4 bg-amber-50 rounded-lg">
          <h4 class="font-medium text-slate-800 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
            Estrategias de Mitigación
          </h4>
          <ul class="space-y-2">
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <p class="text-slate-700">Programas de capacitación inclusivos y accesibles</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <p class="text-slate-700">Alternativas para usuarios sin acceso a tecnología</p>
            </li>
            <li class="flex items-start gap-2">
              <div class="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <p class="text-slate-700">Políticas claras de privacidad y protección de datos</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-6 p-4 bg-white border border-amber-200 rounded-lg">
        <div class="flex items-center gap-2 mb-2">
          <Lightbulb class="h-5 w-5 text-amber-600" />
          <h4 class="font-medium text-slate-800">Análisis de Impacto en Stakeholders</h4>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-amber-200">
            <thead>
              <tr>
                <th class="px-4 py-2 text-left text-sm font-medium text-slate-700">Grupo</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-slate-700">Impacto</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-slate-700">Nivel de Resistencia</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-slate-700">Estrategia</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-amber-100">
              <tr>
                <td class="px-4 py-2 text-sm text-slate-700">Conductores</td>
                <td class="px-4 py-2 text-sm text-slate-700">Alto</td>
                <td class="px-4 py-2 text-sm text-slate-700">
                  <span class="badge bg-red-100 text-red-700">Alto</span>
                </td>
                <td class="px-4 py-2 text-sm text-slate-700">Capacitación y beneficios directos</td>
              </tr>
              <tr>
                <td class="px-4 py-2 text-sm text-slate-700">Usuarios jóvenes</td>
                <td class="px-4 py-2 text-sm text-slate-700">Medio</td>
                <td class="px-4 py-2 text-sm text-slate-700">
                  <span class="badge bg-green-100 text-green-700">Bajo</span>
                </td>
                <td class="px-4 py-2 text-sm text-slate-700">Experiencia de usuario intuitiva</td>
              </tr>
              <tr>
                <td class="px-4 py-2 text-sm text-slate-700">Adultos mayores</td>
                <td class="px-4 py-2 text-sm text-slate-700">Medio</td>
                <td class="px-4 py-2 text-sm text-slate-700">
                  <span class="badge bg-red-100 text-red-700">Alto</span>
                </td>
                <td class="px-4 py-2 text-sm text-slate-700">Alternativas no digitales y asistencia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>