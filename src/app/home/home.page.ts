import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}
  porcentagem1 = 0 ;
  inputPorcentagem2 = 0;
  inputPorcentagem3 = 0;
  inputPorcentagem4 = 0;

  porcentagem2: number = 0;
  porcentagem3: number = 0;
  porcentagem4: number = 0;

  grafico:any;

  porcento(){

    if(this.porcentagem1 + this.inputPorcentagem2 + this.inputPorcentagem3 + this.inputPorcentagem4 === 100){
      this.porcentagem2 = this.porcentagem1 + this.inputPorcentagem2 ;
      this.porcentagem3 = this.porcentagem2 + this.inputPorcentagem3 ;
      this.porcentagem4 = this.porcentagem3 + this.inputPorcentagem4 ;

      this.grafico = 'background: conic-gradient( #DB5217 0% ' + this.porcentagem1 + '%' + ' , #ED8144 ' + this.porcentagem1 + '% ' + this.porcentagem2 +'%, #F6B656 ' + this.porcentagem2 + '% ' + this.porcentagem3 +  '%, #FFEA78 ' + this.porcentagem3 + '% ' + this.porcentagem4 + '% );'

    }else{
      this.grafico = 'background-image: url("../../assets/images.png") ; background-repeat: no-repeat; background-attachment: fixed; background-position: center;'
    }

  }


}
