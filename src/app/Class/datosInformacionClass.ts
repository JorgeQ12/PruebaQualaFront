export class DatosInformacionClass {
    codigo: number;
    descripcion: string;
    direccion: string;
    identificacion: string;
    fechaCreacion: Date;
    monedaCode: number;
    moneda: string;

    constructor(item: DatosInformacionClass){
        this.codigo = item?.codigo ?? 1,
        this.descripcion = item?.descripcion ?? '',
        this.direccion = item?.direccion ?? '',
        this.identificacion = item?.identificacion ?? '',
        this.moneda = item?.moneda ?? '',
        this.fechaCreacion = item?.fechaCreacion ?? Date.now(),
        this.monedaCode = item?.monedaCode ?? 1
    }
}
