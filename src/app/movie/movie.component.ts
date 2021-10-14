import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  objectMovies = [{id: 1,
                  genre: "Motivational",
                  name:"The Secret",
                  detail:"Positive thinking",
                  link:"https://www.youtube.com/embed/i7GmSg8vmcg",
                  rate:4.8},
                  {id: 2,
                  genre: "Documentary",
                  name:"Earth",
                  detail:"Educational",
                  link:"https://www.youtube.com/embed/XmtXC_n6X6Q",
                  rate:5.0},
                  {id: 3,
                  genre: "News",
                  name:"Euronews",
                  detail:"News",
                  link:"https://www.youtube.com/embed/sPgqEHsONK8",
                  rate:5.0},
                  {id: 4,
                    genre: "Kids",
                    name:"Twinkle Twinkle",
                    detail:"Kids laliby",
                    link:"https://www.youtube.com/embed/0nh87XZMTJY",
                    rate:4.8},
                    {id: 5,
                    genre: "Music",
                    name:"Relax study",
                    detail:"Relax",
                    link:"https://www.youtube.com/embed/o9lzrqkvCwI",
                    rate:5.0},
                    {id: 6,
                    genre: "Motivational",
                    name:"Winners don't make excuses",
                    detail:"Koby",
                    link:"https://www.youtube.com/embed/VSceuiPBpxY",
                    rate:5.0}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
}
