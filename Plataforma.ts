import { Canal } from './Canal';
export class Plataforma {
    nombre: string;
    logo: string;
    descripcion: string;
    empresaPatrocinadora: string;
    canales: Canal[];
  
    constructor(nombre: string, logo: string, descripcion: string, empresaPatrocinadora: string) {
      this.nombre = nombre;
      this.logo = logo;
      this.descripcion = descripcion;
      this.empresaPatrocinadora = empresaPatrocinadora;
      this.canales = [];
    }
  
    agregarCanal(canal: Canal): void {
      this.canales.push(canal);
    }
  
    mostrarDetalle(): void {
      console.log("Detalles de la plataforma:");
      console.log("Nombre:", this.nombre);
      console.log("Logo:", this.logo);
      console.log("Descripción:", this.descripcion);
      console.log("Empresa Patrocinadora:", this.empresaPatrocinadora);
    }
  
    mostrarListadoCanales(): void {
      console.log("Listado de canales de la plataforma", this.nombre + ":");
      for (const canal of this.canales) {
        console.log("Nombre:", canal.nombre);
      }
    }
  }
  