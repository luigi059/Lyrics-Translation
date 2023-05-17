import { Component, OnInit } from '@angular/core';
//import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.fetchSongsByGenre(
      this.playerService.genreListId || 'POP'
    );
  }

  onGenreChange(genreId: string) {
    this.playerService.selectGenreListId(genreId);
    this.playerService.fetchSongsByGenre(genreId);
  }
}
