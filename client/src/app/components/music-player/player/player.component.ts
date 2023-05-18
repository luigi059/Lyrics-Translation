/* import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements AfterViewInit {
  @Input() activeSong: any;
  @Input() isPlaying!: boolean | null;
  @Input() volume!: number;
  @Input() seekTime!: number;
  @Input() repeat!: boolean;
  @Output() onEnded = new EventEmitter<void>();
  @Output() onTimeUpdate = new EventEmitter<number>();
  @Output() onLoadedData = new EventEmitter<number>();
  @ViewChild('audioElement') audioElement!: ElementRef;

  ngAfterViewInit(changes: SimpleChanges): void {
    if (changes['volume']) {
      this.audioElement.nativeElement.volume = this.volume;
    }
    if (changes['seekTime']) {
      this.audioElement.nativeElement.currentTime = this.seekTime;
    }
    if (changes['isPlaying']) {
      if (this.isPlaying) {
        this.audioElement.nativeElement.play();
      } else {
        this.audioElement.nativeElement.pause();
      }
    }
  }

  handleEnded(): void {
    this.onEnded.emit();
  }

  handleTimeUpdate(): void {
    this.onTimeUpdate.emit(this.audioElement.nativeElement.currentTime);
  }

  handleLoadedData(): void {
    this.onLoadedData.emit(this.audioElement.nativeElement.duration);
  }
}
 */

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements AfterViewInit, OnChanges {
  @Input() activeSong: any;
  @Input() isPlaying!: boolean | null;
  @Input() volume!: number;
  @Input() seekTime!: number;
  @Input() repeat!: boolean;
  @Output() onEnded = new EventEmitter<void>();
  @Output() onTimeUpdate = new EventEmitter<number>();
  @Output() onLoadedData = new EventEmitter<number>();
  @ViewChild('audioElement') audioElement!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['volume'] &&
      !changes['volume'].isFirstChange() &&
      this.audioElement
    ) {
      this.audioElement.nativeElement.volume = this.volume;
    }
    if (
      changes['seekTime'] &&
      !changes['seekTime'].isFirstChange() &&
      this.audioElement
    ) {
      this.audioElement.nativeElement.currentTime = this.seekTime;
    }
    if (
      changes['isPlaying'] &&
      !changes['isPlaying'].isFirstChange() &&
      this.audioElement
    ) {
      if (this.isPlaying) {
        this.audioElement.nativeElement.play();
      } else {
        this.audioElement.nativeElement.pause();
      }
    }
  }

  ngAfterViewInit(): void {
    this.audioElement.nativeElement.volume = this.volume;
    this.audioElement.nativeElement.currentTime = this.seekTime;
    if (this.isPlaying) {
      this.audioElement.nativeElement.play();
    } else {
      this.audioElement.nativeElement.pause();
    }
  }

  handleEnded(): void {
    this.onEnded.emit();
  }

  handleTimeUpdate(): void {
    this.onTimeUpdate.emit(this.audioElement.nativeElement.currentTime);
  }

  handleLoadedData(): void {
    this.onLoadedData.emit(this.audioElement.nativeElement.duration);
  }
}
