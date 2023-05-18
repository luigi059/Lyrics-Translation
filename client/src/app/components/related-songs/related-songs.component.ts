import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-related-songs',
  templateUrl: './related-songs.component.html',
  styleUrls: ['./related-songs.component.css'],
})
export class RelatedSongsComponent {
  @Input() data: any[] | undefined;
  @Input() artistId: string | undefined;
  @Input() isPlaying: boolean | null = false;
  @Input() activeSong: any;

  @Output() handlePauseClick: EventEmitter<any> = new EventEmitter();
  @Output() handlePlayClick: EventEmitter<any> = new EventEmitter();

  constructor() {}
}
