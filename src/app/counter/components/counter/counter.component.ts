import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <p>
  counter: {{ counter }}
  </p>
  <button (click)="increaseBy(4)" >+1</button>
  <button (click)="reset(10)">Reset</button>
  <button (click)="decreaseBy(5)">-1</button>
  <hr>
  `
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value:number): void {
    this.counter = this.counter + value;
    console.log(this.counter);
  }

  decreaseBy(value:number): void{
    this.counter = this.counter - value;
    console.log(this.counter);
  }

  reset(value: number):void{
    this.counter = 10;
  }
}
