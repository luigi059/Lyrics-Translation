import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { DetailsHeaderComponent } from './components/details-header/details-header.component';
import { ErrorComponent } from './components/error/error.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ControlsComponent } from './components/music-player/controls/controls.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { PlayerComponent } from './components/music-player/player/player.component';
import { SeekbarComponent } from './components/music-player/seekbar/seekbar.component';
import { TrackComponent } from './components/music-player/track/track.component';
import { VolumeBarComponent } from './components/music-player/volume-bar/volume-bar.component';
import { PlayPauseComponent } from './components/play-pause/play-pause.component';
import { RelatedSongsComponent } from './components/related-songs/related-songs.component';
import { SearchbarComponent } from './components/search-bar/search-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SongBarComponent } from './components/song-bar/song-bar.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { AroundYouComponent } from './pages/around-you/around-you.component';
import { ArtistDetailsComponent } from './pages/artist-details/artist-details.component';
import { AuthComponent } from './pages/auth/auth.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { SearchComponent } from './pages/search/search.component';
import { SongDetailsComponent } from './pages/song-detail/song-detail.component';
import { TopArtistsComponent } from './pages/top-artists/top-artists.component';
import { TopChartsComponent } from './pages/top-charts/top-charts.component';
import { ReplacePipe } from './shared/replace.pipe';
import { playerReducer } from './store/player.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverComponent,
    ErrorComponent,
    LoaderComponent,
    SidebarComponent,
    AroundYouComponent,
    TopArtistsComponent,
    TopChartsComponent,
    SongCardComponent,
    PlayPauseComponent,
    MusicPlayerComponent,
    TrackComponent,
    ControlsComponent,
    SeekbarComponent,
    PlayerComponent,
    VolumeBarComponent,
    ArtistCardComponent,
    ArtistDetailsComponent,
    DetailsHeaderComponent,
    ReplacePipe,
    RelatedSongsComponent,
    SongBarComponent,
    SongDetailsComponent,
    SearchComponent,
    SearchbarComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      { player: playerReducer },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
