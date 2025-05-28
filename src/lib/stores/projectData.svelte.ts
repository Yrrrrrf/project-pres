// src/lib/stores/projectData.svelte.ts
import type { ProjectConfig, ProjectSection, IconDetail /* import other specific types if needed */ } from '$lib/types';
import {
	// Main Section Icons (already imported, ensure they match usage)
	FileText, Target, Compass, Wrench, DollarSign, Users, AlertTriangle as AlertTriangleMain, Calendar as CalendarMain, CheckCircle as CheckCircleMain,
	// Specific Content Icons (add all used within sections)
	Clock, Lightbulb, Truck, ShieldCheck, Award, MapPin, Smartphone, Server, Database, Globe, CreditCard, Cpu, Cloud, TrendingUp, BarChart3, Layers,
	University, BookOpen, Building, UserCheck, Tag, Edit3, GitBranch, ThumbsUp, ThumbsDown,
	ListChecks, Flag, CheckSquare, Aperture, Briefcase, // Examples, replace with actuals
    // For technical feasibility details
    LocateFixed, Zap, BarChartHorizontal, Users2 as UsersRound,
    // For economic feasibility
    Wallet, ArrowRightToLine, HandCoins, TrendingUpIcon, BarChartBig, PiggyBank,
    // For operative feasibility
    UsersIcon, CreditCardIcon, WrenchIcon, LayersIcon, AwardIcon, LightbulbIcon, SmartphoneIcon, AlertTriangleIcon, ShieldCheckIcon, InfoIcon, GitBranchIcon, ThumbsUpIcon, ThumbsDownIcon, XSquare, CheckCircle2,
    // For risks
    AlertCircle, ShieldAlert, Eye, XCircle, ShieldX, CheckCircle,
    // For timeline
    ClipboardList, TargetIcon, Milestone, GanttChartSquare, ClockIcon, CalendarClock, CalendarDays, Rocket,
    // For conclusions
    CircleCheckBig, AlertTriangle, ArrowRight, Sparkles
} from 'lucide-svelte';

import type { ComponentType } from 'svelte';

// Helper to create IconDetail for brevity
const createIcon = (component: ComponentType, className: string = 'h-5 w-5'): IconDetail => ({ component, className });

class ProjectDataStore {
	config: ProjectConfig = $state({
		siteHtmlTitle: "Proyecto: Sistema Inteligente de Transporte Público",
		header: {
			projectTitle: "Sistema Inteligente de Transporte Público",
			projectSubtitle: "Análisis de Factibilidad y Propuesta de Implementación",
			courseName: "Ingeniería de Software I",
			institution: "Universidad Autónoma del Estado de México",
			institutionIcon: createIcon(University, 'h-8 w-8'),
		},
		footer: {
			courseInfo: {
				title: "Ingeniería de Software I",
				icon: createIcon(BookOpen, 'h-5 w-5'),
				institution: "Universidad Autónoma del Estado de México",
				faculty: "Facultad de Ingeniería",
				documentContext: `Este documento forma parte del análisis de factibilidad para el proyecto "Sistema Inteligente de Transporte Público" desarrollado como parte del curso de Ingeniería de Software I.`,
                documentContextIcon: createIcon(Edit3, 'h-4 w-4 mt-1 flex-shrink-0')
			},
			courseDetails: {
				title: "Información del Curso",
				items: [
					{ label: "Semestre:", value: "2025A", icon: createIcon(CalendarMain, 'h-4 w-4 text-emerald-400') },
					{ label: "Profesor:", value: "Jose Antonio Alvarez Lobato", icon: createIcon(UserCheck, 'h-4 w-4 text-emerald-400') },
					{ label: "Clave de la materia:", value: "LINC45", icon: createIcon(Tag, 'h-4 w-4 text-emerald-400') },
				],
			},
			copyrightInstitution: "Universidad Autónoma del Estado de México",
            copyrightText: "Todos los derechos reservados."
		},
        pageIntro: {
            title: "Sistema Inteligente de Transporte Público",
            subtitle: "Análisis de Factibilidad y Propuesta de Implementación",
            badges: [
                { text: "Ingeniería de Software", bgColorClass: "bg-emerald-600", hoverBgColorClass: "hover:bg-emerald-700", textColorClass: "text-white" },
                { text: "Movilidad Urbana", bgColorClass: "bg-cyan-600", hoverBgColorClass: "hover:bg-cyan-700", textColorClass: "text-white" },
                { text: "Desarrollo Sostenible", bgColorClass: "bg-violet-600", hoverBgColorClass: "hover:bg-violet-700", textColorClass: "text-white" },
            ]
        },
		sections: [
			{
				id: "resumen",
				title: "Resumen Ejecutivo",
				icon: FileText,
				iconBgColor: "bg-emerald-100", iconColor: "text-emerald-600", defaultExpanded: true,
				content: {
					type: "executive-summary",
					mainParagraph: `Este proyecto propone el desarrollo de un sistema integral para la modernización del transporte público mediante una aplicación móvil que proporcione seguimiento en tiempo real de las unidades, sistema de pagos digitales, y registro de usuarios. La iniciativa busca optimizar la eficiencia del transporte público, mejorar la seguridad de los pasajeros, reducir los tiempos de espera y contribuir a la descongestión vial en zonas urbanas.`,
					quote: {
						text: `Según datos del IMCO, la congestión en 32 ciudades mexicanas cuesta 94 mil millones de pesos al año, con usuarios de transporte público perdiendo 118 horas anuales en comparación con las 71 horas que pierden quienes usan automóvil.`,
					},
                    closingParagraph: "Esta propuesta aborda directamente esta problemática con soluciones tecnológicas viables y escalables.",
					keyPointsTitle: "Puntos Clave",
					keyPoints: [
						{ title: "Reducción de Tiempo", description: "118 horas anuales perdidas por usuario", icon: createIcon(Clock, 'h-4 w-4 text-emerald-600') },
						{ title: "Impacto Económico", description: "94 mil millones de pesos anuales en pérdidas", icon: createIcon(DollarSign, 'h-4 w-4 text-emerald-600') },
						{ title: "Mejora en Seguridad", description: "Sistema de registro y verificación de usuarios", icon: createIcon(Users, 'h-4 w-4 text-emerald-600') }, // UsersRound or ShieldCheck might be better
						{ title: "Impacto Ambiental", description: "Reducción de emisiones por optimización", icon: createIcon(Lightbulb, 'h-4 w-4 text-emerald-600') },
					],
				},
			},
			{
				id: "objetivos",
				title: "Objetivos del Proyecto",
				icon: Target,
				iconBgColor: "bg-cyan-100", iconColor: "text-cyan-600",
				content: {
					type: "objectives",
					description: `Los siguientes objetivos han sido establecidos para guiar el desarrollo e implementación del sistema, con indicadores de progreso basados en el avance actual del proyecto:`,
					objectives: [ // Assuming ProgressDisplay is used, or adapt component
						// The image does not show progress bars for these, so I'll keep them minimal
                        // If ProgressDisplay is used, you'll need name, progress, and icon for each.
                        // For now, I'll represent them as simple text as the image doesn't have progress bars here.
                        // This means Objectives.svelte might need adjustment if it *forces* ProgressDisplay.
                        // Let's assume for template purposes, we want to define them for potential ProgressDisplay
                        { id: 'obj1', name: 'Optimizar rutas (Placeholder)', progress: 0, icon: createIcon(Truck) },
                        { id: 'obj2', name: 'Pagos digitales (Placeholder)', progress: 0, icon: createIcon(CreditCard) },
					],
					successCriteriaBoxTitle: "Criterios de Éxito",
                    successCriteriaBoxIcon: createIcon(CheckCircleMain, 'h-5 w-5 text-cyan-600'),
					successCriteria: [
						{ title: "Reducción de tiempos de espera", description: "Disminución del 40% en tiempos de espera promedio", icon: createIcon(CheckSquare, 'h-4 w-4 text-cyan-600') },
						{ title: "Adopción de usuarios", description: "50% de usuarios de transporte utilizando la aplicación", icon: createIcon(CheckSquare, 'h-4 w-4 text-cyan-600') },
						{ title: "Satisfacción de usuarios", description: "Calificación promedio de 4.5/5 en la aplicación", icon: createIcon(CheckSquare, 'h-4 w-4 text-cyan-600') },
						{ title: "Reducción de congestión", description: "Disminución del 15% en congestión vial en zonas clave", icon: createIcon(CheckSquare, 'h-4 w-4 text-cyan-600') },
					],
				},
			},
            // ... (ALCANCE) ...
            {
                id: "alcance",
                title: "Alcance del Proyecto",
                icon: Compass,
                iconBgColor: "bg-violet-100", iconColor: "text-violet-600",
                content: {
                    type: "scope",
                    componentsTitle: "Componentes del Sistema",
                    components: [
                        { title: "Aplicación Móvil", description: "Desarrollo de aplicación para usuarios finales en Android e iOS con seguimiento en tiempo real, pagos digitales y sistema de alertas.", icon: createIcon(Smartphone, 'h-6 w-6') },
                        { title: "Plataforma Web", description: "Portal de administración para operadores de transporte con monitoreo de unidades, gestión de rutas y análisis de datos.", icon: createIcon(Globe, 'h-6 w-6') },
                        { title: "Sistema de Geolocalización", description: "Infraestructura para seguimiento en tiempo real de unidades mediante GPS y transmisión de datos a la plataforma central.", icon: createIcon(MapPin, 'h-6 w-6') },
                        { title: "Sistema de Pagos", description: "Pasarela de pagos digitales y modelo de suscripción para usuarios frecuentes con múltiples métodos de pago.", icon: createIcon(CreditCard, 'h-6 w-6') }
                    ],
                    deliverablesTitle: "Entregables Principales",
                    deliverables: [
                        {
                            phaseTitle: "Fase 1: Desarrollo de Software",
                            items: [
                                { text: "Aplicación móvil funcional (iOS y Android)", icon: createIcon(CheckCircleMain, 'h-5 w-5 text-violet-500') },
                                { text: "Backend robusto con APIs documentadas", icon: createIcon(CheckCircleMain, 'h-5 w-5 text-violet-500') },
                                { text: "Portal web de administración", icon: createIcon(CheckCircleMain, 'h-5 w-5 text-violet-500') }
                            ]
                        },
                        {
                            phaseTitle: "Fase 2: Hardware e Infraestructura",
                            items: [
                                { text: "Dispositivos IoT para unidades de transporte", icon: createIcon(CheckCircleMain, 'h-5 w-5 text-violet-500') },
                                { text: "Infraestructura cloud para procesamiento de datos", icon: createIcon(CheckCircleMain, 'h-5 w-5 text-violet-500') }
                            ]
                        }
                    ]
                }
            },
            // ... (FACTIBILIDAD TÉCNICA - you'll need to map icons more carefully here) ...
            {
                id: "factibilidad-tecnica",
                title: "Análisis de Factibilidad Técnica",
                icon: Wrench,
                iconBgColor: "bg-blue-100", iconColor: "text-blue-600",
                content: {
                    type: "technical-feasibility",
                    technologiesTitle: "Tecnologías Requeridas",
                    technologiesTitleIcon: createIcon(Server, 'h-5 w-5 text-blue-600'),
                    technologies: [
                        { name: 'Svelte-Kit', category: 'Frontend', description: 'Framework para desarrollo de aplicaciones web', level: 'Alto', icon: createIcon(FileText, 'h-4 w-4 text-blue-600') },
                        { name: 'Tailwind CSS', category: 'Frontend', description: 'Framework CSS para diseño responsivo', level: 'Alto', icon: createIcon(FileText, 'h-4 w-4 text-blue-600') }, // Consider a more specific icon if available (e.g. Palette)
                        { name: 'deno', category: 'Desarrollo', description: 'Entorno de ejecución para JavaScript y TypeScript', level: 'Alto', icon: createIcon(FileText, 'h-4 w-4 text-blue-600') }, // Consider CodeXml or similar
                        { name: 'PostgreSQL', category: 'Base de Datos', description: 'Para datos geoespaciales y relacionales', level: 'Medio', icon: createIcon(Database, 'h-4 w-4 text-blue-600') },
                        { name: 'Google Maps API', category: 'Servicios', description: 'Para geolocalización y mapeo de rutas', level: 'Alto', icon: createIcon(Globe, 'h-4 w-4 text-blue-600') },
                        { name: 'Stripe/PayPal', category: 'Pagos', description: 'Para procesamiento de pagos digitales', level: 'Medio', icon: createIcon(CreditCard, 'h-4 w-4 text-blue-600') },
                        { name: 'GPS/IoT', category: 'Hardware', description: 'Dispositivos para rastreo de unidades', level: 'Alto', icon: createIcon(Cpu, 'h-4 w-4 text-blue-600') },
                        { name: 'AWS/Google Cloud', category: 'Infraestructura', description: 'Para alojamiento y escalabilidad', level: 'Alto', icon: createIcon(Cloud, 'h-4 w-4 text-blue-600') }
                    ],
                    viabilityTitle: "Viabilidad Técnica",
                    viabilityTitleIcon: createIcon(CheckCircleMain, 'h-5 w-5 text-blue-600'),
                    viabilityIntro: "El proyecto es técnicamente viable utilizando tecnologías maduras y ampliamente probadas. Las principales consideraciones técnicas incluyen:",
                    viabilityPoints: [
                        { title: "Precisión de geolocalización", description: "En áreas urbanas densas con edificios altos", icon: createIcon(LocateFixed, 'h-4 w-4 text-blue-600') },
                        { title: "Sincronización en tiempo real", description: "Entre múltiples dispositivos y servidores", icon: createIcon(Zap, 'h-4 w-4 text-blue-600') },
                        { title: "Manejo de picos de tráfico", description: "Durante horas de mayor demanda", icon: createIcon(BarChartHorizontal, 'h-4 w-4 text-blue-600') }
                    ],
                    resourcesTitle: "Disponibilidad de Recursos",
                    resourcesTitleIcon: createIcon(UsersRound, 'h-5 w-5 text-blue-600'),
                    resourcesIntro: "Se requiere un equipo multidisciplinario con experiencia en diversas áreas técnicas:",
                    resourcePoints: [
                        { text: "Desarrollo móvil (Svelte-Kit + Tauri2)", icon: createIcon(Aperture, 'w-2 h-2 rounded-full bg-blue-500')}, // Using Aperture as a generic bullet
                        { text: "Desarrollo backend (Rust: Axum)", icon: createIcon(Aperture, 'w-2 h-2 rounded-full bg-blue-500')},
                        { text: "Bases de datos (PostgreSQL)", icon: createIcon(Aperture, 'w-2 h-2 rounded-full bg-blue-500')},
                        { text: "Geolocalización y mapas (Google Maps API)", icon: createIcon(Aperture, 'w-2 h-2 rounded-full bg-blue-500')}
                    ],
                    resourcesNote: "Nota: La Universidad cuenta con talento en estas áreas a través de estudiantes avanzados y personal docente de la Licenciatura de Ingeniería en Computación, quienes pueden aportar al desarrollo bajo supervisión adecuada."
                }
            },
			// ... (Continue for Economic, Operative, Risks, Timeline, Conclusions)
            // Example structure for Conclusions:
            {
                id: "conclusiones",
                title: "Conclusiones y Recomendaciones",
                icon: CheckCircleMain,
                iconBgColor: "bg-teal-100", iconColor: "text-teal-600",
                content: {
                    type: "conclusions",
                    generalConclusionTitle: "Conclusión General",
                    mainConclusionParagraphs: [
                        `El análisis de factibilidad demuestra que el proyecto de Sistema Inteligente de Transporte Público es viable técnica, económica y operativamente. Los beneficios esperados superan significativamente los costos y riesgos identificados, con un impacto potencial positivo en múltiples dimensiones sociales, económicas y ambientales.`,
                        `La implementación de esta solución permitiría abordar directamente los problemas de ineficiencia en el transporte público documentados por el IMCO, donde actualmente se pierden 118 horas anuales por usuario y 94 mil millones de pesos a nivel nacional debido a la congestión.`
                    ],
                    overallRecommendationText: "Proyecto Recomendado para Implementación",
                    overallRecommendationIcon: createIcon(CheckCircle, 'h-5 w-5'),
                    overallRecommendationBoxClass: 'inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full', // From the image
                    strengthsTitle: "Fortalezas del Proyecto",
                    strengthsTitleIcon: createIcon(ThumbsUp, 'h-5 w-5 text-teal-600'),
                    strengths: [
                        { title: "Alto impacto social y económico", description: "Beneficios cuantificables para usuarios y operadores", icon: createIcon(CheckCircleMain, 'h-5 w-5 text-teal-600') },
                        { title: "Tecnologías maduras y probadas", description: "Uso de soluciones tecnológicas con amplia trayectoria", icon: createIcon(CheckCircleMain, 'h-5 w-5 text-teal-600') }
                    ],
                    considerationsTitle: "Consideraciones Clave",
                    considerationsTitleIcon: createIcon(AlertTriangleMain, 'h-5 w-5 text-amber-600'),
                    considerations: [
                        { title: "Gestión del cambio", description: "Estrategia robusta para superar resistencia inicial", icon: createIcon(AlertTriangleMain, 'h-5 w-5 text-amber-600') },
                        { title: "Inclusión digital", description: "Alternativas para usuarios sin acceso a tecnología", icon: createIcon(AlertTriangleMain, 'h-5 w-5 text-amber-600') }
                    ],
                    nextStepsTitle: "Próximos Pasos Recomendados",
                    nextStepsTitleIcon: createIcon(ArrowRight, 'h-5 w-5 text-teal-600'),
                    nextSteps: [
                        { id: 1, title: "Establecer Comité Directivo", description: "Formar un comité con representantes de todas las partes interesadas: gobierno, operadores de transporte, usuarios, expertos técnicos y académicos.", priority: "Alta", priorityBadgeClass: 'badge bg-teal-100 text-teal-800' },
                        { id: 2, title: "Asegurar Financiamiento Inicial", description: "Gestionar los recursos necesarios para la fase inicial de desarrollo, explorando las diversas fuentes de financiamiento identificadas.", priority: "Alta", priorityBadgeClass: 'badge bg-teal-100 text-teal-800' },
                        { id: 3, title: "Estudio Detallado de Rutas Prioritarias", description: "Realizar un análisis detallado de las rutas con mayor demanda y problemática para implementación piloto, recopilando datos de flujo de pasajeros.", priority: "Media", priorityBadgeClass: 'badge bg-teal-100 text-teal-800' }
                    ],
                    finalRecommendationSection: {
                        title: "Recomendación Final",
                        icon: createIcon(Sparkles, 'h-5 w-5 text-teal-600'), // Example, image uses a custom chain-link like SVG
                        text: `Se recomienda proceder con el desarrollo del proyecto siguiendo un enfoque gradual que permita validar hipótesis, ajustar el sistema según feedback de usuarios reales, y escalar la solución de manera sostenible. Es crucial involucrar a todos los actores relevantes desde las etapas iniciales para garantizar la adopción y minimizar la resistencia al cambio.`,
                        actionButton: {
                            text: "Aprobar Proyecto",
                            icon: createIcon(CheckCircle, 'mr-2 h-4 w-4'),
                            className: 'bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'
                        }
                    }
                }
            }
		],
	});

    // Keep helper methods in utils/formatting.ts as recommended previously for better separation.
    // If you prefer them here, they can stay, but utils is cleaner.
}

export const projectData = new ProjectDataStore();
