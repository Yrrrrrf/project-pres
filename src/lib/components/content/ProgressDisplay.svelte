<script lang="ts">
    import { type ComponentType } from 'svelte';

    let {
        id,
        name,
        progress,
        icon = undefined,
        max = 100,
        showLabel = true,
        showPercentage = true,
        progressColor = "bg-emerald-500",
        bgColor = "bg-gray-200",
        height = "h-2"
    } = $props<{
        id: string;
        name: string;
        progress: number;
        icon?: ComponentType;
        max?: number;
        showLabel?: boolean;
        showPercentage?: boolean;
        progressColor?: string;
        bgColor?: string;
        height?: string;
    }>();

    // Format the percentage
    const percentage = $derived(Math.round((progress / max) * 100));
</script>

<div class="mb-4">
    {#if showLabel}
        <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
                {#if icon}
                    <svelte:component this={icon} class="h-4 w-4" />
                {/if}
                <h3 class="font-medium text-slate-800">{name}</h3>
            </div>
            {#if showPercentage}
                <span class="text-sm text-slate-600">
                    {percentage}% completado
                </span>
            {/if}
        </div>
    {/if}
    
    <div class={`${bgColor} rounded-full overflow-hidden ${height}`}>
        <div 
            class={`${progressColor} h-full rounded-full`} 
            style={`width: ${percentage}%`}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax={max}
            aria-labelledby={`progress-${id}`}
        ></div>
    </div>
    
    {#if showLabel && !showPercentage}
        <div class="flex justify-between text-xs text-slate-500 mt-1">
            <span>0</span>
            <span>{max}</span>
        </div>
    {/if}
</div>