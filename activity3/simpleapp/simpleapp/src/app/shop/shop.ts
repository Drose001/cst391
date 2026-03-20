import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfoComponent } from '../info/info';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InfoComponent],
  templateUrl: './shop.html',
  styleUrls: ['./shop.css']
})
export class ShopComponent {
  question: string = "What’s your name?";
  answer: string = "unknown";

  appForm = new FormGroup({
    answer: new FormControl('')
  });

  onSubmit() {
    this.answer = this.appForm.get('answer')?.value || 'unknown';
  }
}
