import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {
  
  @Input()//Pegando o valor do component que foi solicitado
  salaryColor;

  


  

 

  constructor(private element: ElementRef) {



    setTimeout (()=>{
      const nativeElement: HTMLElement = this.element.nativeElement//Criando o acesso aos elementos nativos do DOM
      const salary = parseFloat(this.salaryColor)//transformando o pegado (salaryColor) em Float
      nativeElement.style.color = salary > 1000 ? 'green': 'red';//Alterando o CSS do elemento nativo a partir de uma condição.

    },2000)
    

   
  }

}
