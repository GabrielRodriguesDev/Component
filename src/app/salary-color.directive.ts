import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {
  
  @Input()//Pegando o valor do component que foi solicitado
  salaryColor;

  @Input()
  Testando;


  

 

  constructor(private element: ElementRef) {


    console.log(this.Testando)

    setTimeout (()=>{
      const nativeElement: HTMLElement = this.element.nativeElement//Criando o acesso aos elementos nativos do DOM
      const salary = parseFloat(this.salaryColor)//transformando o pegado (salaryColor) em Float
      nativeElement.style.color = salary > 20000 ? 'green': 'red';//Alterando o CSS do elemento nativo a partir de uma condição.

      console.log(this.Testando)

    },2000)
    

   
  }

}
