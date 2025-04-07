// place files you want to import through the `$lib` alias in this folder.
// src/lib/components/index.ts

// Layout components
export { default as Footer } from './layout/Footer.svelte';
export { default as Header } from './layout/Header.svelte';
export { default as Section } from './layout/Section.svelte';
export { default as SectionHeader } from './layout/SectionHeader.svelte';

// Content components
export { default as InfoCard } from './content/InfoCard.svelte';
export { default as ProgressDisplay } from './content/ProgressDisplay.svelte';
export { default as DataTable } from './content/DataTable.svelte';
export { default as TabContainer } from './content/TabContainer.svelte';

// Visualization components
export { default as Timeline } from './visualization/Timeline.svelte';
export { default as RiskMatrix } from './visualization/RiskMatrix.svelte';
export { default as ProgressBar } from './visualization/ProgressBar.svelte';
export { default as ChartContainer } from './visualization/ChartContainer.svelte';
