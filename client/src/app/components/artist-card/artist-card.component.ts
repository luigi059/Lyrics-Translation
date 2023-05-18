import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css'],
})
export class ArtistCardComponent {
  @Input() track: any;

  constructor(private router: Router) {}

  navigateToArtist(): void {
    const artistId = this.track?.artists[0].adamid;
    if (artistId) {
      this.router.navigate([`/artists/${artistId}`]);
    }
  }
}
