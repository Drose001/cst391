import { Injectable } from '@angular/core';
import data from '../data/sample-music-data.json';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  albums: Album[] = [...(data as Album[])];

  constructor() {}

  public getArtists(): Artist[] {
    const uniqueArtists = [...new Set(this.albums.map(a => a.artist))];
    return uniqueArtists.map(name => new Artist(name));
  }

  public getAlbumsOfArtist(artist: string): Album[] {
    return this.albums.filter(a => a.artist === artist);
  }

  public createAlbum(album: Album): number {
    try {
      this.albums.push(album);
      console.log('Album added:', album);
      console.log('All albums:', this.albums);
      return album.id;
    } catch {
      return -1;
    }
  }
}
