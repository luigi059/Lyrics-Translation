import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeBarComponent } from './volume-bar.component';

describe('VolumeBarComponent', () => {
  let component: VolumeBarComponent;
  let fixture: ComponentFixture<VolumeBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeBarComponent]
    });
    fixture = TestBed.createComponent(VolumeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
