import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  public heroNames: string[]=['spiderman', 'ironman', 'hulk', 'she hulk', 'thor']
  public deleteHero?:string;

  removeLastHero():void{

    this.deleteHero = this.heroNames.pop();
   /*const deletedHero = this.heroNames.pop();
    console.log({deletedHero})*/
  }
}
