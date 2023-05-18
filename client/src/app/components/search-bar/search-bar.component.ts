import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateToken, updateUser } from 'src/app/store/player.actions';

interface AppState {
  player: {
    token: any;
    user: any;
  };
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchbarComponent implements OnInit {
  token$: Observable<any>;
  user$: Observable<any>;
  searchTerm: string = '';
  isLogged: boolean = false;
  user: any;
  showDropdown: boolean = false;

  constructor(private router: Router, private store: Store<AppState>) {
    this.token$ = store.pipe(select('player', 'token'));
    this.user$ = store.pipe(select('player', 'user'));
    this.token$.subscribe((token) => {
      if (token) this.isLogged = true;
    });
    this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.searchTerm = '';
  }

  handleSubmit(): void {
    this.router.navigate([`/search/${this.searchTerm}`]);
  }

  updateSearchTerm(newTerm: string): void {
    this.searchTerm = newTerm;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    localStorage.clear();
    this.isLogged = false;
    this.store.dispatch(updateToken({ token: '' }));
    this.store.dispatch(updateUser({ user: {} }));
    this.router.navigate(['/']);
  }
}
