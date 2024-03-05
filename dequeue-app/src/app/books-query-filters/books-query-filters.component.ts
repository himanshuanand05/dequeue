import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-books-query-filters',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './books-query-filters.component.html',
  styleUrl: './books-query-filters.component.css'
})
export class BooksQueryFiltersComponent {
  constructor(private http: HttpClient) { }
  responseTime: any = 0
  descriptionId = ""
  fetchData(text: string, index: number) {
    let startTime: any = new Date()
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&startIndex=${index}&maxResults=10`)
      .subscribe((data: any) => {
        // Handle the data here
        console.log(data["items"]);
        let authorMap = new Map()
        this.model.earliestPublication = 0
        this.model.latestPublication = 0
        this.model.mostCommonAuthor = ""
        this.model.data = data["items"]
        this.model.totalItems = data.totalItems
        this.model.totalPages = Math.ceil(data.totalItems / 10)
        let endTime: any = new Date()
        console.log(endTime - startTime)
        this.responseTime = (endTime - startTime)

        let authorOccur = 0
        this.model.data.forEach((element: any) => {
          element.volumeInfo?.authors?.forEach((item: string) => {
            if (authorMap.get(item.toLowerCase())) {
              let temp = authorMap.get(item.toLowerCase())
              authorMap.set(item.toLowerCase(), temp+1)
              if(temp >= authorOccur){
                authorOccur = temp+1
                this.model.mostCommonAuthor = item.toLowerCase()
              }
            }
            else {
              authorMap.set(item.toLowerCase(), 1)
            }
          })

          if (!element.volumeInfo.publishedDate) {
            return
          }
          if (this.model.earliestPublication == 0) {
            this.model.earliestPublication = new Date(element.volumeInfo.publishedDate)
            this.model.latestPublication = new Date(element.volumeInfo.publishedDate)
          }
          else {
            let pubDate = new Date(element.volumeInfo.publishedDate)
            if (this.model.earliestPublication > pubDate) {
              this.model.earliestPublication = pubDate
            }
            if (this.model.latestPublication < pubDate) {
              this.model.latestPublication = pubDate
            }

          }
        });

      });
    // let promiseArr:any = []
    // let pagesMin = Math.ceil(this.model.totalItems / 40)
    // let allData: any = []
    // setTimeout(() => {
    //   for (let i = 1; i < pagesMin; i++) {
    //     promiseArr.push(new Promise((res, rej) => {
    //       this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&startIndex=${i}&maxResults=40`)
    //         .subscribe((data: any) => {
    //           console.log(i)
    //           // Handle the data here
    //           res(data.items)

    //         });
    //     }))
    //   }
    //   console.log("promiseLength: ", promiseArr.length, " For total items: ", this.model.totalItems)
    //   let result = Promise.allSettled(promiseArr)
    //   console.log(result)
    // }, 0)
  }

  fetchBook(id: string) {
    // this.http.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    //   .subscribe((data: any) => {
    //     // Handle the data here
    //     console.log(data);
    //     this.model.data = data
    //     this.model.totalItems = data.totalItems
    //   });
    this.descriptionId = id
  }

  nextPage() {
    this.model.pageIndex++
    this.fetchData(this.model.searchText, this.model.pageIndex)
  }

  prevPage() {
    this.model.pageIndex--
    if (this.model.pageIndex < 1) {
      this.model.pageIndex = 1
    }
    this.fetchData(this.model.searchText, this.model.pageIndex)

  }
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model: {
    searchText: string,
    data: any,
    pageIndex: number,
    totalItems: number,
    totalPages: number,
    earliestPublication: Date | 0,
    latestPublication: Date | 0,
    mostCommonAuthor: string
  } = {
      searchText: "",
      data: [],
      pageIndex: 1,
      totalItems: 0,
      totalPages: 1,
      earliestPublication: 0,
      latestPublication: 0,
      mostCommonAuthor: ""
    };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.fetchData(this.model.searchText, 1);
  }

}
