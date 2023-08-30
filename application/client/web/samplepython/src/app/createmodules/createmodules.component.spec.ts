import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemodulesComponent } from './createmodules.component';

describe('CreatemodulesComponent', () => {
  let component: CreatemodulesComponent;
  let fixture: ComponentFixture<CreatemodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});