import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.css'],
})
export class DetailsHeaderComponent implements OnInit {
  @Input() artistId: string | null = null;
  @Input() artistData: any;
  @Input() songData: any;
  artistBio: string = '';

  constructor() {}
  ngOnInit(): void {
    this.artistBio = this.artistData.attributes.artistBio;
  }
}
