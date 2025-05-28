<script lang="ts">
    import type { HeaderContent } from '$lib/types'; // Ensure this type is correctly defined
    import { University } from 'lucide-svelte'; // Default/fallback

    let { content } = $props<{ content: HeaderContent }>();

    // Handle optional icon with a default
    const InstitutionIconComponent = content.institutionIcon?.component || University;
    const institutionIconClassName = content.institutionIcon?.className || 'h-8 w-8';
</script>

<header class="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-8 px-4 shadow-lg">
    <div class="max-w-5xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="mb-4 md:mb-0">
                <h1 class="text-4xl font-bold tracking-tight">{content.projectTitle}</h1>
                <p class="text-emerald-100 mt-2 text-lg">{content.projectSubtitle}</p>
            </div>
            <div class="flex items-center gap-2">
                {#if content.institutionIcon}
                    <InstitutionIconComponent class={institutionIconClassName} />
                {/if}
                <div>
                    <p class="font-medium">{content.courseName}</p>
                    <p class="text-sm text-emerald-100">{content.institution}</p>
                </div>
            </div>
        </div>
    </div>
</header>