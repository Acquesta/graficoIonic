import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}
  porcentagem1 = 25 ;
  inputPorcentagem2 = 25;
  inputPorcentagem3 = 25;
  inputPorcentagem4 = 25;

  porcentagem2 = this.porcentagem1 + this.inputPorcentagem2 ;
  porcentagem3 = this.porcentagem2 + this.inputPorcentagem3 ;
  porcentagem4 = this.porcentagem3 + this.inputPorcentagem4 ;

  totalPorcentagem = 100;

  grafico = 'background: conic-gradient( #DB5217 0% ' + this.porcentagem1 + '%' + ' , #ED8144 ' + this.porcentagem1 + '% ' + this.porcentagem2 +'%, #F6B656 ' + this.porcentagem2 + '% ' + this.porcentagem3 +  '%, #FFEA78 ' + this.porcentagem3 + '% ' + this.porcentagem4 + '% );'

}
