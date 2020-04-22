import { Component } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogData } from './models/DialogData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DialogBoxExample';
  healthCardNumber='0122-212-332-FF';
  cardExpiryDate='2022/02/06';
  name='LUIS PEDRO GONZALOS';
  gender='Male';
  DOB='1977/06/23';

  constructor(private dialog : MatDialog){}

  openDialog() :void
  {
    let dialogRef=this.dialog.open(DialogContentComponent,{
      data:
      {
        healthCardNumber:this.healthCardNumber,
        cardExpiryDate:this.cardExpiryDate,
        name:this.name,
        gender:this.gender,
        DOB:this.DOB
      },
      width:'50%'
    });

    //dialogbox is closed
    dialogRef.afterClosed().subscribe(result =>{
      console.log("Patient Name : "+ result.name + " Added Successfuly")
    })
  }
 
}
