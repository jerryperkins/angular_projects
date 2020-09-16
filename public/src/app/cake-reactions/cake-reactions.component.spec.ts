import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeReactionsComponent } from './cake-reactions.component';

describe('CakeReactionsComponent', () => {
  let component: CakeReactionsComponent;
  let fixture: ComponentFixture<CakeReactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeReactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
