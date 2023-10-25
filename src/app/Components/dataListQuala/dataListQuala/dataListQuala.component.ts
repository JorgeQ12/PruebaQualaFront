import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HomeServicesQualaService } from 'src/Services/homeServicesQuala.service';
import { DatosInformacionDTO } from '../../../Interfaces/DatosInformacionDTO';
import { MessageService } from 'src/Services/MessageService.service';
@Component({
  selector: 'app-dataListQuala',
  templateUrl: './dataListQuala.component.html',
  styleUrls: ['./dataListQuala.component.css']
})
export class DataListQualaComponent implements OnInit {
  dataInformation: DatosInformacionDTO[] | undefined ; 
  visibleEdit: boolean = false;
  visibleAdd: boolean = false;
  dataPersonEdit: any;
  constructor(private HomeServicesQualaService: HomeServicesQualaService, private messageService: MessageService) { }

  ngOnInit() {
    this.getDatalist();
  }

  getDatalist(){
    this.HomeServicesQualaService.getDataQuala().toPromise().then((resp) => this.dataInformation = resp)
  }

  EditPerson(e: any){
    this.visibleEdit = true
    this.dataPersonEdit = e;
  }

  editDataEmitterEdit(e: any){
    if(e == false){
      this.visibleEdit = false;
      this.getDatalist();
    }

    if(e != null){
      this.dataPersonEdit = {
        ...this.dataPersonEdit,
        moneda: this.dataPersonEdit.monedaCode
      }
      this.HomeServicesQualaService.updateDataQuala(this.dataPersonEdit).toPromise().then(x =>{
        this.getDatalist()
        this.visibleEdit = false;
      }).catch((error) => {
        if (error.status === 400) {
          this.messageService.showWarning(error.error);
        } else {
          console.log('Error al obtener datos:', error);
        }
      });
      
    }
  }

  editDataEmitterSave(e: any){
    if(e == false){
      this.visibleAdd = false;
      this.getDatalist();
    }
  }

  DeletePerson(code: any){
    this.HomeServicesQualaService.DeleteInfoQuala(code).toPromise().then(x =>{
      this.messageService.showSucces('Eliminado correctamente')
      this.getDatalist();
    })
  }

  openAdd(){
    this.visibleAdd = true;
  }
}
