import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosInformacionDTO } from 'src/app/Interfaces/DatosInformacionDTO';
import { Observable } from 'rxjs/internal/Observable';
import { MonedaInformation } from 'src/app/Interfaces/MonedaInformation';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesQualaService {

  private UrlBack = "https://localhost:44379/"
  private apiBack = "api/Quala/";
  constructor(private http: HttpClient){}

  getDataQuala(): Observable<DatosInformacionDTO[]> {
    return this.http.get<DatosInformacionDTO[]>(this.UrlBack + this.apiBack + "GetDataQuala");
  }

  getDataMoneda(): Observable<MonedaInformation[]> {
    return this.http.get<MonedaInformation[]>(this.UrlBack + this.apiBack + "GetDataMoneda");
  }

  InsertDataQuala(cliente: any){
    return this.http.post(this.UrlBack+this.apiBack+"InsertDataQuala",cliente);
  }

  updateDataQuala(editDataDTO: DatosInformacionDTO){
    return this.http.put(this.UrlBack + this.apiBack+"editDataQuala",editDataDTO);
  }
  DeleteInfoQuala(idCodePerson: number) {
    const url = `${this.UrlBack}${this.apiBack}DeleteInfoQuala/${idCodePerson}`;
    return this.http.delete(url);
  }
  
  

}
