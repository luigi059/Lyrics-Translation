import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.css'],
})
export class DetailsHeaderComponent {
  @Input() artistId: string | null = null;
  @Input() artistData: any;
  @Input() songData: any;

  constructor() {}
}
