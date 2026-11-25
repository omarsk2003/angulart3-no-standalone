import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
@Input() productName: string = '';
@Input() productPrice: number = 0;
@Input() count: number = 0;


}
