import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/Services/MessageService.service';
import { HomeServicesQualaService } from 'src/Services/homeServicesQuala.service';
import { SaveDatosInformacionDTO } from 'src/app/Class/SaveDatosInformacionDTO';
import { MonedaInformation } from 'src/app/Interfaces/MonedaInformation';

@Component({
  selector: 'app-addListDataQuala',
  templateUrl: './addListDataQuala.component.html',
  styleUrls: ['./addListDataQuala.component.css']
})
export class AddListDataQualaComponent implements OnInit {
  @Output() editDataEmitter = new EventEmitter<any>();
  listMonedas: MonedaInformation[] | undefined;
  saveDataForm: FormGroup;
  constructor(private HomeServicesQualaService: HomeServicesQualaService, private messageService: MessageService) {
    this.saveDataForm = new FormGroup({
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      direccion: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      identificacion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      moneda: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
    this.getDataMoneda();
  }

  getDataMoneda(){
    this.HomeServicesQualaService.getDataMoneda().toPromise().then((resp) => {
      this.listMonedas = resp;
    });
  }

  saveClose(){
    this.editDataEmitter.emit(false)
  }

  saveData(){
    if(this.saveDataForm.valid){
      this.HomeServicesQualaService.InsertDataQuala(this.saveDataForm.value).toPromise().then(x => {
        this.messageService.showSucces('Guardado correctamente')
        this.editDataEmitter.emit(false)
      });
      
    }else{
      this.messageService.showWarning('Por Favor verifique los campos');
    }
  }

}
