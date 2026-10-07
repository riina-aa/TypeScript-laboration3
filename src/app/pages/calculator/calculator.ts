import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  celcius: number = 0; 
  fahrenheit: number = 0; 
  foot: number = 0; 
  meter: number = 0; 

  calculateCelciusToFahrenheit(): void {
    this.fahrenheit = Number(((this.celcius * 9/5) + 32).toFixed(2));
  }

  calculateFahrenheitToCelcius(): void {
    this.celcius = Number(((this.fahrenheit - 32) * 5/9).toFixed(2));
  }

  calculateMeterToFoot(): void {
    this.foot = Number((this.meter * 3.28084).toFixed(2)); 
  }

  calculateFootToMeter(): void {
    this.meter = Number((this.foot * 0.3048).toFixed(2));  
  }
}
