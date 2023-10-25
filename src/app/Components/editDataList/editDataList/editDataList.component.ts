import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeServicesQualaService } from 'src/Services/homeServicesQuala.service';
import { MonedaInformation } from '../../../Interfaces/MonedaInformation';
import { DatosInformacionClass } from 'src/app/Class/datosInformacionClass';

@Component({
  selector: 'app-editDataList',
  templateUrl: './editDataList.component.html',
  styleUrls: ['./editDataList.component.css']
})
export class EditDataListComponent implements OnInit {
  @Input('dataPersonEdit') dataPersonEdit!: DatosInformacionClass;
  @Output() editDataEmitter = new EventEmitter<any>();
  listMonedas: MonedaInformation[] | undefined;

  constructor(private HomeServicesQualaService: HomeServicesQualaService) { }

  ngOnInit() {
    this.getDataMoneda();
  }

  getDataMoneda(){
    this.HomeServicesQualaService.getDataMoneda().toPromise().then((resp) => {
      this.listMonedas = resp;
      const selectedMoneda = resp?.find(x => x.nombre === this.dataPersonEdit?.moneda);
      this.dataPersonEdit!.monedaCode = Number(selectedMoneda?.id);
    });
  }

  cerrarEdicion(){
    this.editDataEmitter.emit(false)
  }

  guardarEdicion(){
    this.editDataEmitter.emit(this.dataPersonEdit);
  }
}
