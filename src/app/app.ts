import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
quantity: number = 1;
pricePerItem: number = 100;

  get totalPrice(): number {
    return this.quantity * this.pricePerItem;
  }
}
