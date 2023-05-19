import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { genres } from '../../../assets/constants';
import { ShazamService } from '../../services/shazam.service';
import {
  playPause,
  selectGenreListId,
  setActiveSong,
} from '../../store/player.actions';

interface AppState {
  player: {
    genreListId: string;
    activeSong: any;
    isPlaying: boolean;
  };
}

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  genreListId$: Observable<string>;
  activeSong$: Observable<any>;
  isPlaying$: Observable<boolean>;
  data$: Observable<any> | undefined;
  genreTitle: string | undefined = 'Pop';
  isLoading = true;
  error = false;
  genres: { title: string; value: string }[] = genres;

  constructor(
    private store: Store<AppState>,
    private shazamCoreService: ShazamService
  ) {
    this.genreListId$ = store.pipe(select('player', 'genreListId'));
    this.activeSong$ = store.pipe(select('player', 'activeSong'));
    this.isPlaying$ = store.pipe(select('player', 'isPlaying'));
    // Fetch data based on genreListId
    this.genreListId$.subscribe((genreListId) => {
      this.shazamCoreService.getSongsByGenre(genreListId || 'POP').subscribe(
        (data) => {
          console.log(data);
          this.data$ = of(data);
          this.isLoading = false;
        },
        (err) => {
          this.error = true;
        }
      );
    });
  }

  ngOnInit(): void {}

  onGenreChange(event: any) {
    this.genreTitle = genres.find(
      ({ value }) => value === event.target.value
    )?.title;
    this.store.dispatch(selectGenreListId({ id: event.target.value }));
  }

  playSong(song: any, data: any, i: any) {
    this.store.dispatch(setActiveSong({ song: song, data: data, i: i }));
    this.store.dispatch(playPause({ playing: true }));
  }
}
