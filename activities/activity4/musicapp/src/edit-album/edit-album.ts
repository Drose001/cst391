import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Album } from '../app/models/albums.model';
import { MusicService } from '../app/service/music-service';

@Component({
  selector: 'app-edit-album',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-album.html',
  styleUrl: './edit-album.css',
})
export class EditAlbum {
  @Input() album!: Album;
  @Output() doneEditing = new EventEmitter<void>();

  constructor(private service: MusicService) {}

  onSubmit() {
    this.service.updateAlbum(this.album, () => {
      this.doneEditing.emit();
    });
  }

  onDelete() {
    this.service.deleteAlbum(this.album.albumId, () => {
      this.doneEditing.emit();
    });
  }

  onCancel() {
    this.doneEditing.emit();
  }
}