import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingFormComponent } from './styling-form.component';

describe('StylingFormComponent', () => {
  let component: StylingFormComponent;
  let fixture: ComponentFixture<StylingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
