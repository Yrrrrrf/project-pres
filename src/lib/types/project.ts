// src/lib/types/project.ts
import type { ComponentType } from 'svelte';

// --- Global Types ---
export interface IconDetail {
	component: ComponentType;
	className?: string; // e.g., 'h-5 w-5 text-emerald-600'
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
		documentContext: string;
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
	copyrightInstitution: string;
	copyrightText: string; // "Todos los derechos reservados."
}

export interface PageBadge {
	text: string;
	bgColorClass: string;
	hoverBgColorClass: string;
	textColorClass?: string; // Default to white if not specified
	icon?: IconDetail;
}

// --- Section Specific Types ---

// Executive Summary
export interface KeyPoint {
	title: string;
	description: string;
	icon: IconDetail;
}
export interface ExecutiveSummaryContent {
	type: 'executive-summary';
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
	type: 'objectives';
	description: string;
	objectives: ObjectiveItem[]; // Data for ProgressDisplay
	successCriteriaBoxTitle: string;
	successCriteriaBoxIcon?: IconDetail;
	successCriteria: SuccessCriterion[];
}

// Scope
export interface ScopeComponent {
	title:string;
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
	type: 'scope';
	componentsTitle: string;
	components: ScopeComponent[];
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
	icon?: IconDetail; // e.g., a bullet point
}
export interface TechnicalFeasibilityContent {
	type: 'technical-feasibility';
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
	// Add other fields if ProgressDisplay is used for these items
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
	tabIcon: IconDetail;
	contentTitle?: string; // "Costos Estimados del Proyecto"
	items?: CostBenefitItem[]; // For costs and benefits
	totalLabel?: string; // "Costo Total Estimado:"
	totalAmount?: number; // Calculated or specified
	roiChartData?: ROIDataPoint[];
    roiSummaryItems?: ROISummaryItem[];
	note?: string; // For the IMCO data note in benefits
}
export interface FundingSourceItem {
	text: string;
	icon?: IconDetail;
}
export interface FundingSources {
	title: string;
	titleIcon?: IconDetail;
	publicTitle: string;
	publicSources: FundingSourceItem[];
	privateTitle: string;
	privateSources: FundingSourceItem[];
}
export interface EconomicFeasibilityContent {
	type: 'economic-feasibility';
	tabs: EconomicTab[];
	funding: FundingSources;
}

// Operative Feasibility
export interface OperativeListItem {
	title: string;
	description: string;
	icon: IconDetail;
}
export interface OperativePoint { // For simple bulleted lists
    text: string;
    icon?: IconDetail; // For bullet style
}
export interface StakeholderImpactRow {
	group: string;
	impact: string;
	resistanceLevel: 'Alto' | 'Medio' | 'Bajo';
	resistanceBadgeClass?: string; // Optional: if colors are data-driven beyond the level
	strategy: string;
}
export interface OperativeFeasibilityContent {
	type: 'operative-feasibility';
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
	stakeholderImpactTableHeaders: string[];
	stakeholderImpactRows: StakeholderImpactRow[];
}

// Risks
export interface RiskItemData {
	name: string;
	impact: 'Alto' | 'Medio' | 'Bajo';
	probability: 'Alto' | 'Medio' | 'Bajo';
	category: string;
	mitigation: string;
    // Color classes will be derived by getRiskColor utility
}
export interface RisksContent {
	type: 'risks';
    // Tab structure (if categories are tabs)
    riskCategories?: {
        id: string;
        title: string;
        icon?: IconDetail;
        risks: RiskItemData[];
    }[];
    // Or a flat list if no tabs for categories
    allRisks?: RiskItemData[];
	matrixTitle: string;
	matrixTitleIcon?: IconDetail;
    // Labels for matrix (already in RiskMatrix.svelte, but could be data-driven if needed)
    // impactAxisLabel: string;
    // probabilityAxisLabel: string;
    // cellActionLabels: { /* ... */ };
	legendTitle: string;
	legendIcon?: IconDetail;
    // Risk items for legend are derived from the main risk list
}

// Timeline
export interface TimelineTask {
	text: string;
	icon?: IconDetail; // Bullet point
}
export interface TimelineMilestone {
	text: string;
	icon?: IconDetail; // Bullet point
}
export interface TimelinePhase {
	id: string | number; // Can be numeric or string like "1"
	name: string;
	duration: string;
	status: string; // "Pendiente", "En Progreso", "Completado"
	statusBadgeClass?: string; // e.g. 'badge-primary badge-outline'
	tasksTitle: string;
	tasksIcon?: IconDetail;
	tasks: TimelineTask[];
	milestonesTitle: string;
	milestonesIcon?: IconDetail;
	milestones: TimelineMilestone[];
}
export interface TimelineSummaryCard {
	label: string;
	value: string;
	subLabel?: string;
}
export interface TimelineContent {
	type: 'timeline';
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
export interface FinalRecommendation {
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
	type: 'conclusions';
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
	nextStepsTimelineIndicatorIcon?: IconDetail; // The numbered circle
	nextSteps: NextStepItem[];
    finalRecommendationSection?: FinalRecommendation;
}

// --- Main ProjectSection Type ---
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

export interface ProjectSection {
	id: string;
	title: string; // For the section header
	icon: ComponentType; // Main icon for the section header in Section.svelte
	iconBgColor?: string;
	iconColor?: string;
	defaultExpanded?: boolean;
	content: SectionContent;
}

// For projectData store itself
export interface ProjectConfig {
    siteHtmlTitle: string;
    header: HeaderContent;
    footer: FooterContent;
    pageIntro: {
        title: string; // "Sistema Inteligente de Transporte Público" (for H2 on page)
        subtitle: string; // "Análisis de Factibilidad..." (for H2's p)
        badges: PageBadge[];
    };
    sections: ProjectSection[];
}