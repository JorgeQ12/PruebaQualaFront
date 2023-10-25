import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataListQualaComponent } from './Components/dataListQuala/dataListQuala/dataListQuala.component';
import { EditDataListComponent } from './Components/editDataList/editDataList/editDataList.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddListDataQualaComponent } from './Components/addListDataQuala/addListDataQuala/addListDataQuala.component';
@NgModule({
  declarations: [
    AppComponent,
    DataListQualaComponent,
    EditDataListComponent,
    AddListDataQualaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
