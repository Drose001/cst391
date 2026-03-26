import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router) {}

  protected readonly title = 'My Music Collection';
  protected readonly version = 1.0;

  displayArtistList() {
    this.router.navigate(['list-artists'], { queryParams: { data: new Date() } });
  }

  displayVersion() {
    alert(`You are currently on version number ${this.version}`);
  }
}
