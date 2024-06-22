import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidspayableListPageComponent } from './bidspayable-list-page.component';

describe('BidspayableListPageComponent', () => {
  let component: BidspayableListPageComponent;
  let fixture: ComponentFixture<BidspayableListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidspayableListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidspayableListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
