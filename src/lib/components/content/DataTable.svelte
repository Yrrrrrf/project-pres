<script lang="ts">
    // Import ComponentType if you expect cells to be actual Svelte components
    import type { ComponentType } from 'svelte';

    let {
        headers = [],
        data = [],
        caption = "",
        striped = true,
        bordered = true,
        compact = false,
        responsive = true,
        className = ""
    } = $props<{
        headers: string[];
        data: any[][]; // Keep 'any' for flexibility, or define a stricter cell type
        caption?: string;
        striped?: boolean;
        bordered?: boolean;
        compact?: boolean;
        responsive?: boolean;
        className?: string;
    }>();

    let tableClass = $derived(`min-w-full divide-y
        ${bordered ? 'border-collapse border' : ''}
        ${striped ? 'divide-slate-200' : ''}
        ${compact ? 'text-sm' : ''}
        ${className}`
    );

    // Helper to check if a value is a Svelte component constructor
    function isSvelteComponent(value: any): value is ComponentType {
        return typeof value === 'function' || (typeof value === 'object' && value !== null && 'render' in value);
    }
</script>

{#if responsive}
    <div class="overflow-x-auto">
        <table class={tableClass}>
            {#if caption}
                <caption class="sr-only">{caption}</caption>
            {/if}

            <thead>
                <tr>
                    {#each headers as header}
                        <th class="px-4 py-2 text-left text-sm font-medium text-slate-700">{header}</th>
                    {/each}
                </tr>
            </thead>

            <tbody class={striped ? 'divide-y divide-slate-100' : ''}>
                {#each data as row, rowIndex}
                    <tr class={striped && rowIndex % 2 ? 'bg-slate-50' : ''}>
                        {#each row as cell, cellIndex}
                            <td class="px-4 py-2 text-sm text-slate-700">
                                {#if isSvelteComponent(cell)}
                                    {@const CellComponent = cell}
                                    <CellComponent />
                                {:else}
                                    {cell}
                                {/if}
                            </td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{:else}
    <table class={tableClass}>
        {#if caption}
            <caption class="sr-only">{caption}</caption>
        {/if}

        <thead>
            <tr>
                {#each headers as header}
                    <th class="px-4 py-2 text-left text-sm font-medium text-slate-700">{header}</th>
                {/each}
            </tr>
        </thead>

        <tbody class={striped ? 'divide-y divide-slate-100' : ''}>
            {#each data as row, rowIndex}
                <tr class={striped && rowIndex % 2 ? 'bg-slate-50' : ''}>
                    {#each row as cell, cellIndex}
                        <td class="px-4 py-2 text-sm text-slate-700">
                            {#if isSvelteComponent(cell)}
                                {@const CellComponent = cell}
                                <CellComponent />
                            {:else}
                                {cell}
                            {/if}
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
{/if}