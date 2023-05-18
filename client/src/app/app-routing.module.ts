import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AroundYouComponent } from './pages/around-you/around-you.component';
import { ArtistDetailsComponent } from './pages/artist-details/artist-details.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { SongDetailsComponent } from './pages/song-detail/song-detail.component';
import { TopArtistsComponent } from './pages/top-artists/top-artists.component';
import { TopChartsComponent } from './pages/top-charts/top-charts.component';

const routes: Routes = [
  { path: '', component: DiscoverComponent },
  { path: 'around-you', component: AroundYouComponent },
  { path: 'top-artists', component: TopArtistsComponent },
  { path: 'top-charts', component: TopChartsComponent },
  { path: 'artists/:id', component: ArtistDetailsComponent },
  { path: 'songs/:songid', component: SongDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
