import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
  @Input() isPlaying!: boolean | null;
  @Input() repeat!: boolean;
  @Input() shuffle!: boolean;
  @Input() currentSongs!: any[];

  @Output() setRepeat = new EventEmitter<boolean>();
  @Output() setShuffle = new EventEmitter<boolean>();
  @Output() handlePlayPause = new EventEmitter<void>();
  @Output() handlePrevSong = new EventEmitter<void>();
  @Output() handleNextSong = new EventEmitter<void>();

  toggleRepeat(): void {
    this.repeat = !this.repeat;
    this.setRepeat.emit(this.repeat);
  }

  toggleShuffle(): void {
    this.shuffle = !this.shuffle;
    this.setShuffle.emit(this.shuffle);
  }
}
