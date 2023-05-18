import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSongsComponent } from './related-songs.component';

describe('RelatedSongsComponent', () => {
  let component: RelatedSongsComponent;
  let fixture: ComponentFixture<RelatedSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedSongsComponent]
    });
    fixture = TestBed.createComponent(RelatedSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
