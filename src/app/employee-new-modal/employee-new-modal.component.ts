import { Component, OnInit, ElementRef, Output } from '@angular/core';
import {Employee, EmployeeService} from '../employee.service'
import { EventEmitter } from 'protractor';

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

  @Output()//Saida de dados (De Child para Father)
  onSubmit: EventEmitter <Employee>  = new EventEmitter ()
  /*Poderiasmos dizer qual valor é o tipo do valor a ser submetido ('Enviado').
  E estamos criando uma instancia do objeto do tipo EventEmitter,
  para poder fazer o envio atráves do emit .*/


constructor( private element: ElementRef, private employeeService: EmployeeService)/*Passando o pegador de referencia do DOM*/{

   }


 

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


  addEmployee() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy) ;
    this.hide()
  }

}
