import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, of } from 'rxjs';

import { ShazamService } from '../../services/shazam.service';
import { playPause, setActiveSong } from '../../store/player.actions';

interface State {
  player: {
    activeSong: any;
    isPlaying: boolean;
  };
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  activeSong$: Observable<any>;
  isPlaying$: Observable<boolean>;
  data$: Observable<any> | undefined;
  songs: any;
  isLoading: boolean = true;
  error: boolean = false;
  searchTerm: string = '';

  private subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private shazamCoreService: ShazamService
  ) {
    this.activeSong$ = store.pipe(select('player', 'activeSong'));
    this.isPlaying$ = store.pipe(select('player', 'isPlaying'));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchTerm = params['searchTerm'];
      this.data$ = this.shazamCoreService.getSongsBySearch(this.searchTerm);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
