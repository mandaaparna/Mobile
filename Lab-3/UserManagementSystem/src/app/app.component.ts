import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    let book: object = {};
    this.api.getBook('1')
        .subscribe(data => {
            console.log(data);
          if ( data.length === 0) {

            book['BookID'] = 1;
            book['name'] = 'Parallel Algorithms';
            book['Professor'] = 'Yijie Han';
            book['img'] = 'img';
            book['rating'] = '9.5/10';
            book['availability'] = '25';
            this.api.postBook(book)
                .subscribe(res => {

                  this.router.navigate(['/user-profile', res._id]);

                }, (err) => {
                  console.log(err);
                });
          }

        });
    this.api.getBook('2')
        .subscribe(data => {
          if ( data.length === 0) {

            book['BookID'] = 2;
            book['name'] = 'Principles Of Big Data';
            book['Professor'] = 'Praveen Rao';
            book['img'] = 'img';
            book['rating'] = '9.5/10';
            book['availability'] = '25';
            this.api.postBook(book)
                .subscribe(res => {

                  this.router.navigate(['/user-profile', res._id]);

                }, (err) => {
                  console.log(err);
                });
          }

        });
    this.api.getBook('3')
        .subscribe(data => {
          if ( data.length === 0) {

            book['BookID'] = 3;
            book['name'] = 'Formal Software Specification';
            book['Professor'] = 'Yijie Han';
            book['img'] = 'img';
            book['rating'] = '9.5/10';
            book['availability'] = '25';
            this.api.postBook(book)
                .subscribe(res => {

                  this.router.navigate(['/user-profile', res._id]);

                }, (err) => {
                  console.log(err);
                });
          }

        });
    this.api.getBook('4')
        .subscribe(data => {
			console.log("*******************88");
			console.log(data);
          if ( data.length === 0) {

            book['BookID'] = 4;
            book['name'] = 'Cloud Computing';
            book['Professor'] = 'Choi';
            book['img'] = 'img';
            book['rating'] = '9.5/10';
            book['availability'] = '25';
            this.api.postBook(book)
                .subscribe(res => {

                  this.router.navigate(['/user-profile', res._id]);

                }, (err) => {
                  console.log(err);
                });
          }

        });
      this.api.getBook('5')
          .subscribe(data => {
              console.log("*******************88");
              console.log(data);
              if ( data.length === 0) {

                  book['BookID'] = 5;
                  book['name'] = 'Network Architecture';
                  book['Professor'] = 'Choi';
                  book['img'] = 'img';
                  book['rating'] = '9.5/10';
                  book['availability'] = '25';
                  this.api.postBook(book)
                      .subscribe(res => {

                          this.router.navigate(['/user-profile', res._id]);

                      }, (err) => {
                          console.log(err);
                      });
              }

          });
		 // this.api.deleteBook('5caa9e284a67763f2cf983ca');
}
}
