import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ShazamService } from '../../services/shazam.service';

interface State {
  player: {
    activeSong: any;
    isPlaying: boolean;
  };
}

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
})
export class ArtistDetailsComponent {
  activeSong$: Observable<any>;
  isPlaying$: Observable<boolean>;
  data$: Observable<any> | undefined;
  artistId: string;
  isLoading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private shazamCoreService: ShazamService
  ) {
    this.activeSong$ = store.pipe(select('player', 'activeSong'));
    this.isPlaying$ = store.pipe(select('player', 'isPlaying'));
    this.artistId = this.route.snapshot.paramMap.get('id') || '';
    this.shazamCoreService.getArtistDetails(this.artistId).subscribe(
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
