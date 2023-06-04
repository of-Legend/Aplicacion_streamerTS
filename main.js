"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plataforma_1 = require("./Plataforma");
var Canal_1 = require("./Canal");
var Streamer_1 = require("./Streamer");
// 1. Mostrar listado de plataformas (crea dos plataformas)
var plataforma1 = new Plataforma_1.Plataforma("Plataforma 11", "Logo 1", "Descripción 1", "Empresa 1");
var plataforma2 = new Plataforma_1.Plataforma("Plataforma 2", "Logo 2", "Descripción 2", "Empresa 2");
var plataformas = [plataforma1, plataforma2];
console.log("Listado de plataformas:");
for (var _i = 0, plataformas_1 = plataformas; _i < plataformas_1.length; _i++) {
    var plataforma = plataformas_1[_i];
    console.log("- Nombre: " + plataforma.nombre);
}
// 2. Mostrar los detalles de la plataforma
//console.log("\nDetalles de la
// 3. Mostrar el listado de canales de esa plataforma (crea dos canales por cada plataforma)
var canal1Plataforma1 = new Canal_1.Canal("Canal 1 Plataforma 1", "Banner 1", "Streamer 1", "Descripción 1");
var canal2Plataforma1 = new Canal_1.Canal("Canal 2 Plataforma 1", "Banner 2", "Streamer 2", "Descripción 2");
var canal1Plataforma2 = new Canal_1.Canal("Canal 1 Plataforma 2", "Banner 1", "Streamer 1", "Descripción 1");
var canal2Plataforma2 = new Canal_1.Canal("Canal 2 Plataforma 2", "Banner 2", "Streamer 2", "Descripción 2");
plataforma1.agregarCanal(canal1Plataforma1);
plataforma1.agregarCanal(canal2Plataforma1);
plataforma2.agregarCanal(canal1Plataforma2);
plataforma2.agregarCanal(canal2Plataforma2);
console.log("\nListado de canales de la plataforma " + plataforma1.nombre + ":");
plataforma1.mostrarListadoCanales();
// 4. Mostrar el detalle de cada canal
console.log("\nDetalles de cada canal de la plataforma " + plataforma1.nombre + ":");
canal1Plataforma1.mostrarDetalle();
canal2Plataforma1.mostrarDetalle();
// 5. Mostrar el listado de streamers (crear dos streamers)
var streamer1 = new Streamer_1.Streamer("Streamer 1", "Descripción 1", ["Red Social 1", "Red Social 2"]);
var streamer2 = new Streamer_1.Streamer("Streamer 2", "Descripción 2", ["Red Social 3", "Red Social 4"]);
var streamers = [streamer1, streamer2];
console.log("\nListado de streamers:");
for (var _a = 0, streamers_1 = streamers; _a < streamers_1.length; _a++) {
    var streamer = streamers_1[_a];
    console.log("- Nombre: " + streamer.nombre);
}
// 6. Ver detalle de streamer
console.log("\nDetalle del streamer " + streamer1.nombre + ":");
streamer1.mostrarDetalle();
// 7. Mostrar el listado de streamer
console.log("\nListado de streamers:");
for (var _b = 0, streamers_2 = streamers; _b < streamers_2.length; _b++) {
    var streamer = streamers_2[_b];
    console.log("- Nombre: " + streamer.nombre);
    console.log(" Descripción: " + streamer.descripcion);
    console.log(" Redes Sociales: " + streamer.redesSociales.join(", "));
}
// 8. Mostrar el listado de un stream (asumiendo que cada streamer tiene una lista de streams)
console.log("\nListado de streams del streamer " + streamer1.nombre + ":");
// Agrega la lógica para mostrar el listado de streams de un streamer en particular
