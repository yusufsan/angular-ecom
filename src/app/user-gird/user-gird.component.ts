import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { userdataModel} from '../userData/userdata.model'
import { RegisterService } from '../service/register.service'
import {Router } from '@angular/router'

@Component({
  selector: 'app-user-gird',
  templateUrl: './user-gird.component.html',
  styleUrls: ['./user-gird.component.css']
})
export class UserGirdComponent implements AfterViewInit {

  

  displayedColumns: string[] = ['userName', 'emailid', 'mobileNo' ,'action'];
  dataSource: MatTableDataSource<userdataModel>;


  constructor( private RegisterService: RegisterService , private  Router: Router) {   
    this.dataSource = new MatTableDataSource(this.RegisterService.userdataModelArr);
    this.RegisterService.loginCheck =  false;
  }

  ngAfterViewInit() {
  }

  EditRow(row){

    this.Router.navigate(['Register'], { queryParams: { data: row.userName }})
    
  }
  DeleteRow(row){
    let removeData = [];
     removeData = this.RegisterService.userdataModelArr.filter(element => {
      return element.userName != row.userName      
    });
    this.dataSource = new MatTableDataSource(removeData);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

