import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExpressAPI } from '../../services/express-api.service';
import { ShazamService } from '../../services/shazam.service';
import { playPause, setActiveSong } from '../../store/player.actions';

interface State {
  player: {
    activeSong: any;
    isPlaying: boolean;
    user: any;
  };
}

interface LanguageObject {
  [key: string]: string;
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
  songDatav2: any;
  isList: boolean = true;
  selectedTranslation: any;
  isDropdownOpen: boolean = false;
  languages: string[] = [];
  selectedLanguage: string;
  isLoading: boolean = true;
  filteredLanguages: string[] = [];
  showDropdown: boolean = false;
  translationText: string = '';
  user$: Observable<any>;
  user: any;
  isTranslations: boolean = true;
  pageType: string = 'Translations';
  isSelectDisbaled = false;
  requestId: string;
  isOpenRequest: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private shazamService: ShazamService,
    private expressApi: ExpressAPI,
    private http: HttpClient
  ) {
    this.activeSong$ = store.pipe(select('player', 'activeSong'));
    this.isPlaying$ = store.pipe(select('player', 'isPlaying'));
    this.user$ = store.pipe(select('player', 'user'));
    this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  async ngOnInit(): Promise<void> {
    this.songId = this.route.snapshot.paramMap.get('songid');
    this.artistId = this.route.snapshot.paramMap.get('id');

    this.shazamService
      .getSongDetails(this.songId)
      .subscribe((data) => (this.songData = data));

    this.shazamService
      .getSongRelated(this.songId)
      .subscribe((data) => (this.data = data));

    this.expressApi
      .getSongTranslations(this.songId)
      .subscribe((data: any) => (this.songDatav2 = data.songData));

    this.fetchLanguages();
  }

  fetchLanguages() {
    this.isLoading = true;
    this.http.get<any>('https://restcountries.com/v3.1/all').subscribe(
      (data: any) => {
        this.languages = this.extractLanguages(
          data.map((country) => country.languages)
        );
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching nationalities:', error);
        this.isLoading = false;
      }
    );
  }

  extractLanguages(objects: { [key: string]: string }[]): string[] {
    const languagesSet: Set<string> = new Set();

    for (const obj of objects) {
      if (obj && typeof obj === 'object') {
        const objLanguages = Object.values(obj);
        for (const lang of objLanguages) {
          languagesSet.add(lang);
        }
      }
    }

    return Array.from(languagesSet);
  }

  filterLanguages() {
    if (!this.selectedLanguage) {
      this.filteredLanguages = this.languages;
    } else {
      const filterValue = this.selectedLanguage;
      this.filteredLanguages = this.languages.filter((option) =>
        option.includes(filterValue)
      );
    }
  }

  onPageTypeChange(event: any) {
    this.pageType = event.target.value;
    if (this.pageType === 'translation') this.isTranslations = true;
    if (this.pageType === 'requests') this.isTranslations = false;
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.showDropdown = false;
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

  viewTranslation(event: any) {
    this.isList = false;
    this.selectedTranslation = event;
  }
  viewTranslations() {
    this.isList = true;
  }
  openTranslation(language?: string, requestId?: string) {
    const token = localStorage.getItem('token');
    if (!token) window.alert('Please Sign in');
    else this.isDropdownOpen = true;
    if (language) {
      this.selectedLanguage = language;
      this.isSelectDisbaled = true;
      this.requestId = requestId;
    } else {
      this.selectedLanguage = undefined;
      this.isSelectDisbaled = false;
      this.requestId = undefined;
    }
  }

  openRequest() {
    this.isOpenRequest = true;
  }

  submitTranslation() {
    console.log(this.selectedLanguage);
    console.log(this.translationText);

    this.expressApi
      .createSongTranslation(
        this.selectedLanguage,
        this.translationText,
        this.songId,
        this.user.user.name,
        this.user.user.picturePath,
        this.requestId
      )
      .subscribe(
        (data: any) => {
          this.songDatav2 = data.songData;
          this.isDropdownOpen = false;
        },
        (err) => {
          console.log(err);
          window.alert(err.error.error);
        }
      );
  }

  submitRequest() {
    this.expressApi
      .makeRequest(this.songId, this.user.user.name, this.selectedLanguage)
      .subscribe(
        (data: any) => {
          this.songDatav2 = data.songData;
          this.isOpenRequest = false;
        },
        (err) => {
          console.log(err);
          window.alert(err.error.error);
        }
      );
  }
}
