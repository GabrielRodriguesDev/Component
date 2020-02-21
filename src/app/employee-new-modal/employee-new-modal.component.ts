import { Component, OnInit, ElementRef } from '@angular/core';
import {Employee, EmployeeService} from '../employee.service'

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl:'./employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {
  
  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
};


constructor( private element: ElementRef, private employeeService: EmployeeService)/*Passando o pegador de referencia do DOM*/{

   }


  input: HTMLElement = this.element.nativeElement.input

  ngOnInit() {}


    
    private getDivModal(): HTMLElement {

      const nativeElemet: HTMLElement = this.element.nativeElement //Pegando a instacia do elemento DOM
      return nativeElemet.firstChild .firstChild as HTMLElement /*Pegando o primeiro filho da instacia do DOM, 
      pois estamos passando um componente nessa instancia, e temos que pegar algo dentro dele,
      o primeiro filho (MODAL), por isso o firstChild */
  }

  hide(){
    const divModal = this.getDivModal()
    $(divModal).modal('hide')
  }

  show(){
    const divModal = this.getDivModal()
    $(divModal).modal('show');/*Pegando a instancia do Modal criada antes, 
    passando ela com os parametros de visualização do Modal do Boostrap */
  }


  addEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.hide()
    console.log('Cai aqui')
  }

}
