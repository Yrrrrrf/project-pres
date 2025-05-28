<script lang="ts">
	import { Header, Footer, Section } from '$lib/components';
	import { 
        Conclusions, EconomicFeasibility, ExecutiveSummary, Objectives, 
        OperativeFeasibility, Risks, Scope, TechnicalFeasibility, Timeline 
    } from '$lib/components/sections';
	import { projectData } from '$lib/stores/projectData.svelte';

	// Get project data from store
    const config = projectData.config;
    $: browserTitle = config.siteHtmlTitle || config.header.projectTitle;
</script>

<svelte:head>
    <title>{browserTitle}</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
	<Header content={config.header} />

	<div class="max-w-5xl mx-auto p-4 md:p-8">
		<div class="mb-8 text-center">
            <h2 class="text-3xl font-bold mb-2 text-slate-800">{config.pageIntro.title}</h2>
            <p class="text-lg text-slate-600">{config.pageIntro.subtitle}</p>
            <div class="mt-4 flex flex-wrap justify-center gap-2">
                {#each config.pageIntro.badges as badge (badge.text)}
                    <span class="badge {badge.bgColorClass} {badge.hoverBgColorClass} {badge.textColorClass || 'text-white'}">
                        {#if badge.icon}
                            <svelte:component this={badge.icon.component} class={badge.icon.className} />
                        {/if}
                        {badge.text}
                    </span>
                {/each}
            </div>
		</div>
		
		{#each config.sections as section (section.id)}
            <Section
                id={section.id} 
                title={section.title} 
                icon={section.icon}
                iconBgColor={section.iconBgColor}
                iconColor={section.iconColor}
                defaultExpanded={section.defaultExpanded}
            >
                {#if section.content.type === 'executive-summary'}
                    <ExecutiveSummary content={section.content} />
                {:else if section.content.type === 'objectives'}
                    <Objectives content={section.content} />
                {:else if section.content.type === 'scope'}
                    <Scope content={section.content} />
                {:else if section.content.type === 'technical-feasibility'}
                    <TechnicalFeasibility content={section.content} />
                {:else if section.content.type === 'economic-feasibility'}
                    <!-- Assuming formatCurrency is now in utils -->
                    <!-- <EconomicFeasibility content={section.content} /> -->
                {:else if section.content.type === 'operative-feasibility'}
                    <OperativeFeasibility content={section.content} />
                {:else if section.content.type === 'risks'}
                    <!-- Assuming getRiskColor is now in utils -->
                    <!-- <Risks content={section.content} /> -->
                {:else if section.content.type === 'timeline'}
                    <Timeline content={section.content} />
                {:else if section.content.type === 'conclusions'}
                    <Conclusions content={section.content} />
                {:else}
                    <!-- <p>Contenido para {section.title} (Tipo: {section.content.type || 'desconocido'})</p> -->
                {/if}
            </Section>
		{/each}
	</div>

	<Footer content={config.footer} />
</div>