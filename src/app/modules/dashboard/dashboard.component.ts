import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiHttpServiceService } from 'src/app/api-http-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  url = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';
  displayedColumns: string[] = ['id', 'name', 'email', 'contact', 'age', 'dob', 'salary', 'address'];
  dataSource : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private configService: ApiHttpServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData = () => {
    this.configService.get(this.url).subscribe(data=> {
      console.log(data);
      let universityData: any = data;
      let tableData =  new MatTableDataSource(universityData);
      this.dataSource = tableData;
      this.dataSource.paginator = this.paginator;
    });
  }
}

