import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCauroselComponent } from './ad-caurosel.component';

describe('AdCauroselComponent', () => {
  let component: AdCauroselComponent;
  let fixture: ComponentFixture<AdCauroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCauroselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCauroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
