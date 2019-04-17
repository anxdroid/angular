import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdLoginFormComponent } from './dd-login-form.component';

describe('DdLoginFormComponent', () => {
  let component: DdLoginFormComponent;
  let fixture: ComponentFixture<DdLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
