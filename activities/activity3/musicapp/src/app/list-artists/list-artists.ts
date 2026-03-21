import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MusicService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';

@Component({
  selector: 'app-list-artists',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-artists.html',
  styleUrl: './list-artists.css'
})
export class ListArtists implements OnInit {
  artists: Artist[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.artists = this.musicService.getArtists();
  }
}
