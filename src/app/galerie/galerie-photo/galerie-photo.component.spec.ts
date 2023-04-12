import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriePhotoComponent } from './galerie-photo.component';

describe('GaleriePhotComponent', () => {
  let component: GaleriePhotoComponent;
  let fixture: ComponentFixture<GaleriePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
