import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShazamService } from '../../services/shazam.service';
import { playPause, setActiveSong } from '../../store/player.actions';

interface State {
  player: {
    activeSong: any;
    isPlaying: boolean;
  };
}

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css'],
})
export class SongDetailsComponent implements OnInit {
  songData: any;
  songId: string | null = '';
  artistId: string | null = '';
  activeSong$: Observable<any> | undefined;
  isPlaying$: Observable<boolean> | undefined;
  data: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private shazamService: ShazamService
  ) {
    this.activeSong$ = store.pipe(select('player', 'activeSong'));
    this.isPlaying$ = store.pipe(select('player', 'isPlaying'));
  }

  ngOnInit(): void {
    this.songId = this.route.snapshot.paramMap.get('songid');
    this.artistId = this.route.snapshot.paramMap.get('id');

    this.shazamService
      .getSongDetails(this.songId)
      .subscribe((data) => (this.songData = data));

    this.shazamService
      .getSongRelated(this.songId)
      .subscribe((data) => (this.data = data));
  }

  handlePause() {
    this.store.dispatch(playPause({ playing: false }));
  }

  handlePlay(event: any) {
    this.store.dispatch(
      setActiveSong({ song: event.song, data: this.data, i: event.index })
    );
    this.store.dispatch(playPause({ playing: true }));
  }
}
