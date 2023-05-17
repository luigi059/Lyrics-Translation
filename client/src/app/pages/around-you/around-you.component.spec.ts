import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AroundYouComponent } from './around-you.component';

describe('AroundYouComponent', () => {
  let component: AroundYouComponent;
  let fixture: ComponentFixture<AroundYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AroundYouComponent]
    });
    fixture = TestBed.createComponent(AroundYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
