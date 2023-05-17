import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { AroundYouComponent } from './pages/around-you/around-you.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { TopArtistsComponent } from './pages/top-artists/top-artists.component';
import { TopChartsComponent } from './pages/top-charts/top-charts.component';
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
  ],
  imports: [
    BrowserModule,
    RouterModule,
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
