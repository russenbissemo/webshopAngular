import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
 
})
export class ProductsHeaderComponent implements OnInit{
 // The way we send data outside of your component to parent component
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  sort ='desc';
  itemsShowCount = 12;

  constructor(){}

  ngOnInit(): void {
    
  }
  onSortUpdated(newSort:string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);

  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count)

  }
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
    console.log(" Ma mise à jour ", this.columnsCountChange)
  }

}
