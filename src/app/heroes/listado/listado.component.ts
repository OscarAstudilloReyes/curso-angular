import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent { 

    nombreHeroe:string = '';
    heroes:string[] = ['Spiderman','hulk','batman','Ant-man'];

    borrarHeroe (){
      this.nombreHeroe  = this.heroes.shift() || '';
    }

}
