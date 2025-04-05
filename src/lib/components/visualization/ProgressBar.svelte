<script lang="ts">
    let {
        value = 0,
        max = 100,
        height = "h-2",
        color = "bg-primary",
        bgColor = "bg-gray-200",
        rounded = true,
        showLabel = false,
        labelPosition = "top", // "top", "bottom", "right"
        animate = false,
        className = ""
    } = $props<{
        value: number;
        max?: number;
        height?: string;
        color?: string;
        bgColor?: string;
        rounded?: boolean;
        showLabel?: boolean;
        labelPosition?: "top" | "bottom" | "right";
        animate?: boolean;
        className?: string;
    }>();

    // Calculate percentage
    const percentage = $derived(() => {
        const pct = (value / max) * 100;
        return Math.min(Math.max(pct, 0), 100); // Clamp between 0-100
    });

    // Define container classes
    const containerClasses = $derived(() => {
        return `${className} ${showLabel && labelPosition === "right" ? "flex items-center gap-2" : ""}`;
    });

    // Define progress bar classes
    const progressBarClasses = $derived(() => {
        let classes = bgColor;
        if (rounded) classes += ' rounded-full';
        return `${classes} overflow-hidden ${height}`;
    });

    // Define progress indicator classes
    const indicatorClasses = $derived(() => {
        let classes = color;
        if (rounded) classes += ' rounded-full';
        if (animate) classes += ' transition-all duration-300';
        return `${classes} h-full`;
    });
</script>

<div class={containerClasses}>
    {#if showLabel && labelPosition === "top"}
        <div class="flex justify-between mb-1">
            <span class="text-sm font-medium">{value}/{max}</span>
            <span class="text-sm font-medium">{percentage.toFixed(0)}%</span>
        </div>
    {/if}
    
    <div class="flex-grow">
        <div class={progressBarClasses}>
            <div 
                class={indicatorClasses} 
                style={`width: ${percentage}%`}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax={max}
            ></div>
        </div>
    </div>
    
    {#if showLabel && labelPosition === "right"}
        <span class="text-sm font-medium">{percentage.toFixed(0)}%</span>
    {/if}
    
    {#if showLabel && labelPosition === "bottom"}
        <div class="flex justify-between mt-1">
            <span class="text-xs text-gray-500">0</span>
            <span class="text-xs text-gray-500">{max}</span>
        </div>
    {/if}
</div>