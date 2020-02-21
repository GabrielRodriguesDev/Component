import { Component, OnInit } from '@angular/core';
import {Employee,EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }



}
