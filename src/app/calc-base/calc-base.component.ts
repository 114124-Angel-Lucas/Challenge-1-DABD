import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-base',
  templateUrl: './calc-base.component.html',
  styleUrls: ['./calc-base.component.css']
})
export class CalcBaseComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;
  onInputChangeN1(event: any) {
    this.number1 = event.target.value;
  }
  onInputChangeN2(event: any) {
    this.number2 = event.target.value;
  }
  // Event handler for the emitted event
  handleChildEvent(data: any) {
    if(data == "CC")
      this.number1 = this.number2 = this.result = 0;
    else
    this.result = data;
  }
}
