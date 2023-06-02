import { Canal } from './Canal';

export class Plataforma {
  nombre: string;
  logo: string;
  descripcion: string;
  empresaPatrocinadora: string;
  canales: Canal[];

  constructor(nombre: string, logo: string, descripcion: string, empresaPatrocinadora: string, canales: Canal[]) {
    this.nombre = nombre;
    this.logo = logo;
    this.descripcion = descripcion;
    this.empresaPatrocinadora = empresaPatrocinadora;
    this.canales = canales;
  }

  mostrarListadoCanales(): void {
    console.log(`Canales disponibles en ${this.nombre}:`);
    for (const canal of this.canales) {
      console.log("Nombre:", canal.nombre);
      console.log("Banner:", canal.banner);
      console.log("Streamer:", canal.streamer);
      console.log("Descripción:", canal.descripcion);
      console.log("-----------------------------");
    }
  }
  
}