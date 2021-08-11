import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  title: string = 'Credit-Detail';
  credit: Credit = new Credit();
  creditId: number = 0;

  constructor(
    private creditSvc: CreditService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.creditId = parms["id"]);
    this.creditSvc.get(this.creditId).subscribe(
      resp => {
        this.credit = resp as Credit;
      },
      err => { console.log(err); }
    );
  }

  delete() {
    this.creditSvc.delete(this.creditId).subscribe(
      resp => {
        this.credit = resp as Credit;
        this.router.navigateByUrl('/credit-list');
      },
      err => {
        console.log(err);
      }
    );

  }
}
