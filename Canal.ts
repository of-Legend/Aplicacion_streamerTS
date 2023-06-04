export class Canal {
    nombre: string;
    banner: string;
    streamer: string;
    descripcion: string;
  
    constructor(nombre: string, banner: string, streamer: string, descripcion: string) {
      this.nombre = nombre;
      this.banner = banner;
      this.streamer = streamer;
      this.descripcion = descripcion;
    }
  
    mostrarDetalle(): void {
      console.log("Detalles del canal:");
      console.log("Nombre:", this.nombre);
      console.log("Banner:", this.banner);
      console.log("Streamer:", this.streamer);
      console.log("Descripción:", this.descripcion);
    }
  }
  