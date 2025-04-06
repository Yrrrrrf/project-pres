<script lang="ts">
	import { Header, Footer, Section, Timeline } from '$lib/components';
	import { Conclusions, EconomicFeasibility, ExecutiveSummary, Objectives, OperativeFeasibility, Risks, Scope, TechnicalFeasibility } from '$lib/components/sections';
	import { projectData } from '$lib/stores/projectData.svelte';

	// Get project data from store
	const title = projectData.title;
	const subtitle = projectData.subtitle;
	const sections = projectData.sections;
</script>

<div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
	<Header {title} subtitle={subtitle} />

	<div class="max-w-5xl mx-auto p-4 md:p-8">
		<div class="mb-8 text-center">
		<h2 class="text-3xl font-bold mb-2 text-slate-800">{title}</h2>
		<p class="text-lg text-slate-600">{subtitle}</p>
		<div class="mt-4 flex flex-wrap justify-center gap-2">
			<span class="badge bg-emerald-600 hover:bg-emerald-700">Ingeniería de Software</span>
			<span class="badge bg-cyan-600 hover:bg-cyan-700">Movilidad Urbana</span>
			<span class="badge bg-violet-600 hover:bg-violet-700">Desarrollo Sostenible</span>
		</div>
		</div>
		
		{#each sections as section (section.id)}
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
			<EconomicFeasibility content={section.content} formatCurrency={projectData.formatCurrency} />
			{:else if section.content.type === 'operative-feasibility'}
			<OperativeFeasibility content={section.content} />
			{:else if section.content.type === 'risks'}
			<Risks content={section.content} getRiskColor={projectData.getRiskColor} />
			{:else if section.content.type === 'timeline'}
			<Timeline content={section.content} />
			{:else if section.content.type === 'conclusions'}
			<Conclusions content={section.content} />
			{:else}
			<p>Contenido para {section.title}</p>
			{/if}
	</Section>
		{/each}
	</div>

	<Footer />
</div>
