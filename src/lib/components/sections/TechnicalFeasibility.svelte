<script lang="ts">
    import type { TechnicalFeasibilityContent } from '$lib/types';
    import { Server, CheckCircle } from 'lucide-svelte';

    let { content } = $props<{ content: TechnicalFeasibilityContent }>();
  </script>

  <div class="space-y-6">
    <div class="bg-blue-50 rounded-lg p-4">
      <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
        {#if content.technologiesTitleIcon?.component}
            <svelte:component this={content.technologiesTitleIcon.component} class={content.technologiesTitleIcon.className || 'h-5 w-5 text-blue-600'} />
        {:else}
            <Server class="h-5 w-5 text-blue-600" />
        {/if}
        {content.technologiesTitle}
      </h3>

      <div class="grid md:grid-cols-2 gap-4">
        {#each content.technologies as tech}
          <div class="bg-white rounded-lg border p-3 shadow-sm">
            <div class="flex items-center gap-2 mb-2">
              <div class="bg-blue-100 p-1.5 rounded-full">
                {#if tech.icon?.component}
                    <svelte:component this={tech.icon.component} class={tech.icon.className || 'h-4 w-4 text-blue-600'} />
                {/if}
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
            {#if content.viabilityTitleIcon?.component}
                <svelte:component this={content.viabilityTitleIcon.component} class={content.viabilityTitleIcon.className || 'h-5 w-5 text-blue-600'} />
            {:else}
                <CheckCircle class="h-5 w-5 text-blue-600" />
            {/if}
            {content.viabilityTitle}
        </h3>

        <div class="bg-white border rounded-lg p-4 shadow-sm">
          <p class="text-slate-700 mb-3">
            {content.viabilityIntro}
          </p>

          <div class="space-y-3">
            {#each content.viabilityPoints as point}
              <div class="flex items-start gap-2">
                <div class="bg-blue-100 rounded-full p-1 mt-0.5">
                    {#if point.icon?.component}
                        <svelte:component this={point.icon.component} class={point.icon.className || 'h-4 w-4 text-blue-600'} />
                    {/if}
                </div>
                <div>
                  <p class="font-medium text-slate-700">{point.title}</p>
                  <p class="text-sm text-slate-600">{point.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
            {#if content.resourcesTitleIcon?.component}
                <svelte:component this={content.resourcesTitleIcon.component} class={content.resourcesTitleIcon.className || 'h-5 w-5 text-blue-600'} />
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-blue-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            {/if}
            {content.resourcesTitle}
        </h3>

        <div class="bg-white border rounded-lg p-4 shadow-sm">
          <p class="text-slate-700 mb-3">
            {content.resourcesIntro}
          </p>

          <div class="space-y-2">
            {#each content.resourcePoints as item}
              <div class="flex items-center gap-2">
                {#if item.icon?.component}
                    <svelte:component this={item.icon.component} class={item.icon.className || 'w-2 h-2 rounded-full bg-blue-500'} />
                {:else}
                    <div class="w-2 h-2 rounded-full bg-blue-500"></div> <!-- Fallback for generic bullet -->
                {/if}
                <p class="text-slate-700">{item.text}</p>
              </div>
            {/each}
          </div>

          {#if content.resourcesNote}
            <div class="mt-4 p-3 bg-blue-50 rounded-lg">
                <p class="text-slate-700 text-sm">
                <strong>Nota:</strong> {content.resourcesNote}
                </p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>