import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: '../actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title: string = 'Actor Edit';
  actor: Actor = new Actor();
  submitBtnTitle: string = 'Save';
  actorId: number = 0;

  constructor(
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.actorId = parms["id"]);
    this.actorSvc.get(this.actorId).subscribe(
      resp => {
        this.actor = resp as Actor;
      },
      err => {console.log(err); }
    );
  }

  save() {
    this.actorSvc.edit(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        this.router.navigateByUrl("/actor-list");
      },
      err => { console.log(err); }
    );

  }

}
