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
  selector: 'app-top-charts',
  templateUrl: './top-charts.component.html',
  styleUrls: ['./top-charts.component.css'],
})
export class TopChartsComponent {
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
    this.shazamCoreService.getTopCharts().subscribe(
      (data) => {
        this.data$ = of(data);
        this.isLoading = false;
      },
      (err) => {
        this.error = true;
      }
    );
  }
}
