export class SaveDatosInformacionDTO {
    descripcion: string;
    direccion: string;
    identificacion: string;
    fechaCreacion: Date;
    moneda: string;

    constructor(item: SaveDatosInformacionDTO){
        this.descripcion = item?.descripcion ?? '',
        this.direccion = item?.direccion ?? '',
        this.identificacion = item?.identificacion ?? '',
        this.moneda = item?.moneda ?? '',
        this.fechaCreacion = item?.fechaCreacion ?? Date.now()
    }
}
