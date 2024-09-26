import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoactionComponent } from './loaction.component';

describe('LoactionComponent', () => {
  let component: LoactionComponent;
  let fixture: ComponentFixture<LoactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
