"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
var Plataforma = /** @class */ (function () {
    function Plataforma(nombre, logo, descripcion, empresaPatrocinadora) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresaPatrocinadora = empresaPatrocinadora;
        this.canales = [];
    }
    Plataforma.prototype.agregarCanal = function (canal) {
        this.canales.push(canal);
    };
    Plataforma.prototype.mostrarDetalle = function () {
        console.log("Detalles de la plataforma:");
        console.log("Nombre:", this.nombre);
        console.log("Logo:", this.logo);
        console.log("Descripción:", this.descripcion);
        console.log("Empresa Patrocinadora:", this.empresaPatrocinadora);
    };
    Plataforma.prototype.mostrarListadoCanales = function () {
        console.log("Listado de canales de la plataforma", this.nombre + ":");
        for (var _i = 0, _a = this.canales; _i < _a.length; _i++) {
            var canal = _a[_i];
            console.log("Nombre:", canal.nombre);
        }
    };
    return Plataforma;
}());
exports.Plataforma = Plataforma;
