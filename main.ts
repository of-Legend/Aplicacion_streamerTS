// Mostrar Plataformas
import Plataforma from "./Plataforma";

const plataformas: Plataforma[] = []; // Aquí debes tener un array con todas las plataformas

function mostrarListadoPlataformas(): void {
  for (const plataforma of plataformas) {
    console.log(plataforma.nombre);
  }
}

mostrarListadoPlataformas();

mostrarListadoPlataformas();

