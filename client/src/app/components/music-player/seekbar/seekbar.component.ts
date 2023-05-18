import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-seekbar',
  templateUrl: './seekbar.component.html',
  styleUrls: ['./seekbar.component.css'],
})
export class SeekbarComponent {
  @Input() value!: number;
  @Input() min!: number;
  @Input() max!: number;
  @Input() appTime!: number;
  @Output() setAppTime = new EventEmitter<number>();
  @Output() setSeekTime = new EventEmitter<number>();

  getTime(time: number): string {
    return `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
  }

  handleInput(event: Event): void {
    this.setAppTime.emit((<HTMLInputElement>event.target).valueAsNumber);
  }

  adjustTime(value: number): void {
    this.setSeekTime.emit(this.appTime + value);
  }
}
