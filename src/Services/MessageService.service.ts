import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  showWarning(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 1000, 
      panelClass: ['warning-bar']
    });
  }

  showSucces(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 1000, 
      panelClass: ['Success-bar']
    });
  }
}
