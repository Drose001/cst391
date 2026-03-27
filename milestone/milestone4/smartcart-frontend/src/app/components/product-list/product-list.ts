import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    try {
      this.loading = true;
      this.products = await firstValueFrom(this.productService.getProducts());
      console.log('Products from API:', this.products);
    } catch (err) {
      console.error('Error loading products:', err);
    } finally {
      this.loading = false;
    }
  }

  async deleteProduct(id: number | undefined): Promise<void> {
    if (!id) return;

    if (confirm('Are you sure you want to delete this product?')) {
      try {
        await firstValueFrom(this.productService.deleteProduct(id));
        this.products = this.products.filter(product => product.id !== id);
      } catch (err) {
        console.error('Error deleting product:', err);
      }
    }
  }

  trackByProductId(index: number, product: Product): number {
    return product.id ?? index;
  }
}
