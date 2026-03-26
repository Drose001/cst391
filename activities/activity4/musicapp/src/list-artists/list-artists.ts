import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../app/service/music-service';
import { Artist } from '../app/models/artists.model';
import { ListAlbums } from '../list-albums/list-albums';

@Component({
  selector: 'app-list-artists',
  imports: [ListAlbums],
  templateUrl: './list-artists.html',
  styleUrl: './list-artists.css',
})
export class ListArtists {
  constructor(private route: ActivatedRoute, private service: MusicService) {}

  selectedArtist: Artist | null = null;
  artists: Artist[] = [];

  ngOnInit() {
    console.log('Getting data....');
    this.service.getArtists((artists: Artist[]) => {
      this.artists = artists;
      console.log('this.artists', this.artists);
    });
  }

  onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }
}
