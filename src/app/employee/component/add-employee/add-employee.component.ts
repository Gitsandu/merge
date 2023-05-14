import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { JournalEntry } from 'src/app/services/JournalEntry.service';
import { Guid } from 'guid-typescript';
import { Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  @ViewChild('addForm') addForm!:NgForm
   
  data= {
    "description": "",
      "classification": "",
      "sharedwith": "",
      "bussinessUnit": "",
      "id": 0,
      "createdBy": Guid.parse("00000000-0000-0000-0000-000000000000"),
      "updatedBy": Guid.parse("00000000-0000-0000-0000-000000000000"),
      "updatedDate": new Date(),
      "createdDate": new Date(),
      "deleted": Boolean
  }

  constructor(private http: HttpClient, private authService: MsalService,  
    private journalEntryService: JournalEntry) {

  }

  

  
  
  add(ele:any) {
 console.log([ele]);
 
      this.journalEntryService.create([ele]).subscribe((response:any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    
  }


}
