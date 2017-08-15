import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementBlockComponent } from './element-block.component';

describe('ElementBlockComponent', () => {
  let component: ElementBlockComponent;
  let fixture: ComponentFixture<ElementBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
