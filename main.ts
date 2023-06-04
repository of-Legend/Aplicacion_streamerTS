import { Plataforma } from "./Plataforma";
import { Canal } from "./Canal";
import { Streamer } from "./Streamer";

// 1. Mostrar listado de plataformas (crea dos plataformas)
const plataforma1 = new Plataforma("Plataforma 11", "Logo 1", "Descripción 1", "Empresa 1");
const plataforma2 = new Plataforma("Plataforma 2", "Logo 2", "Descripción 2", "Empresa 2");

const plataformas: Plataforma[] = [plataforma1, plataforma2];

console.log("Listado de plataformas:");
for (const plataforma of plataformas) {
  console.log("- Nombre: " + plataforma.nombre);
}

// 2. Mostrar los detalles de la plataforma
//console.log("\nDetalles de la
// 3. Mostrar el listado de canales de esa plataforma (crea dos canales por cada plataforma)
const canal1Plataforma1 = new Canal("Canal 1 Plataforma 1", "Banner 1", "Streamer 1", "Descripción 1");
const canal2Plataforma1 = new Canal("Canal 2 Plataforma 1", "Banner 2", "Streamer 2", "Descripción 2");

const canal1Plataforma2 = new Canal("Canal 1 Plataforma 2", "Banner 1", "Streamer 1", "Descripción 1");
const canal2Plataforma2 = new Canal("Canal 2 Plataforma 2", "Banner 2", "Streamer 2", "Descripción 2");

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
const streamer1 = new Streamer("Streamer 1", "Descripción 1", ["Red Social 1", "Red Social 2"]);
const streamer2 = new Streamer("Streamer 2", "Descripción 2", ["Red Social 3", "Red Social 4"]);

const streamers: Streamer[] = [streamer1, streamer2];

console.log("\nListado de streamers:");
for (const streamer of streamers) {
console.log("- Nombre: " + streamer.nombre);
}

// 6. Ver detalle de streamer
console.log("\nDetalle del streamer " + streamer1.nombre + ":");
streamer1.mostrarDetalle();

// 7. Mostrar el listado de streamer
console.log("\nListado de streamers:");
for (const streamer of streamers) {
console.log("- Nombre: " + streamer.nombre);
console.log(" Descripción: " + streamer.descripcion);
console.log(" Redes Sociales: " + streamer.redesSociales.join(", "));
}

// 8. Mostrar el listado de un stream (asumiendo que cada streamer tiene una lista de streams)
console.log("\nListado de streams del streamer " + streamer1.nombre + ":");
// Agrega la lógica para mostrar el listado de streams de un streamer en particular


