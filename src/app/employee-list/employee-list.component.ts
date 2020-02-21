import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild('newModal') //ViewChild é responsavel por pegar a referencia do elemento declarado
  employeeNewModal: EmployeeNewModalComponent//Passando a classe do Modal como o "tipo", para ter acesso ao seus métodos


  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    
    
  }

  //getSalaryColor(employee) {
  //  return employee.salary > 20000 ? 'green' : null;
 // }


  
  openNewModal(){
    this.employeeNewModal.show()//Iniciando o model a partir do clique do botão, executando o método "show()",
    //Que faz parte da instancia do EmployeNewModalComponent

    
  }
}
