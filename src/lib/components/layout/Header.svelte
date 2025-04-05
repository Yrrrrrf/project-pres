<script lang="ts">
    import { University } from "lucide-svelte";

    let { 
        title = "Análisis de Factibilidad",
        subtitle = "Evaluación integral de viabilidad del proyecto",
        courseName = "Ingeniería de Software I",
        institution = "Universidad Autónoma del Estado de México"
    } = $props();
</script>

<header class="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-8 px-4 shadow-lg">
    <div class="max-w-5xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="mb-4 md:mb-0">
                <h1 class="text-4xl font-bold tracking-tight">{title}</h1>
                <p class="text-emerald-100 mt-2 text-lg">{subtitle}</p>
            </div>
            <div class="flex items-center gap-2">
                <University class="h-8 w-8" />
                <div>
                    <p class="font-medium">{courseName}</p>
                    <p class="text-sm text-emerald-100">{institution}</p>
                </div>
            </div>
        </div>
    </div>
</header>