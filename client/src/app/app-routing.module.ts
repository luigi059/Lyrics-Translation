import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AroundYouComponent } from './pages/around-you/around-you.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { TopArtistsComponent } from './pages/top-artists/top-artists.component';
import { TopChartsComponent } from './pages/top-charts/top-charts.component';

const routes: Routes = [
  { path: '', component: DiscoverComponent },
  { path: 'around-you', component: AroundYouComponent },
  { path: 'top-artists', component: TopArtistsComponent },
  { path: 'top-charts', component: TopChartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
