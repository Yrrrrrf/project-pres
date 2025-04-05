<script lang="ts">
    import { onMount } from 'svelte';

    let {
        title = "",
        description = "",
        type = "bar", // "bar", "line", "pie", "doughnut", "radar", "polarArea", "bubble", "scatter"
        data = {},
        options = {},
        width = "100%",
        height = "300px",
        className = ""
    } = $props<{
        title?: string;
        description?: string;
        type?: string;
        data?: any;
        options?: any;
        width?: string;
        height?: string;
        className?: string;
    }>();

    let canvas: HTMLCanvasElement;
    let chart: any;

    // To be implemented by the consuming component
    // This is just a skeleton - you'll need to add Chart.js or another library
    onMount(() => {
        // If using Chart.js, you would initialize it here
        // Example:
        // chart = new Chart(canvas, {
        //     type: type,
        //     data: data,
        //     options: options
        // });
        
        // return () => {
        //     if (chart) chart.destroy();
        // };
    });
</script>

<div class={`chart-container ${className}`}>
    {#if title}
        <h3 class="text-lg font-semibold mb-1">{title}</h3>
    {/if}
    
    {#if description}
        <p class="text-sm text-gray-500 mb-4">{description}</p>
    {/if}
    
    <div class="relative" style={`width: ${width}; height: ${height};`}>
        <canvas bind:this={canvas}></canvas>
        <slot name="overlay"></slot>
    </div>
    
    <slot name="legend"></slot>
    <slot name="footer"></slot>
</div>