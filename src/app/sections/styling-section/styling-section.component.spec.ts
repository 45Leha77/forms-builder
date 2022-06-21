import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingSectionComponent } from './styling-section.component';

describe('StylingSectionComponent', () => {
  let component: StylingSectionComponent;
  let fixture: ComponentFixture<StylingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
