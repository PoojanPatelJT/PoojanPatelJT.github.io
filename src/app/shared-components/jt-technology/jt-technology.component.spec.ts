import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JtTechnologyComponent } from './jt-technology.component';

describe('JtTechnologyComponent', () => {
  let component: JtTechnologyComponent;
  let fixture: ComponentFixture<JtTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JtTechnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JtTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
