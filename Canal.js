"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canal = void 0;
var Canal = /** @class */ (function () {
    function Canal(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }
    Canal.prototype.mostrarDetalle = function () {
        console.log("Detalles del canal:");
        console.log("Nombre:", this.nombre);
        console.log("Banner:", this.banner);
        console.log("Streamer:", this.streamer);
        console.log("Descripción:", this.descripcion);
    };
    return Canal;
}());
exports.Canal = Canal;
