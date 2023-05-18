import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-volume-bar',
  templateUrl: './volume-bar.component.html',
  styleUrls: ['./volume-bar.component.css'],
})
export class VolumeBarComponent {
  @Input() value!: number;
  @Input() min!: number;
  @Input() max!: number;
  @Output() setVolume = new EventEmitter<number>();

  onVolumeChange(event: any): void {
    this.setVolume.emit(event.target.value);
  }

  mute(): void {
    this.setVolume.emit(0);
  }

  unmute(): void {
    this.setVolume.emit(1);
  }
}
