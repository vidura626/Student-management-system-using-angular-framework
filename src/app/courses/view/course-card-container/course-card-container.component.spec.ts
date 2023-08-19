import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseCardContainerComponent} from './course-card-container.component';

describe('CourseCardContainerComponent', () => {
  let component: CourseCardContainerComponent;
  let fixture: ComponentFixture<CourseCardContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardContainerComponent]
    });
    fixture = TestBed.createComponent(CourseCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
