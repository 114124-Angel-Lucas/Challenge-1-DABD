import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-calc-buttons',
  templateUrl: './calc-buttons.component.html',
  styleUrls: ['./calc-buttons.component.css']
})
export class CalcButtonsComponent {
  @Input() number1: number = 0;
  @Input() number2: number = 0;
  @Output() operationEvent = new EventEmitter<string>();

  triggerEvent(string: string) {
    var result: number = 0;
    switch (string) {
      case "/":
        result = Number(this.number1) / Number(this.number2);
        break;      
      case "*":
        result = this.number1 * this.number2;
        break;
      case "^":
        result = Math.pow(Number(this.number1), Number(this.number2));
        break;
      case "+":
        result = Number(this.number1) + Number(this.number2);
        break;
      case "-":
        result = this.number1 - this.number2;
        break;
      case "CC":
        this.operationEvent.emit("CC");
        return;
      default:
        break;
    } 
    
    this.operationEvent.emit(result.toString());
  }
}
