import { Component, Inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JournalEntry } from 'src/app/services/JournalEntry.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  @ViewChild('addForm') addForm!:NgForm


  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private journalEntry: JournalEntry) {}

  update(ele:any) {
    var a = [ele];
    console.log(a);
    
    this.journalEntry.update(a).subscribe((response:any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  
  }
}
