<script lang="ts">
  // Removed: import { CheckCircle, ThumbsUp, AlertTriangle, ArrowRight } from 'lucide-svelte'; // Icons from data
  import type { ConclusionsContent } from '$lib/types';

  let { content } = $props<{ content: ConclusionsContent }>();
</script>

<div class="space-y-6">
  <div class="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-6 border border-teal-100">
    <h3 class="font-semibold text-xl mb-4 text-slate-800 text-center">
        {content.generalConclusionTitle || 'Conclusión General'}
    </h3>
    
    {#each content.mainConclusionParagraphs as paragraph}
    <p class="text-slate-700 leading-relaxed mb-4">
      {paragraph}
    </p>
    {/each}

    {#if content.overallRecommendationText}
    <div class="mt-6 text-center">
        <span class={content.overallRecommendationBoxClass || 'inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full'}>
            {#if content.overallRecommendationIcon?.component}
                {@const Icon = content.overallRecommendationIcon.component}
                <Icon class={content.overallRecommendationIcon.className || 'h-5 w-5'} />
            {/if}
            {content.overallRecommendationText}
        </span>
    </div>
    {/if}
  </div>
  
  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white border rounded-lg p-4 shadow-sm">
      <h3 class="font-semibold text-lg mb-3 text-slate-800 flex items-center gap-2">
        {#if content.strengthsTitleIcon?.component}
            {@const Icon = content.strengthsTitleIcon.component}
            <Icon class={content.strengthsTitleIcon.className || 'h-5 w-5 text-teal-600'} />
        {/if}
        {content.strengthsTitle}
      </h3>
      
      <div class="space-y-2">
        {#each content.strengths as strength}
          <div class="flex items-start gap-2 p-3 bg-teal-50 rounded-lg">
            {#if strength.icon?.component}
                {@const Icon = strength.icon.component}
                <Icon class={strength.icon.className || 'h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5'} />
            {/if}
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
        {#if content.considerationsTitleIcon?.component}
            {@const Icon = content.considerationsTitleIcon.component}
            <Icon class={content.considerationsTitleIcon.className || 'h-5 w-5 text-amber-600'} />
        {/if}
        {content.considerationsTitle}
      </h3>
      
      <div class="space-y-2">
        {#each content.considerations as consideration}
          <div class="flex items-start gap-2 p-3 bg-amber-50 rounded-lg">
            {#if consideration.icon?.component}
                {@const Icon = consideration.icon.component}
                <Icon class={consideration.icon.className || 'h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5'} />
            {/if}
            <div>
              <p class="font-medium text-slate-800">{consideration.title}</p>
              <p class="text-sm text-slate-600">{consideration.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  {#if content.nextSteps && content.nextSteps.length > 0}
  <div class="bg-white border rounded-lg p-4 shadow-sm">
    <h3 class="font-semibold text-lg mb-4 text-slate-800 flex items-center gap-2">
      {#if content.nextStepsTitleIcon?.component}
          {@const Icon = content.nextStepsTitleIcon.component}
          <Icon class={content.nextStepsTitleIcon.className || 'h-5 w-5 text-teal-600'} />
      {/if}
      {content.nextStepsTitle}
    </h3>
    
    <div class="relative">
      <div class="absolute left-4 inset-y-0 w-0.5 bg-teal-200"></div>
      
      <div class="space-y-6">
        {#each content.nextSteps as step (step.id)}
        <div class="relative pl-10">
          <div class={`absolute left-2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${content.nextStepsTimelineIndicatorClass || 'bg-teal-500 text-white'}`}>
            {step.id}
          </div>
          <div class="bg-teal-50 p-4 rounded-lg">
            <h4 class="font-medium text-slate-800 mb-2">{step.title}</h4>
            <p class="text-sm text-slate-600">
              {step.description}
            </p>
            <div class="mt-2 flex justify-end">
              <span class={`badge ${step.priorityBadgeClass || 'bg-teal-100 text-teal-800'}`}>{step.priority}</span>
            </div>
          </div>
        </div>
        {/each}
      </div>
    </div>
  </div>
  {/if}

  {#if content.finalRecommendationSection}
    <div class="bg-white border rounded-lg p-6 shadow-sm text-center">
        <h3 class="font-semibold text-xl mb-4 text-slate-800 flex items-center justify-center gap-2">
            {#if content.finalRecommendationSection.icon?.component}
                {@const Icon = content.finalRecommendationSection.icon.component}
                <Icon class={content.finalRecommendationSection.icon.className || 'h-5 w-5 text-teal-600'} />
            {/if}
            {content.finalRecommendationSection.title}
        </h3>
        <p class="text-slate-700 leading-relaxed mb-6">
            {content.finalRecommendationSection.text}
        </p>
        {#if content.finalRecommendationSection.actionButton}
            <button class={content.finalRecommendationSection.actionButton.className || 'bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'}>
                {#if content.finalRecommendationSection.actionButton.icon?.component}
                    {@const Icon = content.finalRecommendationSection.actionButton.icon.component}
                    <Icon class={content.finalRecommendationSection.actionButton.icon.className || 'mr-2 h-4 w-4'} />
                {/if}
                {content.finalRecommendationSection.actionButton.text}
            </button>
        {/if}
    </div>
  {/if}
</div>