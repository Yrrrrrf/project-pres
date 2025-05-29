<script lang="ts">
    import type { ExecutiveSummaryContent } from '$lib/types';

    let { content } = $props<{ content: ExecutiveSummaryContent }>();
</script>

<div class="grid md:grid-cols-5 gap-6">
    <div class="md:col-span-3">
      <div class="prose max-w-none">
        <p class="mb-4 text-slate-700 leading-relaxed">
          {content.mainParagraph}
        </p>

        {#if content.quote?.text}
          <blockquote class="border-l-4 border-emerald-500 pl-4 my-4 italic text-slate-600">
            {content.quote.text}
            {#if content.quote.cite}
                <footer class="text-xs text-slate-500 mt-1 not-italic">
                    — {content.quote.cite}
                </footer>
            {/if}
          </blockquote>
        {/if}

        {#if content.closingParagraph}
            <p class="text-slate-700">
              {content.closingParagraph}
            </p>
        {/if}
      </div>
    </div>

    <div class="md:col-span-2 bg-emerald-50 rounded-lg p-4">
      <h3 class="font-semibold text-lg mb-3 text-slate-800">{content.keyPointsTitle}</h3>
      <div class="space-y-3">
        {#each content.keyPoints as point}
          <div class="flex items-start gap-2">
            <div class="bg-emerald-100 p-1 rounded-full mt-0.5">
              {#if point.icon?.component}
                {@const IconComponent = point.icon.component}
                <IconComponent class={point.icon.className || "h-4 w-4 text-emerald-600"} />
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