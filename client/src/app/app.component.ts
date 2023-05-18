import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface State {
  player: {
    activeSong: {};
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeSong$: Observable<any>;

  constructor(private store: Store<State>) {
    this.activeSong$ = this.store.select((state) => state.player.activeSong);
  }
}
