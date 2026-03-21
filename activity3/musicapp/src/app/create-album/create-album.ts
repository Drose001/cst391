import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Album } from '../models/albums.model';
import { MusicService } from '../service/music-service.service';

@Component({
  selector: 'app-create-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-album.html',
  styleUrl: './create-album.css'
})
export class CreateAlbum {
  album: Album = new Album(0, '', '', 2024, '', '');

  constructor(
    private musicService: MusicService,
    private router: Router
  ) {}

  onSubmit() {
    const newAlbum = new Album(
      Date.now(),
      this.album.artist,
      this.album.title,
      Number(this.album.year),
      this.album.genre,
      this.album.image
    );

    this.musicService.createAlbum(newAlbum);
    alert('Album created');
    this.router.navigate(['/list-artists']);
  }
}
