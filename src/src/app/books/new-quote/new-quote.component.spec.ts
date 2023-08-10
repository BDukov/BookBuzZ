import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuoteComponent } from './new-quote.component';

describe('NewQuoteComponent', () => {
  let component: NewQuoteComponent;
  let fixture: ComponentFixture<NewQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewQuoteComponent]
    });
    fixture = TestBed.createComponent(NewQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
