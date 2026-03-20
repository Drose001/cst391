import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class InfoComponent implements OnInit {
  @Input() name: string = '';

  quantity: string = '';
  products: string[] = [];
  selectedProduct: string = '';

  ngOnInit(): void {
    this.quantity = '1';
    this.products = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
    this.selectedProduct = this.products[0];
  }

  onSubmit() {
    console.log('Product:', this.selectedProduct);
    console.log('Quantity:', this.quantity);
  }

  newInfo() {
    this.quantity = '1';
    this.selectedProduct = this.products[0];
  }
}
