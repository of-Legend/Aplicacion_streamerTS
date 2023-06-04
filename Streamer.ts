export class Streamer {
    nombre: string;
    descripcion: string;
    redesSociales: string[];
  
    constructor(nombre: string, descripcion: string, redesSociales: string[]) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.redesSociales = redesSociales;
    }
  
    mostrarDetalle(): void {
      console.log("Detalles del streamer:");
      console.log("Nombre:", this.nombre);
      console.log("Descripción:", this.descripcion);
      console.log("Redes Sociales:", this.redesSociales.join(", "));
    }
  }
  