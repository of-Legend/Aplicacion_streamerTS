import { Plataforma } from './Plataforma';
import { Canal } from './Canal';

const canal1 = new Canal("Canal jose", "banner1.png", "Streamer 1", "Descripción del canal 1");
const canal2 = new Canal("Canal 2", "banner2.png", "Streamer 2", "Descripción del canal 2");

const plataforma = new Plataforma("Plataforma 1", "logo1.png", "Descripción de la plataforma 1", "Empresa 1", [canal1, canal2]);

plataforma.mostrarListadoCanales();
