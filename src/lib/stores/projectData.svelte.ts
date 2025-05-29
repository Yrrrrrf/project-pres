// src/lib/stores/projectData.svelte.ts
import type { ProjectConfig, IconDetail } from '$lib/types';
import {
	// Main Section Icons
	FileText, Target, Compass, Wrench, DollarSign, Users as UsersIcon, AlertTriangle as AlertTriangleMain, Calendar as CalendarMain, CheckCircle as CheckCircleMain,
	// General Utility Icons
	Clock, Lightbulb, Truck, ShieldCheck, Award, MapPin, Smartphone, Server, Database, Globe, CreditCard, Cpu, Cloud, TrendingUp, BarChart3 as BarChartIcon, Layers, Route, Zap, Coins, UsersRound as UsersRoundIcon, LineChart, SlidersHorizontal, BrainCircuit, Briefcase, UserCheck, MessageSquareWarning, ListChecks, Filter,
	// Header/Footer specific Icons
	University, BookOpen, User, Tag, Edit3, Building,
	// Section content specific Icons
	GitBranch, ThumbsUp, ThumbsDown, ArrowRight, CheckSquare, LocateFixed, BarChartHorizontal, Wallet, ArrowRightToLine, HandCoins, TrendingUpIcon, BarChartBig, PiggyBank,
    AlertCircle, ShieldAlert, Eye, XCircle, ShieldX,
    ClipboardList, MilestoneIcon as MilestoneIconLucide, GanttChartSquare, CalendarClock, CalendarDays, Rocket,
    Sparkles, XSquare, CheckCircle2, InfoIcon,
	Flag, Settings2,
    CalendarPlus,
    CheckCircle
} from 'lucide-svelte';

import type { ComponentType } from 'svelte';
import { formatCurrency } from '$lib/utils/formatting';

const createIcon = (component: ComponentType, className: string = 'h-5 w-5'): IconDetail => ({ component, className });

class ProjectDataStore {
	config: ProjectConfig = $state({
		siteHtmlTitle: "Plataforma Inteligente para la Optimización del Transporte Público en Toluca",
		header: {
			projectTitle: "Plataforma Inteligente para la Optimización del Transporte Público",
			projectSubtitle: "Propuesta para Líderes del Transporte en Toluca: Eficiencia, Rentabilidad y Calidad de Servicio",
			courseName: "Ingeniería de Software I (Propuesta Industrial)", // MODIFIED
			institution: "Universidad Autónoma del Estado de México",
			institutionIcon: createIcon(Building, 'h-8 w-8'),
		},
		footer: { // Footer can remain largely academic context, or shift slightly
			courseInfo: {
				title: "Propuesta Tecnológica Industrial",
				icon: createIcon(Briefcase, 'h-5 w-5'),
				institution: "Universidad Autónoma del Estado de México",
				faculty: "Facultad de Ingeniería",
				documentContext: `Esta propuesta presenta una solución tecnológica para la optimización del transporte público, dirigida a los operadores y concesionarios de Toluca, desarrollada en el marco del curso de Ingeniería de Software I.`,
                documentContextIcon: createIcon(Edit3, 'h-4 w-4 mt-1 flex-shrink-0')
			},
			courseDetails: {
				title: "Contexto del Proyecto",
				items: [
					{ label: "Curso:", value: "Ingeniería de Software I", icon: createIcon(BookOpen, 'h-4 w-4 text-emerald-400') },
					{ label: "Institución:", value: "UAEMéx - Facultad de Ingeniería", icon: createIcon(University, 'h-4 w-4 text-emerald-400') },
					{ label: "Enfoque:", value: "Solución Industrial Aplicada", icon: createIcon(Settings2, 'h-4 w-4 text-emerald-400') },
					{ label: "Profesor:", value: "Ing. Juan Pérez", icon: createIcon(User, 'h-4 w-4 text-emerald-400') },
				],
			},
			copyrightInstitution: "Universidad Autónoma del Estado de México",
            copyrightText: "Propuesta de Valor Tecnológico."
		},
        pageIntro: {
            title: "Transformando el Transporte Público de Toluca con Inteligencia de Datos",
            subtitle: "Una solución integral para optimizar rutas, reducir costos operativos y mejorar la experiencia del pasajero, diseñada para los líderes del transporte.",
            badges: [
                { text: "Optimización de Flotillas", bgColorClass: "bg-sky-600", hoverBgColorClass: "hover:bg-sky-700", textColorClass: "text-white" },
                { text: "Eficiencia Operativa", bgColorClass: "bg-blue-600", hoverBgColorClass: "hover:bg-blue-700", textColorClass: "text-white" },
                { text: "Inteligencia de Negocios", bgColorClass: "bg-indigo-600", hoverBgColorClass: "hover:bg-indigo-700", textColorClass: "text-white" },
            ]
        },
		sections: [
			{
				id: "resumen",
				title: "Propuesta de Valor para Operadores",
				icon: LineChart,
				iconBgColor: "bg-blue-100", iconColor: "text-blue-600", defaultExpanded: true,
				content: {
					type: "executive-summary",
					mainParagraph: `Esta plataforma está diseñada para empoderar a los líderes del transporte público en Toluca, ofreciendo herramientas para optimizar la operación diaria, reducir costos significativamente y elevar la calidad del servicio. Mediante el análisis inteligente de datos en tiempo real, identificamos cuellos de botella, ajustamos frecuencias y rutas para una cobertura eficiente de la demanda, y minimizamos los kilómetros recorridos en vacío, impactando directamente su rentabilidad.`,
					quote: {
						text: `En ciudades con dinámicas similares a Toluca, la optimización de rutas y la gestión inteligente de la demanda han demostrado reducciones de hasta un 15% en costos operativos y mejoras sustanciales en la puntualidad del servicio.`,
						cite: "Estudios de Movilidad Urbana y Eficiencia Operativa."
					},
                    closingParagraph: "Nuestra solución ofrece una ventaja competitiva tangible, transformando datos en decisiones estratégicas y mayor rentabilidad para su empresa.",
					keyPointsTitle: "Beneficios Clave para su Operación",
					keyPoints: [
						{ title: "Optimización de Rutas y Frecuencias", description: "Reducción de kilómetros en vacío y mejor cobertura de demanda.", icon: createIcon(Route, 'h-4 w-4 text-blue-600') },
						{ title: "Reducción de Costos Operativos", description: "Ahorro en combustible, mantenimiento y asignación de personal.", icon: createIcon(Coins, 'h-4 w-4 text-blue-600') },
						{ title: "Mejora de Calidad de Servicio", description: "Menores tiempos de espera, unidades menos saturadas, mayor puntualidad.", icon: createIcon(UserCheck, 'h-4 w-4 text-blue-600') },
						{ title: "Decisiones Basadas en Datos", description: "Inteligencia de negocios para ajustes estratégicos y planificación.", icon: createIcon(BrainCircuit, 'h-4 w-4 text-blue-600') },
					],
				},
			},
			{
				id: "objetivos",
				title: "Objetivos de la Plataforma para su Empresa",
				icon: Target,
				iconBgColor: "bg-cyan-100", iconColor: "text-cyan-600",
				content: {
					type: "objectives",
					description: `Los objetivos de esta plataforma están enfocados en generar valor tangible para los operadores de transporte en Toluca, mejorando la eficiencia y la toma de decisiones:`,
					objectives: [
                        { id: 'obj1', name: 'Identificar y Corregir Ineficiencias en Rutas Actuales', progress: 60, icon: createIcon(SlidersHorizontal, 'h-4 w-4') },
                        { id: 'obj2', name: 'Facilitar el Despacho Dinámico de Unidades según Demanda', progress: 40, icon: createIcon(Zap, 'h-4 w-4') },
                        { id: 'obj3', name: 'Proveer Analítica Avanzada para la Gestión Estratégica de Flotillas', progress: 30, icon: createIcon(BarChartIcon, 'h-4 w-4') }
					],
					successCriteriaBoxTitle: "Indicadores Clave de Éxito (KPIs)",
                    successCriteriaBoxIcon: createIcon(ListChecks, 'h-5 w-5 text-cyan-600'),
					successCriteria: [
						{ title: "Reducción de Tiempos de Espera", description: "Disminución del 15-20% en tiempos de espera promedio en rutas piloto durante horas pico.", icon: createIcon(Clock, 'h-4 w-4 text-cyan-600') },
						{ title: "Optimización de Kilometraje", description: "Disminución del 5-10% en kilómetros recorridos en vacío por las unidades.", icon: createIcon(Truck, 'h-4 w-4 text-cyan-600') },
						{ title: "Aumento de Puntualidad", description: "Mejora del 10-15% en la puntualidad del servicio en rutas intervenidas.", icon: createIcon(CalendarClock, 'h-4 w-4 text-cyan-600') },
						{ title: "Adopción de Herramientas", description: "Uso activo de la plataforma por el 80% del personal de planificación y despacho.", icon: createIcon(UsersRoundIcon, 'h-4 w-4 text-cyan-600') },
					],
				},
			},
            {
                id: "alcance",
                title: "Componentes y Entregables de la Plataforma",
                icon: Layers,
                iconBgColor: "bg-violet-100", iconColor: "text-violet-600",
                content: {
                    type: "scope",
                    componentsTitle: "Módulos de la Plataforma de Optimización",
                    components: [
                        { title: "Módulo de Monitoreo y Análisis en Tiempo Real", description: "Visualización del estado de la flota, identificación de aglomeraciones, alertas de desviación y patrones de demanda emergentes para operadores.", icon: createIcon(MapPin, 'h-6 w-6') },
                        { title: "Módulo de Planificación y Optimización de Rutas", description: "Herramientas para simular ajustes en rutas y frecuencias, evaluar impacto y optimizar horarios basados en datos históricos y predictivos.", icon: createIcon(Route, 'h-6 w-6') },
                        { title: "Dashboard de Inteligencia de Negocios (BI)", description: "Indicadores clave de rendimiento (KPIs) personalizables, reportes de eficiencia operativa, costos, y patrones de uso para la toma de decisiones gerenciales.", icon: createIcon(BarChartBig, 'h-6 w-6') },
                        { title: "Aplicación para Conductores (Opcional)", description: "Canal de comunicación para recibir instrucciones de despacho optimizadas, reportar incidentes y registrar tiempos de manera eficiente (requiere análisis de viabilidad adicional).", icon: createIcon(Smartphone, 'h-6 w-6') } // MODIFIED
                    ],
                    deliverablesTitle: "Entregables Clave para su Operación",
                    deliverables: [
                        {
                            phaseTitle: "Fase 1: Diagnóstico y Configuración Inicial (2-4 semanas)",
                            items: [
                                { text: "Integración con sistemas GPS existentes y recolección de datos inicial.", icon: createIcon(Zap, 'h-5 w-5 text-violet-500') },
                                { text: "Dashboard de diagnóstico con KPIs básicos de la operación actual.", icon: createIcon(BarChartHorizontal, 'h-5 w-5 text-violet-500') },
                                { text: "Identificación de 2-3 rutas piloto para intervención.", icon: createIcon(Filter, 'h-5 w-5 text-violet-500') }
                            ]
                        },
                        {
                            phaseTitle: "Fase 2: Implementación Piloto y Optimización (6-8 semanas)",
                            items: [
                                { text: "Plataforma configurada con módulos de monitoreo y planificación para rutas piloto.", icon: createIcon(Settings2, 'h-5 w-5 text-violet-500') },
                                { text: "Primer ciclo de recomendaciones de optimización y análisis de impacto.", icon: createIcon(Lightbulb, 'h-5 w-5 text-violet-500') },
                                { text: "Capacitación inicial para personal de despacho y planificación.", icon: createIcon(UsersIcon, 'h-5 w-5 text-violet-500') }
                            ]
                        }
                    ]
                }
            },
            {
                id: "factibilidad-tecnica",
                title: "Viabilidad Técnica de la Plataforma",
                icon: Wrench,
                iconBgColor: "bg-blue-100", iconColor: "text-blue-600",
                content: {
                    type: "technical-feasibility",
                    technologiesTitle: "Tecnologías Clave de la Plataforma",
                    technologiesTitleIcon: createIcon(Server, 'h-5 w-5 text-blue-600'),
                    technologies: [ // Descriptions can be slightly tweaked for operator understanding
                        { name: 'Svelte-Kit & Tailwind CSS', category: 'Frontend (Paneles de Control)', description: 'Interfaces web interactivas y responsivas para el monitoreo y gestión por parte de los operadores.', level: 'Alto', icon: createIcon(Globe, 'h-4 w-4 text-blue-600') },
                        { name: 'Deno/Rust (Axum)', category: 'Backend (Procesamiento de Datos)', description: 'Motores de alta eficiencia para el procesamiento en tiempo real de datos de geolocalización y algoritmos de optimización.', level: 'Alto', icon: createIcon(Cpu, 'h-4 w-4 text-blue-600') },
                        { name: 'PostgreSQL + PostGIS', category: 'Base de Datos', description: 'Almacenamiento robusto y consultoría eficiente de grandes volúmenes de datos geoespaciales y series temporales.', level: 'Medio', icon: createIcon(Database, 'h-4 w-4 text-blue-600') },
                        { name: 'Algoritmos de Optimización', category: 'Inteligencia Artificial', description: 'Modelos matemáticos para la optimización de rutas, frecuencias y asignación de unidades.', level: 'Medio', icon: createIcon(BrainCircuit, 'h-4 w-4 text-blue-600') },
                        { name: 'APIs de Mapas (e.g., Mapbox, Google Maps)', category: 'Visualización y Geocodificación', description: 'Para representación visual de rutas, unidades y puntos de interés; cálculo de distancias y tiempos.', level: 'Alto', icon: createIcon(MapPin, 'h-4 w-4 text-blue-600') },
                        { name: 'Cloud Hosting (AWS/Azure/GCP)', category: 'Infraestructura', description: 'Alojamiento escalable y seguro para la plataforma, garantizando alta disponibilidad y capacidad de procesamiento.', level: 'Alto', icon: createIcon(Cloud, 'h-4 w-4 text-blue-600') }
                    ],
                    viabilityTitle: "Factibilidad de Implementación Técnica",
                    viabilityTitleIcon: createIcon(CheckCircleMain, 'h-5 w-5 text-blue-600'),
                    viabilityIntro: "La plataforma se basa en tecnologías probadas y adaptables, con las siguientes consideraciones clave para su implementación en Toluca:",
                    viabilityPoints: [
                        { title: "Integración con Sistemas GPS Existentes", description: "Capacidad de ingesta de datos de diversos proveedores de GPS utilizados por las flotillas locales.", icon: createIcon(Zap, 'h-4 w-4 text-blue-600') },
                        { title: "Escalabilidad para Múltiples Unidades y Rutas", description: "Arquitectura diseñada para manejar el volumen de datos de la operación de transporte de Toluca.", icon: createIcon(Layers, 'h-4 w-4 text-blue-600') },
                        { title: "Seguridad de Datos Operativos", description: "Protocolos robustos para proteger la información sensible de rutas, unidades y pasajeros.", icon: createIcon(ShieldCheck, 'h-4 w-4 text-blue-600') }
                    ],
                    resourcesTitle: "Equipo y Soporte",
                    resourcesTitleIcon: createIcon(UsersRoundIcon, 'h-5 w-5 text-blue-600'),
                    resourcesIntro: "Contamos con un equipo multidisciplinario y la posibilidad de colaborar con talento de la UAEMéx para:",
                    resourcePoints: [
                        { text: "Análisis de datos de transporte y modelado.", icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-blue-500')},
                        { text: "Desarrollo de software (Frontend y Backend).", icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-blue-500')},
                        { text: "Implementación y soporte técnico de la plataforma.", icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-blue-500')},
                        { text: "Capacitación especializada para su personal.", icon: createIcon(CheckSquare, 'w-2 h-2 rounded-full bg-blue-500')}
                    ],
                    resourcesNote: "La colaboración con la UAEMéx puede ofrecer acceso a investigación aplicada y talento joven para la personalización y evolución de la plataforma a costos competitivos."
                }
            },
            {
                id: "factibilidad-economica",
                title: "Análisis de Inversión y Retorno para Operadores",
                icon: DollarSign,
                iconBgColor: "bg-green-100", iconColor: "text-green-600",
                content: {
                    type: "economic-feasibility",
                    tabs: [
                        {
                            id: 'costs',
                            tabTitle: 'Inversión',
                            tabIcon: createIcon(Coins, 'h-4 w-4 mr-1'),
                            contentTitle: 'Inversión Estimada en la Plataforma (Modelo SaaS o Licencia)',
                            items: [ // These costs would shift towards software, services, and customization
                                { name: 'Configuración Inicial y Personalización', amount: 150000, percentage: 25 },
                                { name: 'Licencia Anual / Suscripción Mensual (SaaS)', amount: 300000, percentage: 50 },
                                { name: 'Capacitación y Soporte Continuo', amount: 100000, percentage: 17 },
                                { name: 'Integración con Sistemas Existentes', amount: 50000, percentage: 8 }
                            ],
                            totalLabel: 'Inversión Anualizada Estimada (Ejemplo):'
                        },
                        {
                            id: 'benefits',
                            tabTitle: 'Retornos',
                            tabIcon: createIcon(TrendingUp, 'h-4 w-4 mr-1'),
                            contentTitle: 'Beneficios Económicos y Retornos para su Operación',
                            items: [ // Focus on operator savings and revenue
                                { name: 'Ahorro por Optimización de Combustible (5-10%)', amount: 200000, percentage: 30 }, // Example value
                                { name: 'Reducción de Costos de Mantenimiento (3-7%)', amount: 150000, percentage: 25 }, // Example value
                                { name: "Optimización de Asignación de Personal y Unidades", amount: 100000, percentage: 15 }, // Example value
                                { name: 'Aumento Potencial de Ingresos por Mejor Servicio (2-5%)', amount: 100000, percentage: 15 }, // Example value
                                { name: 'Reducción de Penalizaciones (si aplica)', amount: 50000, percentage: 15 } // Example value
                            ],
                            totalLabel: 'Beneficio Anual Estimado (Ejemplo):',
                            note: `Nota: Los ahorros y beneficios se basan en eficiencias típicas observadas en implementaciones similares. Un análisis personalizado con sus datos operativos permitirá una proyección más precisa para su flotilla en Toluca.`
                        },
                        {
                            id: 'roi',
                            tabTitle: 'ROI',
                            tabIcon: createIcon(BarChartIcon, 'h-4 w-4 mr-1'),
                            contentTitle: 'Proyección de Retorno de Inversión (Ejemplo para una Flotilla Mediana)',
                            roiChartData: [ // Adjust values based on new cost/benefit
                                { yearLabel: 'Año 1', value: -250000, formattedValue: formatCurrency(-250000) }, // Lower initial net cost due to faster benefits
                                { yearLabel: 'Año 2', value: 150000, formattedValue: formatCurrency(150000) },
                                { yearLabel: 'Año 3', value: 400000, formattedValue: formatCurrency(400000) },
                                { yearLabel: 'Año 4', value: 600000, formattedValue: formatCurrency(600000) },
                                { yearLabel: 'Año 5', value: 800000, formattedValue: formatCurrency(800000) }
                            ],
                            roiSummaryItems: [
                                { label: 'Inversión Inicial (Config. + Parte Anual):', value: formatCurrency(200000), valueColorClass: 'text-red-600' }, // Example
                                { label: 'Punto de Equilibrio Estimado:', value: 'Dentro del Año 2' },
                                { label: 'ROI Proyectado a 3 años:', value: '>200%', valueColorClass: 'text-green-600' }
                            ]
                        }
                    ],
                    funding: {
                        title: 'Modelos de Colaboración y Adquisición',
                        titleIcon: createIcon(HandCoins, 'h-5 w-5 text-green-600'),
                        publicTitle: 'Modelos Flexibles',
                        publicSources: [ // Reframe as commercial models
                            { text: "Modelo de Suscripción (SaaS) con pagos mensuales/anuales.", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') },
                            { text: "Licencia de Plataforma con personalización y soporte.", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') },
                            { text: "Proyecto Piloto Cofinanciado para demostración de valor.", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') }
                        ],
                        privateTitle: 'Opciones de Implementación',
                        privateSources: [ // Reframe as service options
                            { text: "Implementación y configuración llave en mano.", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') },
                            { text: "Consultoría para integración con sus sistemas existentes.", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') },
                            { text: "Soporte técnico continuo y actualizaciones de plataforma.", icon: createIcon(ArrowRight, 'h-4 w-4 text-green-600 flex-shrink-0') }
                        ]
                    }
                }
            },
            {
                id: "factibilidad-operativa",
                title: "Integración Operativa en su Empresa",
                icon: Settings2,
                iconBgColor: "bg-amber-100", iconColor: "text-amber-600",
                content: {
                  type: "operative-feasibility",
                  orgChangesTitle: "Adaptación Operativa para la Optimización Inteligente",
                  orgChangesIcon: createIcon(GitBranch, 'h-5 w-5 text-amber-600'),
                  orgChangesItems: [
                    {
                      title: "Capacitación del Personal de Despacho y Planificación",
                      description: "Programas de formación para el uso efectivo de la plataforma, interpretación de datos y aplicación de recomendaciones de optimización.",
                      icon: createIcon(UsersIcon, 'h-4 w-4 text-amber-600')
                    },
                    {
                      title: "Ajuste de Protocolos de Toma de Decisiones",
                      description: "Incorporación de los insights de la plataforma en los procesos diarios de asignación de unidades, ajuste de rutas y gestión de incidentes.",
                      icon: createIcon(ClipboardList, 'h-4 w-4 text-amber-600')
                    },
                    {
                      title: "Comunicación con Conductores (si aplica App)",
                      description: "Establecimiento de canales y protocolos para la comunicación de ajustes de ruta o despacho dinámico a los conductores.",
                      icon: createIcon(Smartphone, 'h-4 w-4 text-amber-600')
                    }
                  ],
                  adoptionStrategiesTitle: "Estrategias para una Adopción Exitosa en su Organización",
                  adoptionStrategiesIcon: createIcon(ThumbsUp, 'h-5 w-5 text-amber-600'),
                  adoptionStrategiesItems: [
                    {
                      title: "Implementación Piloto en Rutas Seleccionadas",
                      description: "Demostrar el valor de la plataforma en un entorno controlado y obtener retroalimentación temprana de su equipo.",
                      icon: createIcon(Route, 'h-4 w-4 text-amber-600')
                    },
                    {
                      title: "Acompañamiento y Soporte Técnico Dedicado",
                      description: "Asistencia continua durante la implementación y operación para resolver dudas y asegurar el máximo aprovechamiento.",
                      icon: createIcon(UserCheck, 'h-4 w-4 text-amber-600')
                    },
                    {
                      title: "Dashboards Personalizados a sus KPIs",
                      description: "Adaptación de los tableros de control para reflejar los indicadores más relevantes para su gestión y objetivos.",
                      icon: createIcon(BarChartIcon, 'h-4 w-4 text-amber-600')
                    },
                    {
                      title: "Involucramiento del Personal Clave",
                      description: "Participación de despachadores y planificadores en la configuración y pruebas para fomentar la apropiación.",
                      icon: createIcon(UsersRoundIcon, 'h-4 w-4 text-amber-600')
                    }
                  ],
                  resistanceAnalysisTitle: "Gestión del Cambio y Adopción Interna",
                  resistanceAnalysisIcon: createIcon(MessageSquareWarning, 'h-5 w-5 text-amber-600'),
                  resistanceSourcesTitle: "Posibles Puntos de Fricción",
                  resistanceSourcesIcon: createIcon(XSquare, 'h-4 w-4 text-amber-600'),
                  resistanceSourcePoints: [
                    { text: "Resistencia del personal de despacho a nuevas herramientas o procesos.", icon: createIcon(XCircle, 'w-2 h-2 rounded-full bg-amber-500 mt-2') },
                    { text: "Preocupaciones de conductores sobre el monitoreo o cambios en rutinas (si aplica App).", icon: createIcon(XCircle, 'w-2 h-2 rounded-full bg-amber-500 mt-2') },
                    { text: "Inercia en los procesos operativos establecidos y dificultad para adaptarse.", icon: createIcon(XCircle, 'w-2 h-2 rounded-full bg-amber-500 mt-2') }
                  ],
                  mitigationStrategiesTitle: "Estrategias de Facilitación del Cambio",
                  mitigationStrategiesIcon: createIcon(CheckCircle2, 'h-4 w-4 text-green-600'),
                  mitigationStrategyPoints: [
                    { text: "Comunicación clara y continua de los beneficios directos para cada rol y para la empresa.", icon: createIcon(CheckCircle, 'w-2 h-2 rounded-full bg-green-500 mt-2') },
                    { text: "Programas de incentivos (no necesariamente monetarios) ligados a la adopción y mejoras de eficiencia.", icon: createIcon(CheckCircle, 'w-2 h-2 rounded-full bg-green-500 mt-2') },
                    { text: "Demostraciones prácticas y capacitación hands-on para generar confianza en la herramienta.", icon: createIcon(CheckCircle, 'w-2 h-2 rounded-full bg-green-500 mt-2') }
                  ],
                  stakeholderImpactTitle: "Impacto en Roles Clave de su Empresa",
                  stakeholderImpactIcon: createIcon(UsersIcon, 'h-5 w-5 text-amber-600'),
                  stakeholderImpactTableHeaders: ["Rol en la Empresa", "Impacto Potencial", "Nivel de Adaptación", "Estrategia de Soporte"],
                  stakeholderImpactRows: [ // Focus on internal roles
                    { group: "Gerentes de Operación", impact: "Alto (Visibilidad y Control)", resistanceLevel: "Bajo", resistanceBadgeClass: "bg-green-100 text-green-700", strategy: "Dashboards estratégicos, reportes KPI." },
                    { group: "Personal de Despacho", impact: "Alto (Nuevas Herramientas)", resistanceLevel: "Medio", resistanceBadgeClass: "bg-amber-100 text-amber-700", strategy: "Capacitación intensiva, soporte directo, co-diseño de interfaz." },
                    { group: "Jefes de Ruta/Flotilla", impact: "Medio (Optimización Rutas)", resistanceLevel: "Medio", resistanceBadgeClass: "bg-amber-100 text-amber-700", strategy: "Herramientas de simulación, análisis de escenarios." },
                    { group: "Conductores (Indirecto/App Opcional)", impact: "Medio (Posibles cambios de rutina)", resistanceLevel: "Medio", resistanceBadgeClass: "bg-amber-100 text-amber-700", strategy: "Comunicación clara de beneficios, canal de feedback." }
                  ]
                }
              },
            {
                id: "riesgos",
                title: "Análisis de Riesgos de Implementación",
                icon: AlertTriangleMain,
                iconBgColor: "bg-red-100", iconColor: "text-red-600",
                content: {
                    type: "risks",
                    riskCategories: [ 
                        {
                            id: 'tecnico_integracion',
                            title: 'Técnicos y de Integración',
                            icon: createIcon(Server, 'h-4 w-4 mr-2'),
                            risks: [
                                { name: 'Incompatibilidad con sistemas GPS existentes', impact: 'Alto', probability: 'Medio', category: 'Técnico', mitigation: 'Análisis previo de APIs de GPS, desarrollo de adaptadores flexibles.' },
                                { name: 'Calidad deficiente de datos GPS (precisión, frecuencia)', impact: 'Alto', probability: 'Medio', category: 'Técnico', mitigation: 'Algoritmos de limpieza y validación de datos, recomendar mejoras en hardware si es necesario.' },
                                { name: 'Retrasos en la configuración e integración inicial', impact: 'Medio', probability: 'Alto', category: 'Implementación', mitigation: 'Plan de proyecto detallado, equipo de implementación dedicado, fases claras.'}
                            ]
                        },
                        {
                            id: 'adopcion_operacion',
                            title: 'Adopción y Operación',
                            icon: createIcon(UsersIcon, 'h-4 w-4 mr-2'),
                            risks: [
                                { name: 'Baja adopción de la plataforma por el personal clave', impact: 'Alto', probability: 'Medio', category: 'Operacional', mitigation: 'Estrategias de gestión del cambio, capacitación robusta, involucramiento temprano del personal.' },
                                { name: 'Resistencia a modificar procesos operativos establecidos', impact: 'Medio', probability: 'Alto', category: 'Operacional', mitigation: 'Demostración clara de beneficios (ROI), implementación gradual, soporte en la transición.' },
                                { name: 'Dependencia de conectividad para datos en tiempo real', impact: 'Medio', probability: 'Medio', category: 'Operacional', mitigation: 'Mecanismos de buffering de datos en unidades, análisis diferido para zonas sin cobertura.'} // NEW
                            ]
                        },
                        {
                            id: 'externos_negocio',
                            title: 'Externos y de Negocio',
                            icon: createIcon(Briefcase, 'h-4 w-4 mr-2'),
                            risks: [
                                { name: 'Cambios en la regulación del transporte que afecten la operación', impact: 'Bajo', probability: 'Medio', category: 'Externo', mitigation: 'Plataforma adaptable a nuevos parámetros operativos y de reporte.' }, // NEW
                                { name: 'No alcanzar los ahorros o beneficios proyectados rápidamente', impact: 'Medio', probability: 'Medio', category: 'Negocio', mitigation: 'Definición de KPIs realistas, ajustes continuos basados en datos, gestión de expectativas.'} // NEW
                            ]
                        }
                    ],
                    allRisks: [ // Update this list to reflect the new categorized risks
                        { name: 'Incompatibilidad con sistemas GPS existentes', impact: 'Alto', probability: 'Medio', category: 'Técnico', mitigation: 'Análisis previo de APIs de GPS, desarrollo de adaptadores flexibles.' },
                        { name: 'Calidad deficiente de datos GPS', impact: 'Alto', probability: 'Medio', category: 'Técnico', mitigation: 'Algoritmos de limpieza y validación de datos, recomendar mejoras en hardware si es necesario.' },
                        { name: 'Retrasos en la configuración inicial', impact: 'Medio', probability: 'Alto', category: 'Implementación', mitigation: 'Plan de proyecto detallado, equipo de implementación dedicado, fases claras.'},
                        { name: 'Baja adopción de la plataforma por el personal', impact: 'Alto', probability: 'Medio', category: 'Operacional', mitigation: 'Estrategias de gestión del cambio, capacitación robusta, involucramiento temprano.' },
                        { name: 'Resistencia a modificar procesos operativos', impact: 'Medio', probability: 'Alto', category: 'Operacional', mitigation: 'Demostración clara de beneficios (ROI), implementación gradual.' },
                        { name: 'Dependencia de conectividad', impact: 'Medio', probability: 'Medio', category: 'Operacional', mitigation: 'Buffering de datos, análisis diferido.'},
                        { name: 'Cambios en la regulación', impact: 'Bajo', probability: 'Medio', category: 'Externo', mitigation: 'Plataforma adaptable.' },
                        { name: 'No alcanzar ahorros proyectados rápidamente', impact: 'Medio', probability: 'Medio', category: 'Negocio', mitigation: 'KPIs realistas, ajustes continuos.'}
                    ],
                    matrixTitle: "Matriz de Riesgos para la Implementación de la Plataforma",
                    matrixTitleIcon: createIcon(AlertTriangleMain, 'h-5 w-5 text-red-600'),
                    legendTitle: "Leyenda de Riesgos Clave",
                    legendTitleIcon: createIcon(InfoIcon, 'h-5 w-5 text-slate-700'),
                    mitigationStrategyLabel: "Estrategia de Mitigación Propuesta:"
                }
            },
            {
                id: "cronograma",
                title: "Hoja de Ruta para la Implementación",
                icon: GanttChartSquare,
                iconBgColor: "bg-indigo-100",
                iconColor: "text-indigo-600",
                content: {
                    type: "timeline",
                    phases: [ // Phases reframed for an operator client
                        {
                            id: 1,
                            name: 'Fase 1: Diagnóstico y Configuración Inicial',
                            duration: '2-4 Semanas',
                            status: 'Listo para Iniciar',
                            statusBadgeClass: 'badge badge-primary',
                            tasksTitle: 'Actividades Clave',
                            tasksIcon: createIcon(ClipboardList, 'h-4 w-4 text-indigo-600'),
                            tasks: [
                                { text: 'Reunión de kick-off y alineación de expectativas.', icon: createIcon(UsersIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Análisis de sistemas GPS actuales e inicio de integración de datos.', icon: createIcon(Zap, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Configuración del dashboard de diagnóstico inicial.', icon: createIcon(BarChartIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Selección conjunta de 2-3 rutas para el proyecto piloto.', icon: createIcon(Filter, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ],
                            milestonesTitle: 'Hitos Principales',
                            milestonesIcon: createIcon(Flag, 'h-4 w-4 text-indigo-600'),
                            milestones: [
                                { text: 'Datos de rutas piloto integrados en la plataforma.', icon: createIcon(MilestoneIconLucide, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Dashboard de diagnóstico operativo y validado.', icon: createIcon(MilestoneIconLucide, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ]
                        },
                        {
                            id: 2,
                            name: 'Fase 2: Implementación Piloto y Optimización',
                            duration: '6-8 Semanas (post Fase 1)',
                            status: 'Planificado',
                            statusBadgeClass: 'badge badge-info badge-outline',
                            tasksTitle: 'Actividades Clave',
                            tasksIcon: createIcon(ClipboardList, 'h-4 w-4 text-indigo-600'),
                            tasks: [
                                { text: 'Implementación de módulos de monitoreo y planificación en rutas piloto.', icon: createIcon(Settings2, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Primer ciclo de análisis y generación de recomendaciones de optimización.', icon: createIcon(Lightbulb, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Capacitación del personal de despacho y planificación en el uso de la plataforma.', icon: createIcon(UsersRoundIcon, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Recopilación de feedback y ajustes iniciales a la plataforma.', icon: createIcon(MessageSquareWarning, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ],
                            milestonesTitle: 'Hitos Principales',
                            milestonesIcon: createIcon(Flag, 'h-4 w-4 text-indigo-600'),
                            milestones: [
                                { text: 'Primer reporte de impacto de optimizaciones en rutas piloto.', icon: createIcon(MilestoneIconLucide, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Personal clave capacitado y utilizando la plataforma activamente.', icon: createIcon(MilestoneIconLucide, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ]
                        },
                        {
                            id: 3,
                            name: 'Fase 3: Despliegue Extendido y Ajustes',
                            duration: '4-6 Semanas (post Fase 2)',
                            status: 'Planificado',
                            statusBadgeClass: 'badge badge-info badge-outline',
                            tasksTitle: 'Actividades Clave',
                            tasksIcon: createIcon(ClipboardList, 'h-4 w-4 text-indigo-600'),
                            tasks: [
                                { text: 'Extensión de la plataforma a rutas adicionales o toda la flotilla.', icon: createIcon(Layers, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Ajustes finos de algoritmos y personalización de dashboards.', icon: createIcon(SlidersHorizontal, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Definición de reportes periódicos de gestión.', icon: createIcon(BarChartBig, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ],
                            milestonesTitle: 'Hitos Principales',
                            milestonesIcon: createIcon(Flag, 'h-4 w-4 text-indigo-600'),
                            milestones: [
                                { text: 'Plataforma operativa en el alcance definido.', icon: createIcon(MilestoneIconLucide, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Entrega de manuales de usuario y documentación final.', icon: createIcon(MilestoneIconLucide, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ]
                        },
                        {
                            id: 4,
                            name: 'Fase 4: Soporte Continuo y Evolución',
                            duration: 'Continuo (post Fase 3)',
                            status: 'Soporte Activo',
                            statusBadgeClass: 'badge badge-success',
                            tasksTitle: 'Actividades Clave',
                            tasksIcon: createIcon(ClipboardList, 'h-4 w-4 text-indigo-600'),
                            tasks: [
                                { text: 'Soporte técnico y resolución de incidencias.', icon: createIcon(Wrench, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Actualizaciones periódicas de la plataforma (nuevas funcionalidades, mejoras).', icon: createIcon(Cloud, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Revisiones trimestrales de KPIs y consultoría para optimización continua.', icon: createIcon(LineChart, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ],
                            milestonesTitle: 'Hitos Principales',
                            milestonesIcon: createIcon(Flag, 'h-4 w-4 text-indigo-600'),
                            milestones: [
                                { text: 'Ciclos de mejora continua implementados.', icon: createIcon(MilestoneIconLucide, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') },
                                { text: 'Satisfacción del cliente mantenida y documentada.', icon: createIcon(MilestoneIconLucide, 'w-2 h-2 rounded-full bg-indigo-500 mt-2') }
                            ]
                        }
                    ],
                    summaryTitle: "Resumen del Plan de Implementación",
                    summaryTitleIcon: createIcon(CalendarDays, 'h-5 w-5 text-indigo-600'),
                    summaryCards: [
                        { label: 'Tiempo Estimado Piloto', value: '8-12 Sem.', subLabel: 'Fases 1 y 2 Completas' },
                        { label: 'Tiempo Total Implementación', value: '12-18 Sem.', subLabel: 'Hasta Despliegue Extendido' },
                        { label: 'Inicio Sugerido', value: 'Inmediato', subLabel: 'Post-Acuerdo' },
                        { label: 'Soporte', value: 'Continuo', subLabel: 'Post-Implementación' }
                    ]
                }
            },
            {
                id: "conclusiones",
                title: "Conclusión: Una Inversión Estratégica para su Empresa",
                icon: CheckCircleMain,
                iconBgColor: "bg-teal-100", iconColor: "text-teal-600",
                content: {
                    type: "conclusions",
                    generalConclusionTitle: "Propuesta de Valor Concreta para el Transporte de Toluca",
                    mainConclusionParagraphs: [
                        `La Plataforma Inteligente de Optimización del Transporte Público ofrece una solución tangible y data-driven a los desafíos operativos que enfrentan los líderes del transporte en Toluca. Al transformar datos brutos en insights accionables, su empresa puede lograr una operación más eficiente, reducir costos significativamente y mejorar la calidad del servicio ofrecido a los ciudadanos.`,
                        `Consideramos que esta es una inversión estratégica con un claro retorno, no solo económico, sino también en términos de reputación, satisfacción del cliente y posicionamiento como un operador moderno e innovador en el sector.`
                    ],
                    overallRecommendationText: "Recomendamos Iniciar un Proyecto Piloto",
                    overallRecommendationIcon: createIcon(Rocket, 'h-5 w-5'),
                    overallRecommendationBoxClass: 'inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full',
                    strengthsTitle: "Ventajas Clave de Nuestra Solución",
                    strengthsTitleIcon: createIcon(ThumbsUp, 'h-5 w-5 text-teal-600'),
                    strengths: [
                        { title: "Enfoque en ROI y Eficiencia Operativa", description: "Soluciones diseñadas para impactar directamente la rentabilidad de su empresa.", icon: createIcon(DollarSign, 'h-5 w-5 text-teal-600') },
                        { title: "Tecnología Adaptable y Escalable", description: "Plataforma construida para crecer con sus necesidades y adaptarse a la realidad de Toluca.", icon: createIcon(Settings2, 'h-5 w-5 text-teal-600') },
                        { title: "Soporte Local y Conocimiento del Sector", description: "Colaboración con la UAEMéx para un entendimiento profundo del contexto local.", icon: createIcon(University, 'h-5 w-5 text-teal-600') }
                    ],
                    considerationsTitle: "Factores Clave para el Éxito Conjunto",
                    considerationsTitleIcon: createIcon(AlertTriangleMain, 'h-5 w-5 text-amber-600'),
                    considerations: [
                        { title: "Compromiso de la Dirección", description: "El involucramiento activo de los líderes de la empresa de transporte es crucial para la adopción.", icon: createIcon(UsersIcon, 'h-5 w-5 text-amber-600') },
                        { title: "Calidad y Disponibilidad de Datos GPS", description: "La precisión de la optimización depende de la calidad de los datos de entrada de las unidades.", icon: createIcon(Database, 'h-5 w-5 text-amber-600') },
                        { title: "Apertura a la Innovación y Gestión del Cambio", description: "Disposición para adaptar procesos y adoptar nuevas herramientas tecnológicas.", icon: createIcon(Lightbulb, 'h-5 w-5 text-amber-600') }
                    ],
                    nextStepsTitle: "Siguientes Pasos para Iniciar la Colaboración",
                    nextStepsTitleIcon: createIcon(ArrowRightToLine, 'h-5 w-5 text-teal-600'),
                    nextStepsTimelineIndicatorClass: 'bg-teal-500 text-white',
                    nextSteps: [
                        { id: 1, title: "Reunión de Presentación Detallada", description: "Agendar una sesión para mostrar la plataforma en acción y discutir sus necesidades específicas.", priority: "Inmediato", priorityBadgeClass: 'badge bg-teal-100 text-teal-800' },
                        { id: 2, title: "Análisis de Datos Operativos (Diagnóstico)", description: "Compartir una muestra de sus datos GPS (anonimizados si es necesario) para un análisis de diagnóstico preliminar sin costo.", priority: "Próximo", priorityBadgeClass: 'badge bg-teal-100 text-teal-800' },
                        { id: 3, title: "Definición de Proyecto Piloto Personalizado", description: "Con base en el diagnóstico, co-diseñar un proyecto piloto enfocado en sus rutas o desafíos más críticos en Toluca.", priority: "A definir", priorityBadgeClass: 'badge bg-teal-100 text-teal-800' }
                    ],
                    finalRecommendationSection: {
                        title: "Invitación a la Transformación Digital de su Flotilla",
                        icon: createIcon(Sparkles, 'h-5 w-5 text-teal-600'),
                        text: `Estamos convencidos de que nuestra plataforma puede ser un aliado estratégico fundamental para el éxito y crecimiento de su operación de transporte en Toluca. Le invitamos a dar el siguiente paso hacia una gestión más inteligente, eficiente y rentable.`,
                        actionButton: {
                            text: "Agendar Demostración Personalizada",
                            icon: createIcon(CalendarPlus, 'mr-2 h-4 w-4'), // CalendarPlus might be better
                            className: 'bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'
                        }
                    }
                }
            }
		],
	});
}

export const projectData = new ProjectDataStore();