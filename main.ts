import {Aprendiz, NivelEducativo} from './aprendiz.js';

export const ap = new Aprendiz("Juan Pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSTGRADO);

let apredizTable: HTMLElement = document.getElementById("aprendiz")!; //El elemento no es nulo no hay riesgo de que sea nulo porque ya existe

mostrarDatosAprendiz(ap);

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