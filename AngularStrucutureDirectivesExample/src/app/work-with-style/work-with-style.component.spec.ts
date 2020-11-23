import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithStyleComponent } from './work-with-style.component';

describe('WorkWithStyleComponent', () => {
  let component: WorkWithStyleComponent;
  let fixture: ComponentFixture<WorkWithStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWithStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
