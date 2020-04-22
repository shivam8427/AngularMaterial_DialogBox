import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { DialogData } from '../models/DialogData';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent  {

  constructor(@Inject(MAT_DIALOG_DATA) private data:DialogData , private _snackbar :MatSnackBar) { 
    console.log("Data Injected"+ this.data.healthCardNumber)
  }

  addPatient()
  {
    this._snackbar.open("Patient added successfully","ok",{
      duration :1000
    });
    
  }
 

}
