import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpostPageComponent } from './newpost-page.component';

describe('NewpostPageComponent', () => {
  let component: NewpostPageComponent;
  let fixture: ComponentFixture<NewpostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpostPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
