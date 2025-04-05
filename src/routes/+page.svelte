<script lang="ts">
    import { Header, Footer, Section } from '$lib/components';
    import { projectData } from '$lib/stores/projectData.svelte';
  
    // Destructure title and sections from the project data store
    const { title, sections } = projectData;
  </script>
  
  <Header title={title} />
  
  <main class="max-w-5xl mx-auto p-4 md:p-8">
    {#each sections as section (section.id)}
      <!-- Render each section dynamically -->
      <Section id={section.id} title={section.title} icon={section.icon}>
        <!-- Conditional rendering based on the content type -->
        {#if section.content.type === 'executive-summary'}
          <p class="text-lg text-slate-700">{section.content.summary}</p>
        {:else if section.content.type === 'objectives'}
          <p>{section.content.description}</p>
          <ul class="list-disc pl-5 mt-2">
            {#each section.content.objectives as objective}
              <li>{objective.name}</li>
            {/each}
          </ul>
        {:else if section.content.type === 'scope'}
          <p>El alcance incluye:</p>
          <ul class="list-disc pl-5 mt-2">
            {#each section.content.components as component}
              <li>
                <strong>{component.title}</strong>: {component.description}
              </li>
            {/each}
          </ul>
        {:else}
          <!-- Fallback for any other section types -->
          <p>Contenido para {section.title}</p>
        {/if}
      </Section>
    {/each}
  </main>
  
  <Footer />
  
  <!-- DaisyUI Test Component remains unchanged -->
  <div class="fixed bottom-4 right-4 p-4 bg-primary text-primary-content rounded-xl shadow-lg">
      <p class="font-bold">DaisyUI Test</p>
      <div class="flex gap-2 mt-2">
          <button class="btn btn-secondary btn-sm">Secondary</button>
          <button class="btn btn-accent btn-sm">Accent</button>
          <button class="btn btn-neutral btn-sm">Neutral</button>
      </div>
  </div>
  