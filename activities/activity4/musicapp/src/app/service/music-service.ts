import { Injectable } from '@angular/core';
import { Artist } from '../models/artists.model';
import { Album } from '../models/albums.model';
import * as exampledata from '../../data/sample-music-data.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private host = 'http://localhost:3000';

  albums: Album[] = exampledata;

  constructor(private http: HttpClient) {}

  // artist methods
  public getArtists(callback: (artists: Artist[]) => void): void {
    this.http.get<Artist[]>(`${this.host}/artists`).subscribe((artists: Artist[]) => {
      callback(artists);
    });
  }

  // album methods
  public getAlbums(callback: (albums: Album[]) => void): void {
    this.http.get<Album[]>(`${this.host}/albums`).subscribe((albums: Album[]) => {
      callback(albums);
    });
  }

  public getAlbumsByArtist(artistName: string, callback: (albums: Album[]) => void): void {
    let request = `${this.host}/albums/${artistName}`;
    console.log('request', request);
    this.http.get<Album[]>(request).subscribe((albums: Album[]) => {
      console.log('have albums', albums);
      callback(albums);
    });
  }

   public createAlbum(album: Album, callback: () => void): void {
    this.http.post<Album>(`${this.host}/albums`, album).subscribe((data) => {
      callback();
    });
  }

  public updateAlbum(album: Album, callback: () => void): void {
  const index = this.albums.findIndex((a) => a.albumId === album.albumId);
  if (index !== -1) {
    this.albums[index] = album;
  }
  callback();
}

public deleteAlbum(id: number, callback: () => void): void {
  this.albums = this.albums.filter((album) => album.albumId !== id);
  callback();
}
  }

