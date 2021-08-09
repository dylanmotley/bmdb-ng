import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-create',
  templateUrl: '../actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {

  title: string = 'Actor Create';
  actor: Actor = new Actor();
  submitBtnTitle: string = 'Create';

  constructor(
    private actorSvc: ActorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.actorSvc.create(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        this.router.navigateByUrl("/actor-list");
      },
      err => { console.log(err); }
    );

  }
}
