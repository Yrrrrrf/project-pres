// src/lib/stores/projectData.svelte.ts
import type { ProjectSection } from '$lib/types';
import { 
    FileText, 
    Target, 
    Compass, 
    Wrench, 
    DollarSign, 
    Users, 
    AlertTriangle, 
    Calendar, 
    LineChart, 
    CheckCircle,
    Lightbulb,
    Clock,
    Truck,
    ShieldCheck,
    Award,
    MapPin,
    Smartphone,
    Server,
    Database,
    Globe,
    CreditCard,
    Cpu,
    Cloud,
    TrendingUp,
    BarChart3
} from 'lucide-svelte';

class ProjectDataStore {
    // Project metadata
    title: string = $state("Sistema Inteligente de Transporte Público");
    subtitle: string = $state("Análisis de Factibilidad y Propuesta de Implementación");
    
    // Sections data
    sections: ProjectSection[] = $state([
        {
            id: "resumen",
            title: "Resumen Ejecutivo",
            icon: FileText,
            iconBgColor: "bg-emerald-100",
            iconColor: "text-emerald-600",
            defaultExpanded: true,
            content: {
                type: "executive-summary",
                summary: `Este proyecto propone el desarrollo de un sistema integral para la modernización del transporte público mediante 
                una aplicación móvil que proporcione seguimiento en tiempo real de las unidades, sistema de pagos digitales, y 
                registro de usuarios.

                La iniciativa busca optimizar la eficiencia del transporte público, mejorar la seguridad de los 
                pasajeros, reducir los tiempos de espera y contribuir a la descongestión vial en zonas urbanas.`,
                quote: `Según datos del IMCO, la congestión en 32 ciudades mexicanas cuesta 94 mil millones de pesos al año, con usuarios 
                de transporte público perdiendo 118 horas anuales en comparación con las 71 horas que pierden quienes usan automóvil.`,
                keyPoints: [
                    { title: "Reducción de Tiempo", description: "118 horas anuales perdidas por usuario", icon: Clock },
                    { title: "Impacto Económico", description: "94 mil millones de pesos anuales en pérdidas", icon: DollarSign },
                    { title: "Mejora en Seguridad", description: "Sistema de registro y verificación de usuarios", icon: Users },
                    { title: "Impacto Ambiental", description: "Reducción de emisiones por optimización", icon: Lightbulb },
                ]
            }
        },
        {
            id: "objetivos",
            title: "Objetivos del Proyecto",
            icon: Target,
            iconBgColor: "bg-cyan-100",
            iconColor: "text-cyan-600",
            defaultExpanded: false,
            content: {
                type: "objectives",
                description: `Los siguientes objetivos han sido establecidos para guiar el desarrollo e implementación del sistema, 
                con indicadores de progreso basados en el avance actual del proyecto:`,
                objectives: [
                    { id: 'obj1', name: 'Seguimiento en tiempo real', progress: 65, icon: MapPin },
                    { id: 'obj2', name: 'Sistema de registro de usuarios', progress: 80, icon: Users },
                    { id: 'obj3', name: 'Reducción de tiempos de espera', progress: 40, icon: Clock },
                    { id: 'obj4', name: 'Disminución de congestión vial', progress: 35, icon: Truck },
                    { id: 'obj5', name: 'Sistema de alerta de seguridad', progress: 55, icon: ShieldCheck },
                    { id: 'obj6', name: 'Modelo de suscripción', progress: 70, icon: Award },
                    { id: 'obj7', name: 'Reducción de emisiones', progress: 30, icon: Lightbulb },
                ],
                successCriteria: [
                    { title: "Reducción de tiempos de espera", description: "Disminución del 40% en tiempos de espera promedio" },
                    { title: "Adopción de usuarios", description: "50% de usuarios de transporte utilizando la aplicación" },
                    { title: "Satisfacción de usuarios", description: "Calificación promedio de 4.5/5 en la aplicación" },
                    { title: "Reducción de congestión", description: "Disminución del 15% en congestión vial en zonas clave" },
                ]
            }
        },
        {
            id: "alcance",
            title: "Alcance del Proyecto",
            icon: Compass,
            iconBgColor: "bg-violet-100",
            iconColor: "text-violet-600",
            defaultExpanded: false,
            content: {
                type: "scope",
                components: [
                    { 
                        title: "Aplicación Móvil", 
                        description: "Desarrollo de aplicación para usuarios finales en Android e iOS con seguimiento en tiempo real, pagos digitales y sistema de alertas.",
                        icon: Smartphone 
                    },
                    { 
                        title: "Plataforma Web", 
                        description: "Portal de administración para operadores de transporte con monitoreo de unidades, gestión de rutas y análisis de datos.",
                        icon: Globe 
                    },
                    { 
                        title: "Sistema de Geolocalización", 
                        description: "Infraestructura para seguimiento en tiempo real de unidades mediante GPS y transmisión de datos a la plataforma central.",
                        icon: MapPin 
                    },
                    { 
                        title: "Sistema de Pagos", 
                        description: "Pasarela de pagos digitales y modelo de suscripción para usuarios frecuentes con múltiples métodos de pago.",
                        icon: CreditCard 
                    }
                ],
                deliverables: [
                    {
                        phase: "Fase 1: Desarrollo de Software",
                        items: [
                            "Aplicación móvil funcional (iOS y Android)",
                            "Backend robusto con APIs documentadas",
                            "Portal web de administración"
                        ]
                    },
                    {
                        phase: "Fase 2: Hardware e Infraestructura",
                        items: [
                            "Dispositivos IoT para unidades de transporte",
                            "Infraestructura cloud para procesamiento de datos"
                        ]
                    }
                ]
            }
        },
        {
            id: "factibilidad-tecnica",
            title: "Análisis de Factibilidad Técnica",
            icon: Wrench,
            iconBgColor: "bg-blue-100",
            iconColor: "text-blue-600",
            defaultExpanded: false,
            content: {
                type: "technical-feasibility",
                technologies: [
                    { name: 'React Native', category: 'Frontend', icon: Smartphone, level: 'Alto', description: 'Para desarrollo de aplicaciones móviles multiplataforma (iOS y Android)' },
                    { name: 'Node.js + Express', category: 'Backend', icon: Server, level: 'Alto', description: 'Para desarrollo de APIs RESTful y lógica de servidor' },
                    { name: 'MongoDB', category: 'Base de Datos', icon: Database, level: 'Medio', description: 'Para almacenamiento de datos no estructurados' },
                    { name: 'PostgreSQL', category: 'Base de Datos', icon: Database, level: 'Medio', description: 'Para datos geoespaciales y relacionales' },
                    { name: 'Google Maps API', category: 'Servicios', icon: Globe, level: 'Alto', description: 'Para geolocalización y mapeo de rutas' },
                    { name: 'Stripe/PayPal', category: 'Pagos', icon: CreditCard, level: 'Medio', description: 'Para procesamiento de pagos digitales' },
                    { name: 'GPS/IoT', category: 'Hardware', icon: Cpu, level: 'Alto', description: 'Dispositivos para rastreo de unidades' },
                    { name: 'AWS/Google Cloud', category: 'Infraestructura', icon: Cloud, level: 'Alto', description: 'Para alojamiento y escalabilidad' }
                ]
            }
        },
        {
            id: "factibilidad-economica",
            title: "Análisis de Factibilidad Económica",
            icon: DollarSign,
            iconBgColor: "bg-green-100",
            iconColor: "text-green-600",
            defaultExpanded: false,
            content: {
                type: "economic-feasibility",
                tabs: [
                    {
                        id: 'costs',
                        title: 'Costos',
                        icon: DollarSign,
                        costs: [
                            { name: 'Desarrollo de software', amount: 2500000, percentage: 35 },
                            { name: 'Hardware (GPS/IoT)', amount: 1800000, percentage: 25 },
                            { name: 'Infraestructura cloud', amount: 900000, percentage: 13 },
                            { name: 'Licencias', amount: 700000, percentage: 10 },
                            { name: 'Marketing y capacitación', amount: 600000, percentage: 8 },
                            { name: 'Soporte y mantenimiento', amount: 650000, percentage: 9 }
                        ]
                    },
                    {
                        id: 'benefits',
                        title: 'Beneficios',
                        icon: TrendingUp,
                        benefits: [
                            { name: 'Reducción de costos operativos', amount: 1200000, percentage: 20 },
                            { name: 'Aumento de ingresos', amount: 1800000, percentage: 30 },
                            { name: 'Ingresos por suscripciones', amount: 1500000, percentage: 25 },
                            { name: 'Reducción de pérdidas', amount: 900000, percentage: 15 },
                            { name: 'Valor social', amount: 600000, percentage: 10 }
                        ]
                    },
                    {
                        id: 'roi',
                        title: 'ROI',
                        icon: BarChart3,
                        roi: {
                            years: [1, 2, 3, 4, 5],
                            values: [-4000000, -1500000, 1000000, 3500000, 6000000]
                        }
                    }
                ],
                funding: {
                    public: [
                        "Fondos metropolitanos para movilidad",
                        "Programas federales para desarrollo urbano",
                        "Inversión de gobiernos locales"
                    ],
                    private: [
                        "Alianzas público-privadas con operadores",
                        "Inversión de empresas de tecnología",
                        "Fondos universitarios para investigación"
                    ]
                }
            }
        },
        {
            id: "riesgos",
            title: "Análisis de Riesgos",
            icon: AlertTriangle,
            iconBgColor: "bg-red-100",
            iconColor: "text-red-600",
            defaultExpanded: false,
            content: {
                type: "risks",
                risks: [
                    { 
                        name: 'Problemas de precisión GPS', 
                        impact: 'Alto', 
                        probability: 'Medio', 
                        category: 'Técnico',
                        mitigation: 'Algoritmos de corrección y triangulación' 
                    },
                    { 
                        name: 'Fallos de conectividad', 
                        impact: 'Alto', 
                        probability: 'Alto', 
                        category: 'Técnico',
                        mitigation: 'Implementación de modo offline y sincronización posterior' 
                    },
                    { 
                        name: 'Baja adopción', 
                        impact: 'Alto', 
                        probability: 'Medio', 
                        category: 'Mercado',
                        mitigation: 'Estrategia de incentivos y campaña de concientización' 
                    },
                    { 
                        name: 'Desinterés de operadores', 
                        impact: 'Alto', 
                        probability: 'Alto', 
                        category: 'Mercado',
                        mitigation: 'Demostración de beneficios económicos y operativos' 
                    },
                    { 
                        name: 'Retrasos en desarrollo', 
                        impact: 'Medio', 
                        probability: 'Alto', 
                        category: 'Implementación',
                        mitigation: 'Metodología ágil con entregas incrementales' 
                    }
                ]
            }
        },
        {
            id: "cronograma",
            title: "Cronograma Propuesto",
            icon: Calendar,
            iconBgColor: "bg-indigo-100",
            iconColor: "text-indigo-600",
            defaultExpanded: false,
            content: {
                type: "timeline",
                phases: [
                    { 
                        id: 1, 
                        name: 'Planificación y Diseño', 
                        duration: '3 meses', 
                        tasks: [
                            'Análisis detallado de requerimientos y casos de uso',
                            'Diseño de arquitectura del sistema y modelo de datos',
                            'Prototipado de interfaces de usuario',
                            'Selección de tecnologías y proveedores'
                        ],
                        milestones: ['Documento de requerimientos aprobado', 'Arquitectura definida', 'Prototipos validados'],
                        status: 'Pendiente'
                    },
                    { 
                        id: 2, 
                        name: 'Desarrollo', 
                        duration: '6 meses', 
                        tasks: [
                            'Desarrollo de backend y APIs',
                            'Implementación de sistemas de geolocalización',
                            'Desarrollo de aplicaciones móviles',
                            'Integración de pasarelas de pago',
                            'Pruebas de componentes'
                        ],
                        milestones: ['Backend funcional', 'Aplicación móvil v1.0', 'Integración de pagos completada'],
                        status: 'Pendiente'
                    },
                    { 
                        id: 3, 
                        name: 'Piloto', 
                        duration: '3 meses', 
                        tasks: [
                            'Implementación en rutas seleccionadas',
                            'Capacitación de personal operativo',
                            'Pruebas de usuario y recopilación de feedback',
                            'Ajustes y optimizaciones'
                        ],
                        milestones: ['Lanzamiento piloto', 'Reporte de feedback de usuarios', 'Optimizaciones implementadas'],
                        status: 'Pendiente'
                    },
                    { 
                        id: 4, 
                        name: 'Despliegue', 
                        duration: '4 meses', 
                        tasks: [
                            'Implementación gradual en todas las rutas',
                            'Campañas de difusión y adopción',
                            'Monitoreo y resolución de incidencias',
                            'Evaluación de desempeño inicial'
                        ],
                        milestones: ['Despliegue completo', 'Reporte de adopción', 'Evaluación de KPIs iniciales'],
                        status: 'Pendiente'
                    }
                ],
                summary: {
                    totalDuration: "16 meses",
                    longestPhase: "6 meses",
                    estimatedStart: "Q1 2024",
                    estimatedLaunch: "Q2 2025"
                }
            }
        },
        {
            id: "impacto",
            title: "Impacto Esperado",
            icon: LineChart,
            iconBgColor: "bg-purple-100",
            iconColor: "text-purple-600",
            defaultExpanded: false,
            content: {
                type: "impact",
                tabs: [
                    {
                        id: 'social',
                        title: 'Social',
                        icon: Users,
                        details: {
                            timeReduction: {
                                value: "118",
                                unit: "horas anuales",
                                description: "Actualmente, los usuarios de transporte público pierden en promedio 118 horas anuales debido a la ineficiencia del sistema. El proyecto busca reducir este tiempo en al menos un 40%."
                            },
                            keyBenefits: [
                                {
                                    title: "Mayor Seguridad",
                                    description: "El registro de usuarios y seguimiento en tiempo real aumentará la seguridad de los pasajeros y permitirá respuestas más rápidas ante incidentes.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Inclusión Social",
                                    description: "Acceso equitativo a servicios de movilidad para todos los segmentos de la población, incluyendo alternativas para personas sin acceso a tecnología.",
                                    icon: Users
                                }
                            ]
                        }
                    },
                    {
                        id: 'economico',
                        title: 'Económico',
                        icon: DollarSign,
                        details: {
                            congestionReduction: {
                                value: "94 mil millones",
                                unit: "MXN anuales",
                                description: "La congestión en 32 ciudades mexicanas cuesta actualmente 94 mil millones de pesos al año. Una reducción del 10% representaría un ahorro de 9.4 mil millones de pesos anuales."
                            }
                        }
                    },
                    {
                        id: 'ambiental',
                        title: 'Ambiental',
                        icon: Lightbulb,
                        details: {
                            emissionsReduction: {
                                value: "15-20%",
                                unit: "reducción estimada",
                                description: "El mayor uso del transporte público y la optimización de rutas contribuirán a una reducción significativa de emisiones de CO2 y otros contaminantes."
                            }
                        }
                    },
                    {
                        id: 'urbano',
                        title: 'Urbano',
                        icon: Compass,
                        details: {
                            trafficReduction: {
                                value: "25%",
                                unit: "reducción de tráfico",
                                description: "La optimización del transporte público y el cambio modal contribuirán a una significativa descongestión de las principales vías urbanas."
                            }
                        }
                    }
                ]
            }
        },
        {
            id: "conclusiones",
            title: "Conclusiones y Recomendaciones",
            icon: CheckCircle,
            iconBgColor: "bg-teal-100",
            iconColor: "text-teal-600",
            defaultExpanded: false,
            content: {
                type: "conclusions",
                mainConclusion: `El análisis de factibilidad demuestra que el proyecto de Sistema Inteligente de Transporte Público es 
                viable técnica, económica y operativamente. 
                Los beneficios esperados superan significativamente los costos y riesgos identificados, con un impacto 
                potencial positivo en múltiples dimensiones sociales, económicas y ambientales.
                
                La implementación de esta solución permitiría abordar directamente los problemas de ineficiencia en el transporte
                público documentados por el IMCO, donde actualmente se pierden 118 horas anuales por usuario y 94 mil millones
                de pesos a nivel nacional debido a la congestión.`,
                recommendation: "Proyecto Recomendado para Implementación",
                strengths: [
                    {
                        title: "Alto impacto social y económico",
                        description: "Beneficios cuantificables para usuarios y operadores"
                    },
                    {
                        title: "Tecnologías maduras y probadas",
                        description: "Uso de soluciones tecnológicas con amplia trayectoria"
                    }
                ],
                considerations: [
                    {
                        title: "Gestión del cambio",
                        description: "Estrategia robusta para superar resistencia inicial"
                    },
                    {
                        title: "Inclusión digital",
                        description: "Alternativas para usuarios sin acceso a tecnología"
                    }
                ]
            }
        }
    ]);

    // Helper functions
    formatCurrency(amount: number): string {
        return new Intl.NumberFormat('es-MX', { 
            style: 'currency', 
            currency: 'MXN' 
        }).format(amount);
    }
    
    getRiskColor(level: string): string {
        switch(level) {
            case 'Alto': return 'bg-red-100 text-red-700';
            case 'Medio': return 'bg-amber-100 text-amber-700';
            case 'Bajo': return 'bg-green-100 text-green-700';
            default: return 'bg-slate-100 text-slate-700';
        }
    }
}

// Export singleton instance
export const projectData = new ProjectDataStore();