import { Serie } from "./serie.js";
import { Data } from "./data.js";

let seriesTable:HTMLElement = document.getElementById("series")!;
let averageLabel:HTMLElement = document.getElementById("average")!;

mostrarSeries(Data);

function mostrarSeries(datos: Serie[]): void {
    let average: number = 0;
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let serie of datos){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<th scope="row">${serie.orden}</th>
        <td style="color: blue; text-decoration: underline;">${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        average += serie.seasons;
    }
    seriesTable.appendChild(seriesTbody);
    let pElement: HTMLElement = document.createElement("p");
    pElement.textContent=`Promedio de temporadas: ${average/datos.length}`;
    averageLabel.appendChild(pElement);
}


function mostrarInfo(serie:Serie) {
    const serieInfo = document.getElementById('info');
    if (serieInfo) {
        const cardInfo = `<div class="card">
                            <img src=${serie.image} class="card-img-top">
                                <div class="card-body">
                                <h2 class="card-title">${serie.name}</h5>
                                <p class="card-text">${serie.description}</p>
                                <a href="${serie.link}" class="btn btn-primary">Ir a la web</a>
                            </div>
                        </div>`;
        serieInfo.innerHTML = cardInfo;
    }
}
const seriesNombres = document.querySelectorAll('#series td:nth-child(2)');

seriesNombres.forEach((nombre, index) => {
  nombre.addEventListener('click', () => {
    mostrarInfo(Data[index]);
  });
});

