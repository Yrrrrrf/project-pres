<script>
    import { Header, Footer, Section } from '$lib/components';
    import { Book, Target, Compass } from 'lucide-svelte';
    import { projectData } from '$lib/stores';
</script>

<Header title="Análisis de Factibilidad" />

<main class="max-w-5xl mx-auto p-4 md:p-8">
    <Section
        id="summary"
        title="Resumen Ejecutivo"
        icon={Book}
    >
        <!-- Content here -->
        <p class="text-lg text-slate-700">
            Este proyecto propone el desarrollo de un sistema integral para la modernización del transporte público mediante 
            una aplicación móvil que proporcione seguimiento en tiempo real de las unidades, sistema de pagos digitales, y 
            registro de usuarios.
        </p>
    </Section>
    
    <Section
        id="objectives"
        title="Objetivos del Proyecto"
        icon={Target}
    >
        <!-- Content here -->
        <p>Los objetivos principales del proyecto son:</p>
            <li>Reducción de tiempos de espera</li>
            <li>Mejora en la experiencia del usuario</li>
            <li>Optimización de rutas</li>
    </Section>
    
    <Section
        id="scope"
        title="Alcance del Proyecto"
        icon={Compass}
    >
        <!-- Content here -->
        <p>El alcance incluye:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Aplicación móvil para usuarios</li>
            <li>Sistema de administración para operadores</li>
            <li>Infraestructura de geolocalización</li>
        </ul>
    </Section>
</main>

<Footer />

<!-- Add this to test if DaisyUI is working properly -->
<div class="fixed bottom-4 right-4 p-4 bg-primary text-primary-content rounded-xl shadow-lg">
    <p class="font-bold">DaisyUI Test</p>
    <div class="flex gap-2 mt-2">
        <button class="btn btn-secondary btn-sm">Secondary</button>
        <button class="btn btn-accent btn-sm">Accent</button>
        <button class="btn btn-neutral btn-sm">Neutral</button>
    </div>
</div>