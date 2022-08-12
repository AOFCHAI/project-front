import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdnimComponent } from './register-adnim.component';

describe('RegisterAdnimComponent', () => {
  let component: RegisterAdnimComponent;
  let fixture: ComponentFixture<RegisterAdnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAdnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
