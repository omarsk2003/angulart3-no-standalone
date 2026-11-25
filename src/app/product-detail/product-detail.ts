import { Component,signal ,Input , Output, EventEmitter  } from '@angular/core';
@Component({
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {

  @Input() productName: string = 'Laptop';
  @Input() productDescription: string = 'Dell Laptop, Core i7, 16GB RAM';
  @Input() productPrice: number = 850;
  @Input() isAvailable: boolean = true;
  count = signal(1);

  @Output() data = new EventEmitter<{
  name: string;
  price: number;
  count: number;
}>();

sendData() {
  this.data.emit({
    name: this.productName,
    price: this.productPrice,
    count: this.count()
  });
}
increase() {
this.count.update(v => v + 1);
}
decrease() {
 if (this.count() > 1) {
      this.count.update(v => v - 1);
    }
}



}
