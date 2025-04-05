<script lang="ts">
    import { type ComponentType } from 'svelte';
    import SectionHeader from './SectionHeader.svelte';
    import { sectionsStore } from '../../stores/sections.svelte';

    let {
        id,
        title,
        icon,
        iconBgColor = "bg-emerald-100",
        iconColor = "text-emerald-600",
        defaultExpanded = false
    } = $props<{
        id: string;
        title: string;
        icon: ComponentType;
        iconBgColor?: string;
        iconColor?: string;
        defaultExpanded?: boolean;
    }>();

    // On component creation, register this section with the store
    $effect(() => {
        sectionsStore.registerSection(id, defaultExpanded);
    });

    function toggleSection() {
        sectionsStore.toggleSection(id);
    }

    // Get the expanded state from the store
    let isExpanded = $derived(sectionsStore.isSectionExpanded(id));
</script>

<div class="border rounded-lg overflow-hidden shadow-sm bg-white mb-4">
    <button 
        class="w-full px-6 py-4 hover:bg-slate-50 transition-all text-left"
        onclick={toggleSection}
        aria-expanded={isExpanded}
        aria-controls={`section-content-${id}`}
    >
        <SectionHeader {title} {icon} {iconBgColor} {iconColor} />
    </button>
    
    {#if isExpanded}
        <div 
            id={`section-content-${id}`}
            class="px-6 pb-4"
        >
            <slot />
        </div>
    {/if}
</div>