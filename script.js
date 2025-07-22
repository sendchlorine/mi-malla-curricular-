const modulos = [
  { nombre: "HTML y CSS", completado: true },
  { nombre: "JavaScript", completado: false },
  { nombre: "Git y GitHub", completado: false },
  { nombre: "React", completado: false },
  { nombre: "Bases de Datos", completado: false }
];

const contenedor = document.getElementById('malla');

modulos.forEach(mod => {
  const div = document.createElement('div');
  div.className = 'modulo' + (mod.completado ? ' completado' : '');
  div.textContent = mod.nombre;
  div.addEventListener('click', () => {
    mod.completado = !mod.completado;
    div.classList.toggle('completado');
  });
  contenedor.appendChild(div);
});
