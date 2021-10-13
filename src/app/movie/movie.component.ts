import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  objectMovies = [{id: 1,
                  genre: "Drama",
                  name:"The Secret",
                  detail:"Positive thinking",
                  link:"https://www.youtube.com/embed/i7GmSg8vmcg",
                  rate:4.8},
                  {id: 3,
                  genre: "Documentary",
                  name:"Earth",
                  detail:"Educational",
                  link:"https://www.youtube.com/embed/XmtXC_n6X6Q",
                  rate:5.0},
                  {id: 4,
                  genre: "Action",
                  name:"The Matrix",
                  detail:"Educational",
                  link:"https://www.youtube.com/embed/XmtXC_n6X6Q",
                  rate:5.0}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
}
