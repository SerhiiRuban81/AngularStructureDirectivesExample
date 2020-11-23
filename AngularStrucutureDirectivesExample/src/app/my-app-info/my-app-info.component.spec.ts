import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppInfoComponent } from './my-app-info.component';

describe('MyAppInfoComponent', () => {
  let component: MyAppInfoComponent;
  let fixture: ComponentFixture<MyAppInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
