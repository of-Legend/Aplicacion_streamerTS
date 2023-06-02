"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
var Plataforma = /** @class */ (function () {
    function Plataforma(nombre, logo, descripcion, empresaPatrocinadora, canales) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresaPatrocinadora = empresaPatrocinadora;
        this.canales = canales;
    }
    Plataforma.prototype.mostrarListadoCanales = function () {
        console.log("Canales disponibles en ".concat(this.nombre, ":"));
        for (var _i = 0, _a = this.canales; _i < _a.length; _i++) {
            var canal = _a[_i];
            console.log("Nombre:", canal.nombre);
            console.log("Banner:", canal.banner);
            console.log("Streamer:", canal.streamer);
            console.log("Descripción:", canal.descripcion);
            console.log("-----------------------------");
        }
    };
    return Plataforma;
}());
exports.Plataforma = Plataforma;
