import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Album } from '../app/models/albums.model';
import { EditAlbum } from '../edit-album/edit-album';

@Component({
  selector: 'app-display-album',
  imports: [CommonModule, EditAlbum],
  templateUrl: './display-album.html',
  styleUrl: './display-album.css',
})
export class DisplayAlbum {
  @Input() album!: Album;
  editMode: boolean = false;

  onEditAlbum() {
    this.editMode = true;
  }

  onDoneEditing() {
    this.editMode = false;
  }
}