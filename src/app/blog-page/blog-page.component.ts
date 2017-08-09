import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  posts = [
    {
      title: 'Post One',
      author: 'Adrian Dunham',
      date: 'TBD 2017',
      description: 'Bacon ipsum dolor amet reprehenderit eu elit nulla bacon do. Ullamco duis ea mollit. Meatloaf nisi tempor ipsum. Labore chicken prosciutto laborum excepteur mollit velit capicola shoulder. Reprehenderit kevin short ribs filet mignon doner esse beef ribs veniam spare ribs. Picanha shank cillum minim porchetta duis biltong aliqua cupidatat lorem occaecat eu. Minim kevin beef ribs cow aliqua.'
    }

    ];
  constructor() { }

  ngOnInit() {
  }

}
