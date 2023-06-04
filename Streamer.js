"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streamer = void 0;
var Streamer = /** @class */ (function () {
    function Streamer(nombre, descripcion, redesSociales) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
    }
    Streamer.prototype.mostrarDetalle = function () {
        console.log("Detalles del streamer:");
        console.log("Nombre:", this.nombre);
        console.log("Descripción:", this.descripcion);
        console.log("Redes Sociales:", this.redesSociales.join(", "));
    };
    return Streamer;
}());
exports.Streamer = Streamer;
