import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../service/music-service.service';
import { Album } from '../models/albums.model';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css'
})
export class ListAlbums implements OnInit {
  albums: Album[] = [];
  artist: string = '';

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService
  ) {}

  ngOnInit(): void {
    this.artist = this.route.snapshot.queryParams['artist'] || '';
    this.albums = this.musicService.getAlbumsOfArtist(this.artist);
  }
}
