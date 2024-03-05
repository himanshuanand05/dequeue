import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksQueryFiltersComponent } from './books-query-filters.component';

describe('BooksQueryFiltersComponent', () => {
  let component: BooksQueryFiltersComponent;
  let fixture: ComponentFixture<BooksQueryFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksQueryFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksQueryFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
