import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    category: '',
    quantity: 0,
    price: 0,
    store_name: '',
    purchased: false
  };

  isEdit = false;
  productId = 0;
  loading = false;
  saving = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  async loadProduct(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.isEdit = true;
      this.productId = Number(id);

      try {
        this.loading = true;
        const data = await firstValueFrom(
          this.productService.getProductById(this.productId)
        );

        this.product = {
          id: Number(data.id ?? 0),
          name: data.name ?? '',
          category: data.category ?? '',
          quantity: Number(data.quantity ?? 0),
          price: Number(data.price ?? 0),
          store_name: data.store_name ?? '',
          purchased: data.purchased === true || data.purchased === 1
        };
      } catch (err) {
        console.error('Error loading product:', err);
      } finally {
        this.loading = false;
      }
    }
  }

  async onSubmit(): Promise<void> {
    const payload: Product = {
      name: this.product.name,
      category: this.product.category,
      quantity: Number(this.product.quantity),
      price: Number(this.product.price),
      store_name: this.product.store_name,
      purchased: this.product.purchased === true
    };

    try {
      this.saving = true;

      if (this.isEdit) {
        await firstValueFrom(
          this.productService.updateProduct(this.productId, payload)
        );
      } else {
        await firstValueFrom(
          this.productService.createProduct(payload)
        );
      }

      await this.router.navigate(['/products']);
    } catch (err) {
      console.error(
        this.isEdit ? 'Error updating product:' : 'Error creating product:',
        err
      );
    } finally {
      this.saving = false;
    }
  }
}
