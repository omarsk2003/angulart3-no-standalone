import { Component, signal } from '@angular/core';
import { ProductDetail } from './product-detail/product-detail';
import { ShoppingCart } from './shopping-cart/shopping-cart';
@Component({
  imports: [ProductDetail, ShoppingCart],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angulart3-no-standalone');


  cartProduct = {
    name: '',
    price: 0,
    count: 0
}
addToCart(data: { name: string; price: number; count: number }) {
    this.cartProduct = data;
  }
}
