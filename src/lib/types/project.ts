// src/lib/types/project.ts
import type { ComponentType } from 'svelte';

// --- Global Types ---
// Used for icons that have both a component and optional styling classes
export interface IconDetail {
	component: ComponentType;
	className?: string;
}

export interface HeaderContent {
	projectTitle: string; // "Sistema Inteligente de Transporte Público" (for H1)
	projectSubtitle: string; // "Análisis de Factibilidad y Propuesta de Implementación" (for H1's p)
	courseName: string;
	institution: string;
	institutionIcon?: IconDetail;
}

export interface FooterContent {
	courseInfo: {
		title: string; // "Ingeniería de Software I"
		icon?: IconDetail;
		institution: string;
		faculty: string;
		documentContext: string; // "Este documento forma parte del análisis..."
		documentContextIcon?: IconDetail;
	};
	courseDetails: {
		title: string; // "Información del Curso"
		items: {
			label: string; // "Semestre:", "Profesor:", "Clave de la materia:"
			value: string;
			icon?: IconDetail;
		}[];
	};
	copyrightInstitution: string; // "Universidad Autónoma del Estado de México"
	copyrightText: string; // "Todos los derechos reservados."
}

export interface PageBadge {
	text: string;
	bgColorClass: string; // e.g., 'bg-emerald-600'
	hoverBgColorClass: string; // e.g., 'hover:bg-emerald-700'
	textColorClass?: string; // e.g., 'text-white'
	icon?: IconDetail; // Optional icon for the badge
}

// --- Section Specific Types ---

// Executive Summary
export interface KeyPoint {
	title: string;
	description: string;
	icon: IconDetail;
}
export interface ExecutiveSummaryContent {
	type: 'executive-summary'; // Discriminant
	mainParagraph: string;
	quote?: {
		text: string;
		cite?: string; // Optional citation for the quote
	};
	keyPointsTitle: string;
	keyPoints: KeyPoint[];
	closingParagraph?: string;
}

// Objectives
export interface ObjectiveItem {
	id: string;
	name: string;
	progress: number; // 0-100
	icon?: IconDetail; // For ProgressDisplay component
}
export interface SuccessCriterion {
	title: string;
	description: string;
	icon?: IconDetail; // e.g., a checkmark
}
export interface ObjectivesContent {
	type: 'objectives'; // Discriminant
	description: string;
	objectives: ObjectiveItem[]; // Data for ProgressDisplay
	successCriteriaBoxTitle: string;
	successCriteriaBoxIcon?: IconDetail;
	successCriteria: SuccessCriterion[];
}

// Scope
export interface ScopeComponentItem { // Renamed from ScopeComponent for consistency with data
	title: string;
	description: string;
	icon: IconDetail;
}
export interface DeliverableItem {
	text: string;
	icon?: IconDetail; // Typically a checkmark
}
export interface DeliverablePhase {
	phaseTitle: string;
	items: DeliverableItem[];
}
export interface ScopeContent {
	type: 'scope'; // Discriminant
	componentsTitle: string;
	components: ScopeComponentItem[];
	deliverablesTitle: string;
	deliverables: DeliverablePhase[];
}

// Technical Feasibility
export interface TechnologyItem {
	name: string;
	category: string;
	description: string;
	level: 'Alto' | 'Medio' | 'Bajo'; // For the badge
	icon: IconDetail;
}
export interface ViabilityPoint {
	title: string;
	description: string;
	icon: IconDetail;
}
export interface ResourcePoint {
	text: string;
	icon?: IconDetail; // e.g., a bullet point, or specific Lucide icon
}
export interface TechnicalFeasibilityContent {
	type: 'technical-feasibility'; // Discriminant
	technologiesTitle: string;
	technologiesTitleIcon?: IconDetail;
	technologies: TechnologyItem[];
	viabilityTitle: string;
	viabilityTitleIcon?: IconDetail;
	viabilityIntro: string;
	viabilityPoints: ViabilityPoint[];
	resourcesTitle: string;
	resourcesTitleIcon?: IconDetail;
	resourcesIntro: string;
	resourcePoints: ResourcePoint[];
	resourcesNote?: string;
}

// Economic Feasibility
export interface CostBenefitItem {
	name: string;
	amount: number;
	percentage: number; // Used for the bar in EconomicFeasibility.svelte
}
export interface ROIDataPoint {
	yearLabel: string; // "Año 1", "Año 2", etc.
	value: number; // Actual monetary value for the bar height
	formattedValue: string; // Pre-formatted currency for display
}
export interface ROISummaryItem {
    label: string;
    value: string;
    valueColorClass?: string; // e.g., 'text-red-600' or 'text-green-600'
}
export interface EconomicTab {
	id: string; // 'costs', 'benefits', 'roi'
	tabTitle: string; // "Costos", "Beneficios", "ROI"
	tabIcon?: IconDetail; // Optional icon for the tab button
	contentTitle?: string; // "Costos Estimados del Proyecto"
	items?: CostBenefitItem[]; // For costs and benefits
	totalLabel?: string; // "Costo Total Estimado:"
	note?: string; // For the IMCO data note in benefits
	roiChartData?: ROIDataPoint[];
    roiSummaryItems?: ROISummaryItem[];
}
export interface FundingSourceItem {
	text: string;
	icon?: IconDetail; // e.g., an arrow
}
export interface FundingSources {
	title: string; // "Fuentes de Financiamiento"
	titleIcon?: IconDetail;
	publicTitle: string; // "Fondos Públicos"
	publicSources: FundingSourceItem[];
	privateTitle: string; // "Fondos Privados"
	privateSources: FundingSourceItem[];
}
export interface EconomicFeasibilityContent {
	type: 'economic-feasibility'; // Discriminant
	tabs: EconomicTab[];
	funding: FundingSources;
}

// Operative Feasibility
export interface OperativeListItem {
	title: string;
	description: string;
	icon: IconDetail;
}
export interface OperativePoint { // For simple bulleted lists in resistance/mitigation
    text: string;
    icon?: IconDetail; // For bullet style
}
export interface StakeholderImpactRow {
	group: string;
	impact: string; // e.g., "Alto", "Medio", "Bajo"
	resistanceLevel: 'Alto' | 'Medio' | 'Bajo';
	resistanceBadgeClass?: string; // Optional: if colors are data-driven beyond the level
	strategy: string;
}
export interface OperativeFeasibilityContent {
	type: 'operative-feasibility'; // Discriminant
	orgChangesTitle: string;
	orgChangesIcon?: IconDetail;
	orgChangesItems: OperativeListItem[];
	adoptionStrategiesTitle: string;
	adoptionStrategiesIcon?: IconDetail;
	adoptionStrategiesItems: OperativeListItem[];
	resistanceAnalysisTitle: string; // "Resistencia al Cambio"
	resistanceAnalysisIcon?: IconDetail;
	resistanceSourcesTitle: string;
	resistanceSourcesIcon?: IconDetail;
	resistanceSourcePoints: OperativePoint[];
	mitigationStrategiesTitle: string;
	mitigationStrategiesIcon?: IconDetail;
	mitigationStrategyPoints: OperativePoint[];
	stakeholderImpactTitle: string;
	stakeholderImpactIcon?: IconDetail;
	stakeholderImpactTableHeaders: string[]; // e.g., ["Grupo", "Impacto", ...]
	stakeholderImpactRows: StakeholderImpactRow[];
}

// Risks
export interface RiskItemData {
	name: string;
	impact: 'Alto' | 'Medio' | 'Bajo';
	probability: 'Alto' | 'Medio' | 'Bajo';
	category: string;
	mitigation: string;
}
export interface RiskCategoryTab {
    id: string; // Unique ID for the tab
    title: string; // Display title for the tab
    icon?: IconDetail;
    risks: RiskItemData[];
}
export interface RisksContent {
	type: 'risks'; // Discriminant
    riskCategories?: RiskCategoryTab[]; // Use this if you want tabs for categories
    allRisks?: RiskItemData[]; // Fallback to a flat list (e.g. for RiskMatrix)
	matrixTitle: string;
	matrixTitleIcon?: IconDetail;
	legendTitle: string;
	legendTitleIcon?: IconDetail;
    mitigationStrategyLabel: string; // "Estrategia de Mitigación:"
}

// Timeline
export interface TimelineTask {
	text: string;
	icon?: IconDetail; // Bullet point, or specific icon
}
export interface TimelineMilestone {
	text: string;
	icon?: IconDetail; // Bullet point, or specific icon
}
export interface TimelinePhase {
	id: string | number; // Unique ID for the phase (e.g., 1, "Fase 1")
	name: string;
	duration: string;
	status: string; // "Pendiente", "En Progreso", "Completado"
	statusBadgeClass?: string; // e.g. 'badge-primary badge-outline'
	tasksTitle: string;
	tasksIcon?: IconDetail; // Icon for the tasks section header
	tasks: TimelineTask[];
	milestonesTitle: string;
	milestonesIcon?: IconDetail; // Icon for the milestones section header
	milestones: TimelineMilestone[];
}
export interface TimelineSummaryCard {
	label: string;
	value: string;
	subLabel?: string;
}
export interface TimelineContent {
	type: 'timeline'; // Discriminant
	phases: TimelinePhase[];
	summaryTitle: string;
	summaryTitleIcon?: IconDetail;
	summaryCards: TimelineSummaryCard[];
}

// Conclusions
export interface ConclusionStrength {
	title: string;
	description: string;
	icon?: IconDetail;
}
export interface ConclusionConsideration {
	title: string;
	description: string;
	icon?: IconDetail;
}
export interface NextStepItem {
	id: string | number;
	title: string;
	description: string;
	priority: string; // "Alta", "Media", "Baja"
	priorityBadgeClass?: string; // e.g., 'badge bg-teal-100 text-teal-800'
}
export interface FinalRecommendationSection { // Renamed from FinalRecommendation to be more specific
    title: string;
    icon?: IconDetail;
    text: string;
    actionButton?: {
        text: string;
        icon?: IconDetail;
        className?: string;
    };
}
export interface ConclusionsContent {
	type: 'conclusions'; // Discriminant
	generalConclusionTitle: string;
	mainConclusionParagraphs: string[]; // Array for multiple paragraphs
	overallRecommendationText: string; // "Proyecto Recomendado para Implementación"
    overallRecommendationIcon?: IconDetail; // e.g. CheckCircle
    overallRecommendationBoxClass?: string; // Styling for the box
	strengthsTitle: string;
	strengthsTitleIcon?: IconDetail;
	strengths: ConclusionStrength[];
	considerationsTitle: string;
	considerationsTitleIcon?: IconDetail;
	considerations: ConclusionConsideration[];
	nextStepsTitle: string;
	nextStepsTitleIcon?: IconDetail;
	nextStepsTimelineIndicatorClass?: string; // Class for the numbered circle (e.g., bg-teal-500 text-white)
	nextSteps: NextStepItem[];
    finalRecommendationSection?: FinalRecommendationSection;
}

// --- Main ProjectSection Type ---
// Union type to allow 'content' to be any of the specific section content types
export type SectionContent =
	| ExecutiveSummaryContent
	| ObjectivesContent
	| ScopeContent
	| TechnicalFeasibilityContent
	| EconomicFeasibilityContent
	| OperativeFeasibilityContent
	| RisksContent
	| TimelineContent
	| ConclusionsContent;

// Defines the structure for each section that will be rendered on the page
export interface ProjectSection {
	id: string; // Unique ID for the section (e.g., "resumen")
	title: string; // Display title for the section header (e.g., "Resumen Ejecutivo")
	icon: ComponentType; // Main icon for the section header in Section.svelte
	iconBgColor?: string; // Background color for the section header icon
	iconColor?: string; // Color for the section header icon
	defaultExpanded?: boolean; // Whether the section should be expanded by default
	content: SectionContent; // The specific content data for this section type
}

// The top-level configuration for the entire project presentation
export interface ProjectConfig {
    siteHtmlTitle: string; // Title for the browser tab (HTML <title> tag)
    header: HeaderContent;
    footer: FooterContent;
    pageIntro: {
        title: string; // "Sistema Inteligente de Transporte Público" (for H2 on page)
        subtitle: string; // "Análisis de Factibilidad..." (for H2's p)
        badges: PageBadge[];
    };
    sections: ProjectSection[];
}
