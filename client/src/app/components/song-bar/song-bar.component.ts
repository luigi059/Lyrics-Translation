import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-bar',
  templateUrl: './song-bar.component.html',
  styleUrls: ['./song-bar.component.css'],
})
export class SongBarComponent {
  @Input() song: any;
  @Input() i: number = 0;
  @Input() artistId: string | undefined;
  @Input() isPlaying: boolean | null = false;
  @Input() activeSong: any;

  constructor() {}
}
