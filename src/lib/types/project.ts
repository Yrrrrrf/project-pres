// src/lib/types/project.ts
import type { ComponentType } from 'svelte';

// Project section interface
export interface ProjectSection {
    id: string;
    title: string;
    icon: ComponentType;
    iconBgColor?: string;
    iconColor?: string;
    defaultExpanded?: boolean;
    content: SectionContent;
}

// Union type for different section content types
export type SectionContent = 
    | ExecutiveSummaryContent
    | ObjectivesContent
    | ScopeContent
    | TechnicalFeasibilityContent
    | EconomicFeasibilityContent
    | OperativeFeasibilityContent   // Added this type
    | RisksContent
    | TimelineContent
    | ImpactContent
    | ConclusionsContent;

// Executive Summary Section
export interface KeyPoint {
    title: string;
    description: string;
    icon: ComponentType;
}

export interface ExecutiveSummaryContent {
    type: 'executive-summary';
    summary: string;
    quote?: string;
    keyPoints: KeyPoint[];
}

// Objectives Section
export interface Objective {
    id: string;
    name: string;
    progress: number;
    icon: ComponentType;
}

export interface SuccessCriterion {
    title: string;
    description: string;
}

export interface ObjectivesContent {
    type: 'objectives';
    description: string;
    objectives: Objective[];
    successCriteria: SuccessCriterion[];
}

// Scope Section
export interface Component {
    title: string;
    description: string;
    icon: ComponentType;
}

export interface Deliverable {
    phase: string;
    items: string[];
}

export interface ScopeContent {
    type: 'scope';
    components: Component[];
    deliverables: Deliverable[];
}

// Technical Feasibility Section
export interface Technology {
    name: string;
    category: string;
    icon: ComponentType;
    level: 'Alto' | 'Medio' | 'Bajo';
    description: string;
}

export interface TechnicalFeasibilityContent {
    type: 'technical-feasibility';
    technologies: Technology[];
}

// Economic Feasibility Section
export interface CostItem {
    name: string;
    amount: number;
    percentage: number;
}

export interface BenefitItem {
    name: string;
    amount: number;
    percentage: number;
}

export interface ROIData {
    years: number[];
    values: number[];
}

export interface EconomicTab {
    id: string;
    title: string;
    icon: ComponentType;
    costs?: CostItem[];
    benefits?: BenefitItem[];
    roi?: ROIData;
}

export interface FundingSources {
    public: string[];
    private: string[];
}

export interface EconomicFeasibilityContent {
    type: 'economic-feasibility';
    tabs: EconomicTab[];
    funding: FundingSources;
}

// Operative Feasibility Section
export interface OrganizationalChange {
    title: string;
    description: string;
    icon: ComponentType;
}

export interface AdoptionStrategy {
    title: string;
    description: string;
    icon: ComponentType;
}

export interface ResistanceSource {
    description: string;
}

export interface MitigationStrategy {
    description: string;
}

export interface StakeholderImpact {
    group: string;
    impact: string;
    resistanceLevel: 'Alto' | 'Medio' | 'Bajo';
    strategy: string;
}

export interface OperativeFeasibilityContent {
    type: 'operative-feasibility';
    organizationalChanges: OrganizationalChange[];
    adoptionStrategies: AdoptionStrategy[];
    resistanceSources: ResistanceSource[];
    mitigationStrategies: MitigationStrategy[];
    stakeholderImpacts: StakeholderImpact[];
}

// Risks Section
export interface RiskItem {
    name: string;
    impact: 'Alto' | 'Medio' | 'Bajo';
    probability: 'Alto' | 'Medio' | 'Bajo';
    category: string;
    mitigation: string;
}

export interface RisksContent {
    type: 'risks';
    risks: RiskItem[];
}

// Timeline Section
export interface TimelinePhase {
    id: number;
    name: string;
    duration: string;
    tasks: string[];
    milestones: string[];
    status: string;
}

export interface TimelineSummary {
    totalDuration: string;
    longestPhase: string;
    estimatedStart: string;
    estimatedLaunch: string;
}

export interface TimelineContent {
    type: 'timeline';
    phases: TimelinePhase[];
    summary: TimelineSummary;
}

// Impact Section
export interface ImpactMetric {
    value: string;
    unit: string;
    description: string;
}

export interface ImpactBenefit {
    title: string;
    description: string;
    icon: ComponentType;
}

export interface ImpactDetails {
    timeReduction?: ImpactMetric;
    congestionReduction?: ImpactMetric;
    emissionsReduction?: ImpactMetric;
    trafficReduction?: ImpactMetric;
    keyBenefits?: ImpactBenefit[];
}

export interface ImpactTab {
    id: string;
    title: string;
    icon: ComponentType;
    details: ImpactDetails;
}

export interface ImpactContent {
    type: 'impact';
    tabs: ImpactTab[];
}

// Conclusions Section
export interface ProjectStrength {
    title: string;
    description: string;
}

export interface ProjectConsideration {
    title: string;
    description: string;
}

export interface ConclusionsContent {
    type: 'conclusions';
    mainConclusion: string;
    recommendation: string;
    strengths: ProjectStrength[];
    considerations: ProjectConsideration[];
}