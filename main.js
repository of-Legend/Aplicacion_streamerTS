"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plataforma_1 = require("./Plataforma");
var Canal_1 = require("./Canal");
var Streamer_1 = require("./Streamer");
// 1. Mostrar listado de plataformas 
console.log("\n************************************************");
var plataforma1 = new Plataforma_1.Plataforma("Memetflix", "Logo Memetflix", " Plataforma de Streaming  y mucho mas...", "Empresa 1");
var plataforma2 = new Plataforma_1.Plataforma("Bisney + 2", "Logo Bisney", "La Mejor plataforma de streaming ", "Empresa 2");
var plataformas = [plataforma1, plataforma2];
console.log("Listado de plataformas:");
for (var _i = 0, plataformas_1 = plataformas; _i < plataformas_1.length; _i++) {
    var plataforma = plataformas_1[_i];
    console.log("- Nombre: " + plataforma.nombre);
    console.log("- Descripcion: " + plataforma.descripcion);
}
console.log("\n************************************************");
// 3. Mostrar el listado de canales de esa plataforma 
console.log("\n************************************************");
var canal1Plataforma1 = new Canal_1.Canal("Canal GBO Plataforma Memetflix ", "Banner 1", "Streamer Victor Faci", "Peliculas y series Variadas");
var canal2Plataforma1 = new Canal_1.Canal("Canal CMM Plataforma Memetflix ", "Banner 2", "Con_Variza", "24 horas de noticias");
var canal1Plataforma2 = new Canal_1.Canal("Canal 1 Plataforma Bisney + 2", "Banner 1", "Streamer A-Z", "Programas par niños y adolecentes");
var canal2Plataforma2 = new Canal_1.Canal("Canal Beta Plataforma Bisney + 2", "Banner 2", "Biblo Xxl", "Historia y documentales");
plataforma1.agregarCanal(canal1Plataforma1);
plataforma1.agregarCanal(canal2Plataforma1);
plataforma2.agregarCanal(canal1Plataforma2);
plataforma2.agregarCanal(canal2Plataforma2);
plataforma1.mostrarListadoCanales();
plataforma2.mostrarListadoCanales();
console.log("\n************************************************");
// 4. Mostrar el detalle de cada canal
console.log("\n************************************************");
console.log("\nDetalles de cada canal de la plataforma " + plataforma1.nombre + ":");
canal1Plataforma1.mostrarDetalle();
canal2Plataforma1.mostrarDetalle();
canal1Plataforma2.mostrarDetalle();
canal2Plataforma2.mostrarDetalle();
console.log("\n************************************************");
// 5. Mostrar el listado de streamers 
console.log("\n************************************************");
var streamer1 = new Streamer_1.Streamer("Streamer Victor Faci", " joven y contemporaneo, aclamado por la critica. Muchos seguidores", ["Fasebook", "Twicht"]);
var streamer2 = new Streamer_1.Streamer("Con_Variza", "Voz maravillosa, una stremear en ascenso.", ["Tviter", "Iutube"]);
var streamer3 = new Streamer_1.Streamer("A-Z", "Es un streamer apasionado, esta inovando constantemenete.", ["hi5", "jick Jock"]);
var streamer4 = new Streamer_1.Streamer("A-Biblo Xxl", "Biblo xxl es una biblioteca andante. Lo conoce de todo.", ["histagram", "Gelegram"]);
var streamers = [streamer1, streamer2, streamer3, streamer4];
console.log("\nListado de streamers:");
for (var _a = 0, streamers_1 = streamers; _a < streamers_1.length; _a++) {
    var streamer = streamers_1[_a];
    console.log("- Nombre: " + streamer.nombre);
}
console.log("\n************************************************");
// 6. Ver detalle de streamer
console.log("\n************************************************");
console.log("\nDetalle del streamer " + streamer1.nombre + ":");
streamer1.mostrarDetalle();
console.log("\nDetalle del streamer " + streamer2.nombre + ":");
streamer2.mostrarDetalle();
console.log("\nDetalle del streamer " + streamer3.nombre + ":");
streamer3.mostrarDetalle();
console.log("\nDetalle del streamer " + streamer4.nombre + ":");
streamer4.mostrarDetalle();
console.log("\n************************************************");
// 7. Mostrar el listado de streamer
console.log("\n************************************************");
console.log("\nListado de streamers:");
for (var _b = 0, streamers_2 = streamers; _b < streamers_2.length; _b++) {
    var streamer = streamers_2[_b];
    console.log("- Nombre: " + streamer.nombre);
    console.log(" Descripción: " + streamer.descripcion);
    console.log(" Redes Sociales: " + streamer.redesSociales.join(", "));
}
console.log("\n************************************************");
