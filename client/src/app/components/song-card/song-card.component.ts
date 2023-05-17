import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { playPause, setActiveSong } from '../../store/player.actions';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css'],
})
export class SongCardComponent {
  @Input() song: any;
  @Input() isPlaying: boolean | null = false;
  @Input() activeSong: any;
  @Input() data: any;
  @Input() i: number = 0;

  constructor(private store: Store) {}

  handlePauseClick() {
    this.store.dispatch(playPause({ playing: false }));
  }

  handlePlayClick() {
    this.store.dispatch(
      setActiveSong({ song: this.song, data: this.data, i: this.i })
    );
    this.store.dispatch(playPause({ playing: true }));
  }
}
