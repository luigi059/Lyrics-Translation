import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { nextSong, playPause, prevSong } from '../../store/player.actions';

interface State {
  player: {
    currentSongs: [];
    currentIndex: number;
    isActive: boolean;
    isPlaying: boolean;
    activeSong: {};
  };
}

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent implements OnInit {
  activeSong$: Observable<any>;
  currentSongs$: Observable<any>;
  currentIndex$: Observable<any>;
  isActive$: Observable<boolean>;
  isPlaying$: Observable<boolean>;
  duration: number = 0;
  seekTime: number = 0;
  appTime: number = 0;
  volume: number = 0.3;
  repeat: boolean = false;
  shuffle: boolean = false;

  isPlaying: boolean = false;
  currentIndex: number = 0;

  constructor(private store: Store<State>) {
    this.activeSong$ = this.store.select((state) => state.player.activeSong);
    this.currentSongs$ = this.store.select(
      (state) => state.player.currentSongs
    );
    this.currentIndex$ = this.store.select(
      (state) => state.player.currentIndex
    );
    this.isActive$ = this.store.select((state) => state.player.isActive);
    this.isPlaying$ = this.store.select((state) => state.player.isPlaying);

    this.isPlaying$.subscribe((isPlaying) => {
      this.isPlaying = isPlaying;
    });
    this.currentIndex$.subscribe((index) => {
      this.currentIndex = index;
    });
  }

  ngOnInit() {
    this.currentIndex$.subscribe((index) => {
      if (index !== undefined && index !== null) {
        this.store.dispatch(playPause({ playing: true }));
      }
    });
  }

  handlePlayPause() {
    if (this.isPlaying) {
      this.store.dispatch(playPause({ playing: false }));
    } else {
      this.store.dispatch(playPause({ playing: true }));
    }
  }

  handleNextSong() {
    this.store.dispatch(playPause({ playing: false }));
    this.currentSongs$.subscribe((songs) => {
      if (!this.shuffle) {
        this.store.dispatch(
          nextSong({ index: (this.currentIndex + 1) % songs.length })
        );
      } else {
        this.store.dispatch(
          nextSong({ index: Math.floor(Math.random() * songs.length) })
        );
      }
    });
  }

  handlePrevSong() {
    if (this.currentIndex === 0) {
      this.currentSongs$.subscribe((songs) => {
        this.store.dispatch(prevSong({ index: songs.length - 1 }));
      });
    } else if (this.shuffle) {
      this.currentSongs$.subscribe((songs) => {
        this.store.dispatch(
          prevSong({ index: Math.floor(Math.random() * songs.length) })
        );
      });
    } else {
      this.store.dispatch(prevSong({ index: this.currentIndex - 1 }));
    }
  }

  setShuffle(event: any) {
    this.shuffle = event;
  }
  setRepeat(event: any) {
    this.repeat = event;
  }
  setSeekTime(event: any) {
    if (this.seekTime !== 0) {
      this.seekTime += event;
    }
  }
  setAppTime(event: any) {
    this.appTime = event;
  }
  setDuration(event: any) {
    this.duration = event;
  }
  setVolume(event: any) {
    this.volume = event;
  }
}
