import { HttpClient } from '@angular/common/http';
import { Component, Inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { JournalEntry } from 'src/app/services/JournalEntry.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public stag:any,
  private dialog: MatDialog,private http: HttpClient,
  private authService: MsalService, private journalEntry: JournalEntry) {
 }
  
  
  getID(ele: any) {
  var a = [ele];
  console.log(a);
   this.journalEntry.getAll().subscribe((response:any)=>{
  console.log(response);
  }, (error) =>{
  console.log(error);
   }
   );

  }
  
  
}
