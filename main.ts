import {Aprendiz, NivelEducativo} from './aprendiz.js';
import {Curso} from './curso.js';

let cursos = [new Curso("Practicas escenciales para el agilismo", 20, 90, true, 2019),
new Curso("Ingenieria de software para la web", 15, 99, true, 2018),
new Curso("Pruebas automatizadas", 25, 50, false, 2020),
new Curso("Principios de diseño y arquitectura", 30, 75, true, 2020)
]
export const ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSTGRADO, cursos);

//El elemento no es nulo no hay riesgo de que sea nulo porque ya existe
let apredizTable: HTMLElement = document.getElementById("aprendiz")!;
//El elemento no es nulo no hay riesgo de que sea nulo porque ya existe
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
//El elemento no es nulo no hay riesgo de que sea nulo porque ya existe
let cursosTable: HTMLElement = document.getElementById("cursos")!;
//El elemento no es nulo no hay riesgo de que sea nulo porque ya existe
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
//El elemento no es nulo no hay riesgo de que sea nulo porque ya existe, la expresión <HTMLInputElement> es un casteo
let textoBusqueda: HTMLInputElement = <HTMLInputElement> document.getElementById("texto-busqueda")!;

//btnFiltro.onclick = filtrarPorNombre; //Una forma de hacerlo con una function normal
btnFiltro.onclick = () => {
    let text: string = textoBusqueda.value;
    text = (text == null) ? "": text;
    //Elimina el tbody que hay actualmente cargado en la pagina
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(c => c.nombre.match(text));
    mostrarCursosAprendiz(cursosFiltrados);
}; //Una forma de hacerlo con una funcion flecha

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);

function filtrarPorNombre():void{
    let text: string = textoBusqueda.value;
    text = (text == null) ? "": text;
    //Elimina el tbody que hay actualmente cargado en la pagina
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(function(c){ return c.nombre.match(text);});
    mostrarCursosAprendiz(cursosFiltrados);
}

function mostrarDatosAprendiz(aprendiz: Aprendiz): void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}"></td></tr>
    <tr><td>Nombres: </td><td>${aprendiz.nombres}</td></tr>  
    <tr><td>Apellidos: </td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo: </td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad: </td><td>${aprendiz.edad}</td></tr>
    `
    apredizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticas(aprendiz: Aprendiz): void{
    let numeroCertificados: number = aprendiz.darCursosCertificados();
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Cursos certificados</b></td><td>${numeroCertificados}</td>`
    estadisticasTable.appendChild(trElement);
}

function mostrarCursosAprendiz(cursos: Curso[]): void{
    let cursosTBody: HTMLElement = document.createElement("tbody");
    for(let curso of cursos)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td>${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>
        `
        cursosTBody.appendChild(trElement)
    }
    cursosTable.appendChild(cursosTBody)
}