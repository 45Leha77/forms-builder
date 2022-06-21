import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropSectionComponent } from './drop-section.component';

describe('DropSectionComponent', () => {
  let component: DropSectionComponent;
  let fixture: ComponentFixture<DropSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
