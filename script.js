const malla = {
  "1er semestre": [
    "Introducción a la Psicología",
    "Fundamentos Biológicos del Comportamiento",
    "Procesos Psicológicos",
    "Filosofía y Psicología",
    "English I",
    "Habilidades de Formación Inicial"
  ],
  "2do semestre": [
    "Psicología del Desarrollo I",
    "Fundamentos Socioculturales de la Psicología",
    "Personalidad",
    "English II",
    "Metodología de la Investigación"
  ],
  "3er semestre": [
    "Psicología del Desarrollo II",
    "Modelo Humanista Experiencial",
    "English III",
    "Métodos Cuantitativos en Psicología"
  ],
  "4to semestre": [
    "Teorías de Psicología Social",
    "Psicología Social Aplicada",
    "Técnicas de Evaluación Psicológica",
    "Métodos Cualitativos en Psicología",
    "Electivo de Formación Integral I"
  ],
  "5to semestre": [
    "Psicodiagnóstico Infanto Juvenil",
    "Psicoterapia Infanto Juvenil",
    "Psicopatología",
    "Psicología Comunitaria",
    "Neurociencia Afectiva y Social"
  ],
  "6to semestre": [
    "Diagnóstico Clínico Adulto I",
    "Psicología Educacional",
    "Psicología Jurídica",
    "Neurociencia Cognitiva y del Desarrollo",
    "Electivo de Formación Integral II"
  ],
  "7mo semestre": [
    "Intervenciones en Psicología Clínica",
    "Introducción a la Psicología Clínica",
    "Modelos Conductual Cognitivos",
    "Modelos Psicoanalíticos",
    "Electivo de Especialidad I"
  ],
  "8vo semestre": [
    "Diagnóstico Clínico Adulto II",
    "Modelos Sistémicos",
    "Taller de Especialización I",
    "Intervenciones en Psicología Educacional",
    "Seminario de Investigación I"
  ],
  "9no semestre": [
    "Taller de Integración I",
    "Intervenciones en Contextos Organizacionales",
    "Psicología del Trabajo y las Organizaciones",
    "Taller de Especialización II",
    "Seminario de Investigación II",
    "Electivo de Especialidad II"
  ],
  "10mo semestre": [
    "Taller de Integración II",
    "Práctica Profesional"
  ]
};

const contenedor = document.getElementById("malla");
const progresoBarra = document.getElementById("progresoBarra");
const progresoTexto = document.getElementById("progresoTexto");

const estado = JSON.parse(localStorage.getItem("estadoMalla")) || {};

function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(estado));
}

function calcularProgreso() {
  const total = document.querySelectorAll(".ramo").length;
  const completados = document.querySelectorAll(".ramo.completado").length;
  const porcentaje = Math.round((completados / total) * 100);
  progresoBarra.style.width = `${porcentaje}%`;
  progresoTexto.textContent = `${porcentaje}%`;
}

Object.entries(malla).forEach(([semestre, ramos]) => {
  const divSemestre = document.createElement("div");
  divSemestre.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  divSemestre.appendChild(titulo);

  ramos.forEach(ramo => {
    const divRamo = document.createElement("div");
    divRamo.className = "ramo";
    divRamo.textContent = ramo;

    // Cargar estado desde localStorage
    if (estado[ramo]) {
      divRamo.classList.add("completado");
    }

    divRamo.onclick = () => {
      divRamo.classList.toggle("completado");
      estado[ramo] = divRamo.classList.contains("completado");
      guardarEstado();
      calcularProgreso();
    };

    divSemestre.appendChild(divRamo);
  });

  contenedor.appendChild(divSemestre);
});

calcularProgreso();
