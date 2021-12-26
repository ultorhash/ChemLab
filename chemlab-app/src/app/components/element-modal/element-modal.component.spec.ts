import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementModalComponent } from './element-modal.component';

describe('ModalInfoComponent', () => {
  let component: ElementModalComponent;
  let fixture: ComponentFixture<ElementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
