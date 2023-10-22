import { Data } from "./data";
import { Serie } from "./serie";

let datos = Data;
let seriesTable:HTMLElement = document.getElementById("series")!;
console.log(datos);

mostrarSeries(datos);

function mostrarSeries(datos: Serie[]):void {
    let average:number = 0;
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let serie of datos){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<th scope="row">${serie.orden}</th>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`
        seriesTbody.appendChild(trElement);
        average+=serie.seasons;
    }
    seriesTable.appendChild(seriesTbody);
    let h2Element: HTMLElement = document.createElement("h2");
    h2Element.textContent=`Seasons average: ${average/datos.length}`;
    document.body.appendChild(h2Element);
}

