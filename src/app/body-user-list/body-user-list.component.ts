import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-body-user-list',
  templateUrl: './body-user-list.component.html',
  styleUrls: ['./body-user-list.component.css']
})
export class BodyUserListComponent {
  data: any[] = []; //Array to save the data of Excel  
  name: string = ""; //Variable to save the name   
  result: any[] = []; //Array to save the result of the search    

  loadFile(event: any) {
    let file = event.target.files[0]; //Get the file.
    let reader = new FileReader(); //Create a reader files.
    reader.onload = (e) => { //Define a function that run when the file is upload.
      let data = (<any>e.target).result; //Get the data of the file.
      let workbook = XLSX.read(data, {type: 'binary'}); //Read the Excel
      let sheet = workbook.Sheets[workbook.SheetNames[0]]; //Get the first Excel sheet
      this.data = XLSX.utils.sheet_to_json(sheet); //Convert the Excel sheet in a JSON file.
    };
    reader.readAsBinaryString(file); //Read the file like a binary chain.
  }

  searchName() {
    this.result = this.data.filter(person => person.Name === this.name); // filtrar los datos por el nombre ingresado
  }
}
