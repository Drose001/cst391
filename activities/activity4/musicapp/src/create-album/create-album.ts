import { Component, OnInit } from '@angular/core';
import { Album } from '../app/models/albums.model';
import { Track } from '../app/models/tracks.model';
import { MusicService } from '../app/service/music-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.html',
  imports: [ReactiveFormsModule, FormsModule],
  styleUrls: ['./create-album.css'],
})
export class CreateAlbum implements OnInit {
  album: Album = {
    albumId: Math.floor(Math.random() * 1000000),
    title: '',
    artist: '',
    description: '',
    year: '',
    image: '',
    tracks: [],
  };

  tracksRaw: string = '';
  wasSubmitted: boolean = false;

  constructor(private service: MusicService) {}

  ngOnInit() {}

  public onSubmit() {
    // Parse the Tracks and add to the Album then call the Service to create the new Album
    let tracks: Track[] = [];
    let tracksAll = this.tracksRaw.split('\n');
    for (let i = 0; i < tracksAll.length; ++i) {
      let title = '';
      let lyrics = '';
      let video = '';
      let trackInfo = tracksAll[i];
      let trackParts = trackInfo.split(':');
      if (trackParts.length == 3) {
        title = trackParts[0];
        lyrics = trackParts[1];
        video = trackParts[2];
      } else if (trackParts.length == 2) {
        title = trackParts[0];
        lyrics = trackParts[1];
      } else {
        title = trackParts[0];
      }

      tracks.push({
        trackId: Math.floor(Math.random() * 1000000),
        number: i + 1,
        title,
        lyrics,
        video,
      });
    }

    this.album.tracks = tracks;
    console.log(this.album);

    this.service.createAlbum(this.album, () => {
      console.log('Album create successfully');
    });

    this.wasSubmitted = true;
  }
}
