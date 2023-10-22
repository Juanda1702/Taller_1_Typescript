"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
let datos = data_1.Data;
let seriesTable = document.getElementById("series");
console.log(datos);
mostrarSeries(datos);
function mostrarSeries(datos) {
    let average = 0;
    let seriesTbody = document.createElement("tbody");
    for (let serie of datos) {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${serie.orden}</th>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        average += serie.seasons;
    }
    seriesTable.appendChild(seriesTbody);
    let h2Element = document.createElement("h2");
    h2Element.textContent = `Seasons average: ${average / datos.length}`;
    document.body.appendChild(h2Element);
}
