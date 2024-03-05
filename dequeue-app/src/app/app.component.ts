import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksQueryFiltersComponent } from './books-query-filters/books-query-filters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksQueryFiltersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dequeue Books Search';
  gBooksApi = 'https://www.googleapis.com/books/v1/volumes?q=Indian&startIndex=2&maxResults=1';
}
