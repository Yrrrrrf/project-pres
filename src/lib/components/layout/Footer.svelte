<script lang="ts">
    import type { FooterContent } from '$lib/types'; // Ensure this type is correctly defined
    // Import all icons that might be used or fallbacks
    import { BookOpen, Building, UserCheck, Tag, Calendar as CalendarIcon, Edit3 } from 'lucide-svelte';

    let { content } = $props<{ content: FooterContent }>();

    // Helper for icon rendering (optional, but can make template cleaner)
    function getIcon(iconDetail: typeof content.courseInfo.icon, DefaultIcon: typeof BookOpen, defaultClass: string) {
        return {
            component: iconDetail?.component || DefaultIcon,
            className: iconDetail?.className || defaultClass
        };
    }

    const courseInfoIcon = getIcon(content.courseInfo.icon, BookOpen, 'h-5 w-5');
    const contextIcon = getIcon(content.courseInfo.documentContextIcon, Edit3, 'h-4 w-4 mt-1 flex-shrink-0');

</script>

<footer class="bg-slate-800 text-white py-8 px-4 mt-12">
    <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                    {#if courseInfoIcon.component}
                        <courseInfoIcon.component class={courseInfoIcon.className} />
                    {/if}
                    {content.courseInfo.title}
                </h3>
                <p class="text-slate-300">
                    {content.courseInfo.institution}<br />
                    {content.courseInfo.faculty}
                </p>
                <p class="mt-4 text-slate-400 text-sm flex items-start gap-2">
                     {#if contextIcon.component}
                       <contextIcon.component class={contextIcon.className} />
                    {/if}
                    <span>{content.courseInfo.documentContext}</span>
                </p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">{content.courseDetails.title}</h3>
                <ul class="space-y-2 text-slate-300">
                    {#each content.courseDetails.items as item}
                        {@const itemIcon = getIcon(item.icon, CalendarIcon, 'h-4 w-4 text-emerald-400')}
                        <li class="flex items-center gap-2">
                            {#if itemIcon.component}
                                <itemIcon.component class={itemIcon.className} />
                            {/if}
                            <span>{item.label} {item.value}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="border-t border-slate-700 mt-6 pt-6 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} {content.copyrightInstitution}. {content.copyrightText}
        </div>
    </div>
</footer>