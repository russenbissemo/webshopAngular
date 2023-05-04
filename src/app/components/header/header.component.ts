import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
})
export class HeaderComponent  {
  // cart subscribe in the HomeComponent and pass to the header
  private _cart:Cart = {items:[]}
  itemsQuantity = 0;
  @Input 

  constructor(){}

  

}
