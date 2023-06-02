"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plataforma_1 = require("./Plataforma");
var Canal_1 = require("./Canal");
var canal1 = new Canal_1.Canal("Canal jose", "banner1.png", "Streamer 1", "Descripción del canal 1");
var canal2 = new Canal_1.Canal("Canal 2", "banner2.png", "Streamer 2", "Descripción del canal 2");
var plataforma = new Plataforma_1.Plataforma("Plataforma 1", "logo1.png", "Descripción de la plataforma 1", "Empresa 1", [canal1, canal2]);
plataforma.mostrarListadoCanales();
