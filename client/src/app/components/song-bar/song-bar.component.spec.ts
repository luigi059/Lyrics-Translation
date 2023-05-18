import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBarComponent } from './song-bar.component';

describe('SongBarComponent', () => {
  let component: SongBarComponent;
  let fixture: ComponentFixture<SongBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongBarComponent]
    });
    fixture = TestBed.createComponent(SongBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
