import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-related-songs',
  templateUrl: './related-songs.component.html',
  styleUrls: ['./related-songs.component.css'],
})
export class RelatedSongsComponent {
  @Input() data: any[] | undefined;
  @Input() artistId: string | null = '';
  @Input() isPlaying: boolean | null = false;
  @Input() activeSong: any;

  @Output() handlePause: EventEmitter<any> = new EventEmitter();
  @Output() handlePlay: EventEmitter<{ song: any; index: number }> =
    new EventEmitter();

  constructor() {}

  handlePauseClick() {
    this.handlePause.emit();
  }

  handlePlayClick(event: any) {
    this.handlePlay.emit({ song: event.song, index: event.index });
  }
}
