import { Plataforma } from "./Plataforma";
import { Canal } from "./Canal";
import { Streamer } from "./Streamer";
import Stream from './Stream'; 



// 1. Mostrar listado de plataformas 
console.log("\n************************************************")

const plataforma1 = new Plataforma("Memetflix", "Logo Memetflix", " Plataforma de Streaming  y mucho mas...", "Empresa 1");
const plataforma2 = new Plataforma("Bisney + 2", "Logo Bisney", "La Mejor plataforma de streaming ", "Empresa 2");

const plataformas: Plataforma[] = [plataforma1, plataforma2];

console.log("Listado de plataformas:");
for (const plataforma of plataformas) {
  console.log("- Nombre: " + plataforma.nombre);
  console.log("- Descripcion: " + plataforma.descripcion);

}

console.log("\n************************************************")

// 3. Mostrar el listado de canales de esa plataforma 
console.log("\n************************************************")

const canal1Plataforma1 = new Canal("Canal GBO Plataforma Memetflix ", "Banner 1", "Streamer Victor Faci", "Peliculas y series Variadas");
const canal2Plataforma1 = new Canal("Canal CMM Plataforma Memetflix ", "Banner 2", "Con_Variza", "24 horas de noticias");

const canal1Plataforma2 = new Canal("Canal 1 Plataforma Bisney + 2", "Banner 1", "Streamer A-Z", "Programas par niños y adolecentes");
const canal2Plataforma2 = new Canal("Canal Beta Plataforma Bisney + 2", "Banner 2", "Biblo Xxl", "Historia y documentales");

plataforma1.agregarCanal(canal1Plataforma1);
plataforma1.agregarCanal(canal2Plataforma1);

plataforma2.agregarCanal(canal1Plataforma2);
plataforma2.agregarCanal(canal2Plataforma2);


plataforma1.mostrarListadoCanales();


plataforma2.mostrarListadoCanales();
console.log("\n************************************************")


// 4. Mostrar el detalle de cada canal
console.log("\n************************************************")

console.log("\nDetalles de cada canal de la plataforma " + plataforma1.nombre + ":");
canal1Plataforma1.mostrarDetalle();
canal2Plataforma1.mostrarDetalle();
canal1Plataforma2.mostrarDetalle();
canal2Plataforma2.mostrarDetalle();


console.log("\n************************************************")


// 5. Mostrar el listado de streamers 
console.log("\n************************************************")

const streamer1 = new Streamer("Streamer Victor Faci", " joven y contemporaneo, aclamado por la critica. Muchos seguidores", ["Fasebook", "Twicht"]);
const streamer2 = new Streamer("Con_Variza", "Voz maravillosa, una stremear en ascenso.", ["Tviter", "Iutube"]);
const streamer3 = new Streamer("A-Z", "Es un streamer apasionado, esta inovando constantemenete.", ["hi5", "jick Jock"]);
const streamer4 = new Streamer("A-Biblo Xxl", "Biblo xxl es una biblioteca andante. Lo conoce de todo.", ["histagram", "Gelegram"]);

const streamers: Streamer[] = [streamer1, streamer2,streamer3,streamer4];

console.log("\nListado de streamers:");
for (const streamer of streamers) {
console.log("- Nombre: " + streamer.nombre);
}
console.log("\n************************************************")

// 6. Ver detalle de streamer
console.log("\n************************************************")
console.log("\nDetalle del streamer " + streamer1.nombre + ":");
streamer1.mostrarDetalle();

console.log("\nDetalle del streamer " + streamer2.nombre + ":");
streamer2.mostrarDetalle();

console.log("\nDetalle del streamer " + streamer3.nombre + ":");
streamer3.mostrarDetalle();
console.log("\nDetalle del streamer " + streamer4.nombre + ":");
streamer4.mostrarDetalle();
console.log("\n************************************************")



// 7. Mostrar el listado de streamer
console.log("\n************************************************")

console.log("\nListado de streamers:");
for (const streamer of streamers) {
console.log("- Nombre: " + streamer.nombre);
console.log(" Descripción: " + streamer.descripcion);
console.log(" Redes Sociales: " + streamer.redesSociales.join(", "));
}

console.log("\n************************************************")

