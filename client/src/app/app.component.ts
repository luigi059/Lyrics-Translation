import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExpressAPI } from './services/express-api.service';
import { updateToken, updateUser } from './store/player.actions';

interface State {
  player: {
    activeSong: {};
    token: any;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeSong$: Observable<any>;

  constructor(private store: Store<State>, private expressApi: ExpressAPI) {
    this.activeSong$ = this.store.select((state) => state.player.activeSong);
  }
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.store.dispatch(
        updateToken({ token: localStorage.getItem('token') })
      );
      this.expressApi
        .getInfo(localStorage.getItem('token'))
        .subscribe((data: any) => {
          this.store.dispatch(updateUser({ user: data }));
        });
    }
  }
}
