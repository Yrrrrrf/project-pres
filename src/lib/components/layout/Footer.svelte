<script lang="ts">
    import { University, Calendar1, User, File, Lamp } from "lucide-svelte";
    
    let {
        courseName = "Ingeniería de Software I",
        institution = "Universidad Autónoma del Estado de México",
        faculty = "Facultad de Ingeniería",
        professor = "Dr. Juan Pérez Martínez",
        courseCode = "IS2023",
        credits = "8"
    } = $props();
</script>

<footer class="bg-slate-800 text-white py-8 px-4 mt-12">
    <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                    <University class="h-5 w-5" />
                    {courseName}
                </h3>
                <p class="text-slate-300">
                    {institution}<br />
                    {faculty}
                </p>
                <p class="mt-4 text-slate-400 text-sm">
                    Este documento forma parte del análisis de factibilidad para el proyecto
                    "Sistema Inteligente de Transporte Público" desarrollado como parte
                    del curso de Ingeniería de Software I.
                </p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">Información del Curso</h3>
                <ul class="space-y-2 text-slate-300">
                    <li class="flex items-center gap-2">
                        <Calendar1 class="h-4 w-4 text-emerald-400" />
                        <span>Semestre: 2023-2024</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <User class="h-4 w-4 text-emerald-400" />
                        <span>Profesor: {professor}</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <File class="h-4 w-4 text-emerald-400" />
                        <span>Clave de la materia: {courseCode}</span>
                    </li>
                    <li class="flex items-center gap-2">
                        <Lamp class="h-4 w-4 text-emerald-400" />
                        <span>Créditos: {credits}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-t border-slate-700 mt-6 pt-6 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} {institution}. Todos los derechos reservados.
        </div>
    </div>
</footer>