import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ShazamService } from '../../services/shazam.service';

interface AppState {
  player: {
    activeSong: any;
    isPlaying: boolean;
  };
}

@Component({
  selector: 'app-around-you',
  templateUrl: './around-you.component.html',
  styleUrls: ['./around-you.component.css'],
})
export class AroundYouComponent {
  isLoading = true;
  activeSong$: Observable<any>;
  isPlaying$: Observable<boolean>;
  data$: Observable<any> | undefined;
  error = false;

  constructor(
    private store: Store<AppState>,
    private shazamCoreService: ShazamService
  ) {
    this.activeSong$ = this.store.pipe(select('player', 'activeSong'));
    this.isPlaying$ = this.store.pipe(select('player', 'isPlaying'));
    this.shazamCoreService.getSongsByCountry('IE').subscribe(
      (data) => {
        console.log(data);
        this.data$ = of(data);
        this.isLoading = false;
      },
      (err) => {
        this.error = true;
      }
    );
  }
}
