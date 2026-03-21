import { Injectable } from '@angular/core';
import * as exampledata from '../../data/sample-music-data.json';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  albums: Album[] = (exampledata as Album[]);

  constructor() { }

  public getArtists(): Artist[] {
    const uniqueArtists = [...new Set(this.albums.map(a => a.artist))];
    return uniqueArtists.map(name => new Artist(name));
  }

  public getAlbumsOfArtist(artist: string): Album[] {
    return this.albums.filter(a => a.artist === artist);
  }

  public getAlbum(artist: string, id: number): Album | null {
    for (const album of this.albums) {
      if (album.artist === artist && album.id === id) {
        return album;
      }
    }
    return null;
  }

  public createAlbum(album: Album): number {
    try {
      this.albums.push(album);
      return album.id;
    } catch {
      return -1;
    }
  }

  public updateAlbum(album: Album): number {
    const index = this.albums.findIndex(a => a.id === album.id);
    if (index >= 0) {
      this.albums.splice(index, 1, album);
      return 0;
    }
    return -1;
  }

  public deleteAlbum(id: number, artist: string): number {
    const index = this.albums.findIndex(a => a.id === id && a.artist === artist);
    if (index >= 0) {
      this.albums.splice(index, 1);
      return 0;
    }
    return -1;
  }
}
