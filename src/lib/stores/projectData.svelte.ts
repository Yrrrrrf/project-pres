// src/lib/stores/projectData.svelte.ts
import type { ProjectConfig, IconDetail /* import other specific types if needed */ } from '$lib/types';
import {
	// Main Section Icons (already imported, ensure they match usage)
	FileText, Target, Compass, Wrench, DollarSign, Users as UsersIcon, AlertTriangle as AlertTriangleMain, Calendar as CalendarMain, CheckCircle as CheckCircleMain,
	// General Utility Icons
	Clock, Lightbulb, Truck, ShieldCheck, Award, MapPin, Smartphone, Server, Database, Globe, CreditCard, Cpu, Cloud, TrendingUp, BarChart3 as BarChartIcon, Layers,
	// Header/Footer specific Icons
	University, BookOpen, User, File, Tag, Edit3,
	// Section content specific Icons (ensure all used in data are imported)
	GitBranch, ThumbsUp, ThumbsDown, ArrowRight, CheckSquare, LocateFixed, Zap, BarChartHorizontal, Users2 as UsersRound, Wallet, ArrowRightToLine, HandCoins, TrendingUpIcon, BarChartBig, PiggyBank,
    AlertCircle, ShieldAlert, Eye, XCircle, ShieldX, CheckCircle,
    ClipboardList, TargetIcon, Milestone, GanttChartSquare, CalendarClock, CalendarDays, Rocket,
    Sparkles, XSquare, CheckCircle2, InfoIcon,
	Flag,
    MilestoneIcon
} from 'lucide-svelte';

import type { ComponentType } from 'svelte';
import { formatCurrency } from '$lib/utils/formatting'; // Import utility for formatting

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
				icon: createIcon(BookOpen, 'h-5 w-5'), // Changed to BookOpen as it makes more sense for a course, matching default in Footer.svelte
				institution: "Universidad Autónoma del Estado de México",
				faculty: "Facultad de Ingeniería",
				documentContext: `Este documento forma parte del análisis de factibilidad para el proyecto
                "Sistema Inteligente de Transporte Público" desarrollado como parte
                del curso de Ingeniería de Software I.`,
                documentContextIcon: createIcon(Edit3, 'h-4 w-4 mt-1 flex-shrink-0')
			},
			courseDetails: {
				title: "Información del Curso",
				items: [
					{ label: "Semestre:", value: "2025A", icon: createIcon(CalendarMain, 'h-4 w-4 text-emerald-400') },
					{ label: "Profesor:", value: "Jose Antonio Alvarez Lobato", icon: createIcon(User, 'h-4 w-4 text-emerald-400') },
					{ label: "Clave de la materia:", value: "LINC45", icon: createIcon(Tag, 'h-4 w-4 text-emerald-400') }, // Used Tag as per prompt's Footer.svelte
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
						{ title: "Mejora en Seguridad", description: "Sistema de registro y verificación de usuarios", icon: createIcon(UsersIcon, 'h-4 w-4 text-emerald-600') },
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
					objectives: [
                        { id: 'obj1', name: 'Optimizar rutas de transporte', progress: 75, icon: createIcon(Truck, 'h-4 w-4') },
                        { id: 'obj2', name: 'Implementar pagos digitales', progress: 50, icon: createIcon(CreditCard, 'h-4 w-4') },
                        { id: 'obj3', name: 'Mejorar seguridad de pasajeros', progress: 25, icon: createIcon(ShieldCheck, 'h-4 w-4') }
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
                        { name: 'Tailwind CSS', category: 'Frontend', description: 'Framework CSS para diseño responsivo', level: 'Alto', icon: createIcon(FileText, 'h-4 w-4 text-blue-600') },
                        { name: 'Deno', category: 'Backend', description: 'Entorno de ejecución para JavaScript y TypeScript', level: 'Alto', icon: createIcon(Server, 'h-4 w-4 text-blue-600') }, // Changed icon to Server for backend
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
                        { text: "Desarrollo móvil (Svelte-Kit + Tauri2)", icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-blue-500')},
                        { text: "Desarrollo backend (Rust: Axum)", icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-blue-500')},
                        { text: "Bases de datos (PostgreSQL)", icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-blue-500')},
                        { text: "Geolocalización y mapas (Google Maps API)", icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-blue-500')}
                    ],
                    resourcesNote: "Nota: La Universidad cuenta con talento en estas áreas a través de estudiantes avanzados y personal docente de la Licenciatura de Ingeniería en Computación, quienes pueden aportar al desarrollo bajo supervisión adecuada."
                }
            },
            {
                id: "factibilidad-economica",
                title: "Análisis de Factibilidad Económica",
                icon: DollarSign,
                iconBgColor: "bg-green-100", iconColor: "text-green-600",
                content: {
                    type: "economic-feasibility",
                    tabs: [
                        {
                            id: 'costs',
                            tabTitle: 'Costos',
                            tabIcon: createIcon(DollarSign, 'h-4 w-4 mr-1'),
                            contentTitle: 'Costos Estimados del Proyecto',
                            items: [
                                { name: 'Desarrollo de software', amount: 2500000, percentage: 35 },
                                { name: 'Hardware (GPS/IoT)', amount: 1800000, percentage: 25 },
                                { name: 'Infraestructura cloud', amount: 900000, percentage: 13 },
                                { name: 'Licencias', amount: 700000, percentage: 10 },
                                { name: 'Marketing y capacitación', amount: 600000, percentage: 8 },
                                { name: 'Soporte y mantenimiento', amount: 650000, percentage: 9 }
                            ],
                            totalLabel: 'Costo Total Estimado:'
                        },
                        {
                            id: 'benefits',
                            tabTitle: 'Beneficios',
                            tabIcon: createIcon(TrendingUp, 'h-4 w-4 mr-1'),
                            contentTitle: 'Beneficios Económicos Esperados',
                            items: [
                                { name: 'Reducción de costos operativos', amount: 1200000, percentage: 20 },
                                { name: 'Aumento de ingresos', amount: 1800000, percentage: 30 },
                                { name: 'Ingresos por suscripciones', amount: 1500000, percentage: 25 },
                                { name: 'Reducción de pérdidas', amount: 900000, percentage: 15 },
                                { name: 'Valor social', amount: 600000, percentage: 10 }
                            ],
                            totalLabel: 'Beneficio Anual Estimado:',
                            note: `Nota: Basado en datos del IMCO, que estima que la congestión en ciudades mexicanas
                            cuesta 94 mil millones de pesos anuales, una reducción del 10% en tiempos de espera y congestión
                            podría representar un ahorro de aproximadamente 9.4 mil millones de pesos a nivel nacional.`
                        },
                        {
                            id: 'roi',
                            tabTitle: 'ROI',
                            tabIcon: createIcon(BarChartIcon, 'h-4 w-4 mr-1'),
                            contentTitle: 'Retorno de Inversión Proyectado',
                            roiChartData: [
                                { yearLabel: 'Año 1', value: -4000000, formattedValue: formatCurrency(-4000000) },
                                { yearLabel: 'Año 2', value: -1500000, formattedValue: formatCurrency(-1500000) },
                                { yearLabel: 'Año 3', value: 1000000, formattedValue: formatCurrency(1000000) },
                                { yearLabel: 'Año 4', value: 3500000, formattedValue: formatCurrency(3500000) },
                                { yearLabel: 'Año 5', value: 6000000, formattedValue: formatCurrency(6000000) }
                            ],
                            roiSummaryItems: [
                                { label: 'Inversión Inicial:', value: formatCurrency(4000000), valueColorClass: 'text-red-600' },
                                { label: 'Punto de Equilibrio:', value: 'Año 3' },
                                { label: 'ROI a 5 años:', value: '150%', valueColorClass: 'text-green-600' }
                            ]
                        }
                    ],
                    funding: {
                        title: 'Fuentes de Financiamiento',
                        titleIcon: createIcon(PiggyBank, 'h-5 w-5 text-green-600'),
                        publicTitle: 'Fondos Públicos',
                        publicSources: [
                            { text: "Fondos metropolitanos para movilidad", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') },
                            { text: "Programas federales para desarrollo urbano", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') },
                            { text: "Inversión de gobiernos locales", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') }
                        ],
                        privateTitle: 'Fondos Privados',
                        privateSources: [
                            { text: "Alianzas público-privadas con operadores", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') },
                            { text: "Inversión de empresas de tecnología", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') },
                            { text: "Fondos universitarios para investigación", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') }
                        ]
                    }
                }
            },
            {
                id: "factibilidad-operativa",
                title: "Análisis de Factibilidad Operativa",
                icon: UsersIcon,
                iconBgColor: "bg-amber-100", iconColor: "text-amber-600",
                content: {
                  type: "operative-feasibility",
                  orgChangesTitle: "Cambios Organizacionales",
                  orgChangesIcon: createIcon(GitBranch, 'h-5 w-5 text-amber-600'),
                  orgChangesItems: [
                    {
                      title: "Capacitación de Personal",
                      description: "Conductores y personal administrativo requerirán capacitación en el uso de nuevas tecnologías y procedimientos operativos.",
                      icon: createIcon(UsersIcon, 'h-4 w-4 text-amber-600')
                    },
                    {
                      title: "Procedimientos de Cobro",
                      description: "Adaptación de métodos de cobro tradicionales a un sistema digital integrado con múltiples opciones de pago.",
                      icon: createIcon(CreditCard, 'h-4 w-4 text-amber-600')
                    },
                    {
                      title: "Mantenimiento Técnico",
                      description: "Nuevos protocolos para el mantenimiento de dispositivos GPS y módulos de transmisión instalados en las unidades.",
                      icon: createIcon(Wrench, 'h-4 w-4 text-amber-600')
                    }
                  ],
                  adoptionStrategiesTitle: "Estrategias de Adopción",
                  adoptionStrategiesIcon: createIcon(ThumbsUp, 'h-5 w-5 text-amber-600'),
                  adoptionStrategiesItems: [
                    {
                      title: "Implementación Gradual",
                      description: "Comenzando con rutas de mayor demanda",
                      icon: createIcon(Layers, 'h-4 w-4 text-amber-600')
                    },
                    {
                      title: "Incentivos para Usuarios",
                      description: "Descuentos y viajes gratuitos promocionales",
                      icon: createIcon(Award, 'h-4 w-4 text-amber-600')
                    },
                    {
                      title: "Campañas Educativas",
                      description: "Información sobre beneficios del sistema",
                      icon: createIcon(Lightbulb, 'h-4 w-4 text-amber-600')
                    },
                    {
                      title: "Alternativas Tecnológicas",
                      description: "Tarjetas físicas para usuarios sin smartphones",
                      icon: createIcon(Smartphone, 'h-4 w-4 text-amber-600')
                    }
                  ],
                  resistanceAnalysisTitle: "Resistencia al Cambio",
                  resistanceAnalysisIcon: createIcon(ThumbsDown, 'h-5 w-5 text-amber-600'),
                  resistanceSourcesTitle: "Fuentes de Resistencia",
                  resistanceSourcesIcon: createIcon(XSquare, 'h-4 w-4 text-amber-600'),
                  resistanceSourcePoints: [
                    { text: "Operadores de transporte reacios a implementar nuevas tecnologías", icon: createIcon(XCircle, 'w-2 h-2 rounded-full bg-amber-500 mt-2') }, // Used XCircle for specific bullet
                    { text: "Usuarios sin acceso a smartphones o datos móviles", icon: createIcon(XCircle, 'w-2 h-2 rounded-full bg-amber-500 mt-2') },
                    { text: "Preocupaciones sobre privacidad y uso de datos personales", icon: createIcon(XCircle, 'w-2 h-2 rounded-full bg-amber-500 mt-2') }
                  ],
                  mitigationStrategiesTitle: "Estrategias de Mitigación",
                  mitigationStrategiesIcon: createIcon(CheckCircle2, 'h-4 w-4 text-amber-600'),
                  mitigationStrategyPoints: [
                    { text: "Programas de capacitación inclusivos y accesibles", icon: createIcon(CheckCircle, 'w-2 h-2 rounded-full bg-green-500 mt-2') }, // Used CheckCircle for specific bullet
                    { text: "Alternativas para usuarios sin acceso a tecnología", icon: createIcon(CheckCircle, 'w-2 h-2 rounded-full bg-green-500 mt-2') },
                    { text: "Políticas claras de privacidad y protección de datos", icon: createIcon(CheckCircle, 'w-2 h-2 rounded-full bg-green-500 mt-2') }
                  ],
                  stakeholderImpactTitle: "Análisis de Impacto en Stakeholders",
                  stakeholderImpactIcon: createIcon(Lightbulb, 'h-5 w-5 text-amber-600'),
                  stakeholderImpactTableHeaders: ["Grupo", "Impacto", "Nivel de Resistencia", "Estrategia"],
                  stakeholderImpactRows: [
                    { group: "Conductores", impact: "Alto", resistanceLevel: "Alto", resistanceBadgeClass: "bg-red-100 text-red-700", strategy: "Capacitación y beneficios directos" },
                    { group: "Usuarios jóvenes", impact: "Medio", resistanceLevel: "Bajo", resistanceBadgeClass: "bg-green-100 text-green-700", strategy: "Experiencia de usuario intuitiva" },
                    { group: "Adultos mayores", impact: "Medio", resistanceLevel: "Alto", resistanceBadgeClass: "bg-red-100 text-red-700", strategy: "Alternativas no digitales y asistencia" }
                  ]
                }
              },
            {
                id: "riesgos",
                title: "Análisis de Riesgos",
                icon: AlertTriangleMain,
                iconBgColor: "bg-red-100", iconColor: "text-red-600",
                content: {
                    type: "risks",
                    riskCategories: [ // Using categories for tabs
                        {
                            id: 'tecnico',
                            title: 'Técnico',
                            icon: createIcon(Server, 'h-4 w-4 mr-2'),
                            risks: [
                                { name: 'Problemas de precisión GPS', impact: 'Alto', probability: 'Medio', category: 'Técnico', mitigation: 'Algoritmos de corrección y triangulación' },
                                { name: 'Fallos de conectividad', impact: 'Alto', probability: 'Alto', category: 'Técnico', mitigation: 'Implementación de modo offline y sincronización posterior' },
                            ]
                        },
                        {
                            id: 'mercado',
                            title: 'Mercado',
                            icon: createIcon(TrendingUp, 'h-4 w-4 mr-2'),
                            risks: [
                                { name: 'Baja adopción', impact: 'Alto', probability: 'Medio', category: 'Mercado', mitigation: 'Estrategia de incentivos y campaña de concientización' },
                                { name: 'Desinterés de operadores', impact: 'Alto', probability: 'Alto', category: 'Mercado', mitigation: 'Demostración de beneficios económicos y operativos' },
                            ]
                        },
                        {
                            id: 'implementacion',
                            title: 'Implementación',
                            icon: createIcon(Wrench, 'h-4 w-4 mr-2'),
                            risks: [
                                { name: 'Retrasos en desarrollo', impact: 'Medio', probability: 'Alto', category: 'Implementación', mitigation: 'Metodología ágil con entregas incrementales' }
                            ]
                        }
                    ],
                    // A flat list of all risks to be passed to RiskMatrix, if different from categorized
                    allRisks: [
                        { name: 'Problemas de precisión GPS', impact: 'Alto', probability: 'Medio', category: 'Técnico', mitigation: 'Algoritmos de corrección y triangulación' },
                        { name: 'Fallos de conectividad', impact: 'Alto', probability: 'Alto', category: 'Técnico', mitigation: 'Implementación de modo offline y sincronización posterior' },
                        { name: 'Baja adopción', impact: 'Alto', probability: 'Medio', category: 'Mercado', mitigation: 'Estrategia de incentivos y campaña de concientización' },
                        { name: 'Desinterés de operadores', impact: 'Alto', probability: 'Alto', category: 'Mercado', mitigation: 'Demostración de beneficios económicos y operativos' },
                        { name: 'Retrasos en desarrollo', impact: 'Medio', probability: 'Alto', category: 'Implementación', mitigation: 'Metodología ágil con entregas incrementales' }
                    ],
                    matrixTitle: "Matriz de Riesgos",
                    matrixTitleIcon: createIcon(AlertTriangleMain, 'h-5 w-5 text-red-600'),
                    legendTitle: "Leyenda de Riesgos",
                    legendTitleIcon: createIcon(InfoIcon, 'h-5 w-5 text-slate-700'),
                    mitigationStrategyLabel: "Estrategia de Mitigación:"
                }
            },
                      {
                id: "cronograma",
                title: "Cronograma Propuesto",
                icon: CalendarMain, // Main section icon
                iconBgColor: "bg-indigo-100",
                iconColor: "text-indigo-600",
                content: {
                    type: "timeline",
                    phases: [
                        {
                            id: 1,
                            name: 'Planificación y Diseño',
                            duration: '3 meses',
                            status: 'Pendiente',
                            statusBadgeClass: 'badge badge-primary badge-outline', // DaisyUI classes
                            tasksTitle: 'Tareas Principales', // Data-driven title
                            tasksIcon: createIcon(ClipboardList, 'h-4 w-4 text-indigo-600'), // Data-driven icon
                            tasks: [
                                { text: 'Análisis detallado de requerimientos y casos de uso', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Diseño de arquitectura del sistema y modelo de datos', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Prototipado de interfaces de usuario', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Selección de tecnologías y proveedores', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ],
                            milestonesTitle: 'Hitos', // Data-driven title
                            milestonesIcon: createIcon(Flag, 'h-4 w-4 text-indigo-600'), // Data-driven icon
                            milestones: [
                                { text: 'Documento de requerimientos aprobado', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Arquitectura definida', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Prototipos validados', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ]
                        },
                        {
                            id: 2,
                            name: 'Desarrollo',
                            duration: '6 meses',
                            status: 'En Progreso',
                            statusBadgeClass: 'badge badge-success badge-outline',
                            tasksTitle: 'Tareas Clave de Desarrollo',
                            tasksIcon: createIcon(ClipboardList, 'h-4 w-4 text-indigo-600'),
                            tasks: [
                                { text: 'Desarrollo de backend y APIs', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Implementación de geolocalización', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Desarrollo de apps móviles', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ],
                            milestonesTitle: 'Logros de Desarrollo',
                            milestonesIcon: createIcon(Flag, 'h-4 w-4 text-indigo-600'),
                            milestones: [
                                { text: 'Backend funcional', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'App móvil v1.0', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ]
                        },
                        // ... (Add data for other phases: Piloto, Despliegue, similarly)
                        // Example for "Piloto" phase
                        {
                            id: 3,
                            name: 'Fase Piloto',
                            duration: '3 meses',
                            status: 'Pendiente',
                            statusBadgeClass: 'badge badge-primary badge-outline',
                            tasksTitle: 'Actividades del Piloto',
                            tasksIcon: createIcon(ClipboardList, 'h-4 w-4 text-indigo-600'),
                            tasks: [
                                { text: 'Implementación en rutas seleccionadas', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Capacitación de personal operativo', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ],
                            milestonesTitle: 'Resultados del Piloto',
                            milestonesIcon: createIcon(Flag, 'h-4 w-4 text-indigo-600'),
                            milestones: [
                                { text: 'Lanzamiento piloto exitoso', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Feedback de usuarios recopilado', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ]
                        },
                        // Example for "Despliegue" phase
                        {
                            id: 4,
                            name: 'Despliegue Completo',
                            duration: '4 meses',
                            status: 'Pendiente',
                            statusBadgeClass: 'badge badge-primary badge-outline',
                            tasksTitle: 'Tareas de Despliegue',
                            tasksIcon: createIcon(ClipboardList, 'h-4 w-4 text-indigo-600'),
                            tasks: [
                                { text: 'Implementación gradual en todas las rutas', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Campañas de difusión y adopción masiva', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ],
                            milestonesTitle: 'Hitos del Despliegue',
                            milestonesIcon: createIcon(Flag, 'h-4 w-4 text-indigo-600'),
                            milestones: [
                                { text: 'Despliegue completo del sistema', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Reporte de adopción y KPIs iniciales', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ]
                        },
                        // Example for "Operación" phase
                        {
                            id: 5,
                            name: 'Operación y Mantenimiento',
                            duration: 'Indefinido',
                            status: 'Pendiente',
                            statusBadgeClass: 'badge badge-primary badge-outline',
                            tasksTitle: 'Actividades de Operación',
                            tasksIcon: createIcon(ClipboardList, 'h-4 w-4 text-indigo-600'),
                            tasks: [
                                { text: 'Monitoreo continuo del sistema', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Actualizaciones y mejoras basadas en feedback', icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ],
                            milestonesTitle: 'Hitos de Operación',
                            milestonesIcon: createIcon(Flag, 'h-4 w-4 text-indigo-600'),
                            milestones: [
                                { text: 'Sistema operativo con usuarios activos', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Reporte de rendimiento anual', icon: createIcon(MilestoneIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ]
                        }
                    ],
                    summaryTitle: "Resumen de Tiempos del Proyecto", // Data-driven title
                    summaryTitleIcon: createIcon(Clock, 'h-5 w-5 text-indigo-600'), // Data-driven icon
                    summaryCards: [ // Data for summary cards
                        { label: 'Duración Total Estimada', value: '16 meses', subLabel: 'Fases 1-4 Completas' },
                        { label: 'Fase Más Extensa', value: '6 meses', subLabel: 'Desarrollo Intensivo' },
                        { label: 'Inicio Proyectado', value: 'Abril 2025', subLabel: 'Q2 2025 (Post-aprobación)' },
                        { label: 'Lanzamiento Final', value: 'Octubre 2026', subLabel: 'Q4 2026 (Operación Completa)' }
                    ]
                }
            },
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
                    overallRecommendationBoxClass: 'inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full',
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
                    nextStepsTimelineIndicatorClass: 'bg-teal-500 text-white',
                    nextSteps: [
                        { id: 1, title: "Establecer Comité Directivo", description: "Formar un comité con representantes de todas las partes interesadas: gobierno, operadores de transporte, usuarios, expertos técnicos y académicos.", priority: "Alta", priorityBadgeClass: 'badge bg-teal-100 text-teal-800' },
                        { id: 2, title: "Asegurar Financiamiento Inicial", description: "Gestionar los recursos necesarios para la fase inicial de desarrollo, explorando las diversas fuentes de financiamiento identificadas.", priority: "Alta", priorityBadgeClass: 'badge bg-teal-100 text-teal-800' },
                        { id: 3, title: "Estudio Detallado de Rutas Prioritarias", description: "Realizar un análisis detallado de las rutas con mayor demanda y problemática para implementación piloto, recopilando datos de flujo de pasajeros.", priority: "Media", priorityBadgeClass: 'badge bg-teal-100 text-teal-800' }
                    ],
                    finalRecommendationSection: {
                        title: "Recomendación Final",
                        icon: createIcon(Sparkles, 'h-5 w-5 text-teal-600'),
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
}

export const projectData = new ProjectDataStore();