import { Component, Input } from '@angular/core';
import { MusicService } from '../app/service/music-service';
import { Artist } from '../app/models/artists.model';
import { Album } from '../app/models/albums.model';
import { DisplayAlbum } from '../display-album/display-album';

@Component({
  selector: 'app-list-albums',
  imports: [DisplayAlbum],
  templateUrl: './list-albums.html',
  styleUrl: './list-albums.css',
})
export class ListAlbums {
  constructor(private service: MusicService) {}

  @Input() artist!: Artist;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  ngOnInit() {
    this.service.getAlbumsByArtist(
      this!.artist!.artist,
      (albums: Album[]) => (this.albums = albums)
    );
  }

  onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }
}
