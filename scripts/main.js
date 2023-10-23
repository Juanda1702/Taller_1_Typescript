import { Data } from "./data.js";
var seriesTable = document.getElementById("series");
var averageLabel = document.getElementById("average");
mostrarSeries(Data);
function mostrarSeries(datos) {
    var average = 0;
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, datos_1 = datos; _i < datos_1.length; _i++) {
        var serie = datos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(serie.orden, "</th>\n        <td style=\"color: blue; text-decoration: underline;\">").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        average += serie.seasons;
    }
    seriesTable.appendChild(seriesTbody);
    var pElement = document.createElement("p");
    pElement.textContent = "Promedio de temporadas: ".concat(average / datos.length);
    averageLabel.appendChild(pElement);
}
function mostrarInfo(serie) {
    var serieInfo = document.getElementById('info');
    if (serieInfo) {
        var cardInfo = "<div class=\"card\">\n                            <img src=".concat(serie.image, " class=\"card-img-top\">\n                                <div class=\"card-body\">\n                                <h2 class=\"card-title\">").concat(serie.name, "</h5>\n                                <p class=\"card-text\">").concat(serie.description, "</p>\n                                <a href=\"").concat(serie.link, "\" class=\"btn btn-primary\">Ir a la web</a>\n                            </div>\n                        </div>");
        serieInfo.innerHTML = cardInfo;
    }
}
var seriesNombres = document.querySelectorAll('#series td:nth-child(2)');
seriesNombres.forEach(function (nombre, index) {
    nombre.addEventListener('click', function () {
        mostrarInfo(Data[index]);
    });
});
