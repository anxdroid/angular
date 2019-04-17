import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdLoginFormComponent } from './td-login-form.component';

describe('TdLoginFormComponent', () => {
  let component: TdLoginFormComponent;
  let fixture: ComponentFixture<TdLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
