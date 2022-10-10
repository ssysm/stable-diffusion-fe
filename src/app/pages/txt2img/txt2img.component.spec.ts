import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Txt2imgComponent } from './txt2img.component';

describe('Txt2imgComponent', () => {
  let component: Txt2imgComponent;
  let fixture: ComponentFixture<Txt2imgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Txt2imgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Txt2imgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
