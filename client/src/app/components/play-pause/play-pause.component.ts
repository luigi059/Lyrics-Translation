import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-play-pause',
  templateUrl: './play-pause.component.html',
  styleUrls: ['./play-pause.component.css'],
})
export class PlayPauseComponent {
  @Input() isPlaying: boolean | null = false;
  @Input() activeSong: any;
  @Input() song: any;
  @Output() handlePause: EventEmitter<void> = new EventEmitter();
  @Output() handlePlay: EventEmitter<void> = new EventEmitter();

  onHandlePause() {
    this.handlePause.emit();
  }

  onHandlePlay() {
    this.handlePlay.emit();
  }
}
