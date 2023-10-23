import { Data } from "./data.js";
var seriesTable = document.getElementById("series");
mostrarSeries(Data);
function mostrarSeries(datos) {
    var average = 0;
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, datos_1 = datos; _i < datos_1.length; _i++) {
        var serie = datos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.orden, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        average += serie.seasons;
    }
    seriesTable.appendChild(seriesTbody);
    var h2Element = document.createElement("h2");
    h2Element.textContent = "Promedio de temporadas: ".concat(average / datos.length);
    document.body.appendChild(h2Element);
}
