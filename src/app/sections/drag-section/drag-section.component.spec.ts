import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragSectionComponent } from './drag-section.component';

describe('DragSectionComponent', () => {
  let component: DragSectionComponent;
  let fixture: ComponentFixture<DragSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
