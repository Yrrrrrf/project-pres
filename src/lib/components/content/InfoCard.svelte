<script lang="ts">
    import { type ComponentType } from 'svelte';

    let {
        title = "",
        icon = undefined,
        bgColor = "bg-white",
        iconBgColor = "bg-emerald-100", 
        iconColor = "text-emerald-600",
        borderColor = "border-slate-200",
        showIcon = true
    } = $props<{
        title?: string;
        icon?: ComponentType;
        bgColor?: string;
        iconBgColor?: string;
        iconColor?: string;
        borderColor?: string;
        showIcon?: boolean;
    }>();
</script>

<div class={`${bgColor} border ${borderColor} rounded-lg p-4 shadow-sm mb-4`}>
    {#if title}
        <div class="flex items-center gap-2 mb-3">
            {#if showIcon && icon}
                <div class={`${iconBgColor} p-1.5 rounded-full`}>
                    {#if icon}
                        {@const Icon = icon}
                        <Icon class={`h-5 w-5 ${iconColor}`} />
                    {/if}
                </div>
            {/if}
            <h3 class="font-medium text-slate-800">{title}</h3>
        </div>
    {/if}
    
    <div>
        <slot />
    </div>
</div>