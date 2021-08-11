import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  credits: Credit[] = [];
  title: string = 'Credit Manager';

  constructor(private creditSvc: CreditService) { }

  ngOnInit(): void {
    this.creditSvc.list().subscribe(
      resp => {
        this.credits = resp as Credit[];
          console.log("list of credits: ", this.credits);},
        err => { console.log(err);}
        );
  }

}
