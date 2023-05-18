import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
})
export class TrackComponent {
  @Input() isPlaying!: boolean | null;
  @Input() isActive!: boolean | null;
  @Input() activeSong!: any;
}
