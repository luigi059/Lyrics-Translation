import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-bar',
  templateUrl: './song-bar.component.html',
  styleUrls: ['./song-bar.component.css'],
})
export class SongBarComponent {
  @Input() song: any;
  @Input() i: number = 0;
  @Input() artistId: string | null = '';
  @Input() isPlaying: boolean | null = false;
  @Input() activeSong: any;

  @Output() handlePause: EventEmitter<void> = new EventEmitter();
  @Output() handlePlay: EventEmitter<{ song: any; index: number }> =
    new EventEmitter();

  constructor(private router: Router) {}

  handlePauseClick(): void {
    this.handlePause.emit();
  }
  handlePlayClick(): void {
    this.handlePlay.emit({ song: this.song, index: this.i });
  }

  navigateToArtist(): void {
    if (this.artistId) {
      this.router.navigate([`/artists/${this.artistId}`]);
    }
  }
}
