import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {
  title: string = 'Credit-Create';
  credit: Credit = new Credit();
  actors: Actor[] = [];
  movies: Movie[] = [];


  constructor(
    private creditSvc: CreditService,
    private actorSvc: ActorService,
    private movieSvc: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Populate List of Actors
    this.actorSvc.list().subscribe(
      resp => {
        this.actors = resp as Actor[];
      },
      err => { console.log(err); }
    );
    
    // Populate List of Movies
    this.movieSvc.list().subscribe(
      resp => {
        this.movies = resp as Movie[];
      },
      err => { console.log(err); }
    );

  }

  save() {
    this.creditSvc.create(this.credit).subscribe(
      resp => {
        this.credit = resp as Credit;
        this.router.navigateByUrl("/credit-list");
      },
      err => { console.log(err); }
    );

  }
}
