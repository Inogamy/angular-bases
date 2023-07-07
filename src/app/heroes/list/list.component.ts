import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    public herosNames: string[] = ['Spiderman', 'Ironman', 'She hulk', 'Thor'];
    public deletedHero: string | undefined = '';

    removeLastHero(){
      this.deletedHero =  this.herosNames.pop();
    }
}
