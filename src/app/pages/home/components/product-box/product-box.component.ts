import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
   
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product |undefined = {
    id:1,
    title: 'snickers',
    price:150,
    category:'shoes',
    description:'Description',
    image:'https://via.placeholder.com/150'
  };

  // In order to Emit this Product we need to create EventEmitter
  //  This the way how to communicate with the child and the parent component.

  @Output() addToCart = new EventEmitter();


  constructor(){

  }

  ngOnInit(): void {

    
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);

  }

}
