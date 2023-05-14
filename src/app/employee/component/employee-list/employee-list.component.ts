import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MsalService } from '@azure/msal-angular';
import { JournalEntry } from 'src/app/services/JournalEntry.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component'; 
import { Guid } from 'guid-typescript';
import { DetailEmployeeComponent } from '../detail-employee/detail-employee.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  

  

  dataSource:any;

  displayedColumns:string[]=['i','a','b','c','k','l','m']

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

  constructor(private dialog: MatDialog,private http: HttpClient, 
    private authService: MsalService, private journalEntryService: JournalEntry) {

  }

  ngOnInit() {
    this.getAll();
  }

  add(){
    this.dialog.open(AddEmployeeComponent,{ disableClose: true, height:'520px',width:'600px'});
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }

  edit(ele:any) {
    const dialogRef= this.dialog.open(EditEmployeeComponent,{ disableClose: true,
    data:ele, height:'420px',width:'500px' });
    this.dialog.afterAllClosed.subscribe((open: any) => {
      this.getAll();
    });
  }
  
  detail(ele: any) {
    this.dialog.open(DetailEmployeeComponent, { disableClose: true, data: ele ,  height:'420px',width:'600px' });
    this.dialog.afterAllClosed.subscribe(() => {
      this.getAll();
    });
  }

  getAll() {
   
      this.journalEntryService.getAll().subscribe((response:any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data);
      }, (error) => {
        console.log(error);
      });
}

update(ele:any) {
  this.journalEntryService.update([ele]).subscribe((response:any) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}

delete(ele: number): void {
  const confirmed = confirm("Are you sure you want to delete this item?");

  if (confirmed) {
    console.log(ele);

    this.journalEntryService.delete([ele]).subscribe(
      (response) => {
        console.log(response);
        this.getAll();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}


}
