<script lang="ts">
    import { type ComponentType } from 'svelte';

    let {
        title,
        icon,
        iconBgColor = "bg-emerald-100",
        iconColor = "text-emerald-600"
    } = $props<{
        title: string;
        icon: ComponentType;
        iconBgColor?: string;
        iconColor?: string;
    }>();
</script>

<div class="flex items-center gap-3">
    <div class={`${iconBgColor} p-2 rounded-full`}>
        <icon class={`h-5 w-5 ${iconColor}`}></icon>
    </div>
    <span class="font-semibold text-lg text-slate-800">{title}</span>
</div>