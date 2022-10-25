import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Practicas escenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingenieria de software para la web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, false, 2020),
    new Curso("Principios de diseño y arquitectura", 30, 75, true, 2020)
];
export var ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSTGRADO, cursos);
//El elemento no es nulo no hay riesgo de que sea nulo porque ya existe
var apredizTable = document.getElementById("aprendiz");
//El elemento no es nulo no hay riesgo de que sea nulo porque ya existe
var estadisticasTable = document.getElementById("estadisticas");
//El elemento no es nulo no hay riesgo de que sea nulo porque ya existe
var cursosTable = document.getElementById("cursos");
//El elemento no es nulo no hay riesgo de que sea nulo porque ya existe
var btnFiltro = document.getElementById("boton-filtro");
//El elemento no es nulo no hay riesgo de que sea nulo porque ya existe, la expresión <HTMLInputElement> es un casteo
var textoBusqueda = document.getElementById("texto-busqueda");
//btnFiltro.onclick = filtrarPorNombre; //Una forma de hacerlo con una function normal
btnFiltro.onclick = function () {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    //Elimina el tbody que hay actualmente cargado en la pagina
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
}; //Una forma de hacerlo con una funcion flecha
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
function filtrarPorNombre() {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    //Elimina el tbody que hay actualmente cargado en la pagina
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
}
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\"></td></tr>\n    <tr><td>Nombres: </td><td>" + aprendiz.nombres + "</td></tr>  \n    <tr><td>Apellidos: </td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel educativo: </td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad: </td><td>" + aprendiz.edad + "</td></tr>\n    ";
    apredizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados</b></td><td>" + numeroCertificados + "</td>";
    estadisticasTable.appendChild(trElement);
}
function mostrarCursosAprendiz(cursos) {
    var cursosTBody = document.createElement("tbody");
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + curso.nombre + "</td>\n        <td>" + curso.horas + "</td>\n        <td>" + curso.calificacion + "</td>\n        <td>" + curso.certificado + "</td>\n        <td>" + curso.anio + "</td>\n        ";
        cursosTBody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTBody);
}
