import { Component, OnInit } from '@angular/core';
import { BuyerContactsService } from '../../services/buyer-contacts.service';

@Component({
  selector: 'lib-buyer-card',
  templateUrl: './buyer-card.component.html',
  styleUrls: ['./buyer-card.component.scss'],
})
export class BuyerCardComponent implements OnInit {
  cardArray: any[] = [
    {
      buyerName: 'Barbara Jordan',
      buyerAddress1: '2947 Hedges Avenue South',
      buyerAddress2: 'Madison, NJ 07940',
      buyerPhone: 'Call',
      buyerEmail: 'Email',
      buyerShowings: 'Showings',
      buyerStatus: 'Undern Contract',
      buyerPrice: '$500-625k',
      buyerMatches: 'Matches',
    },
    {
      buyerName: 'Benjamin Button',
      buyerAddress1: '1919 Connectcut Ave Apt 202',
      buyerAddress2: 'Tallahasee, FL 29304',
      buyerPhone: 'Call',
      buyerEmail: 'Email',
      buyerShowings: 'Showings',
      buyerStatus: 'Past Client',
      buyerPrice: '$325-405k',
      buyerMatches: 'Matches',
    },
    {
      buyerName: 'Ken Sutherland',
      buyerAddress1: '77 Jon Bon Jovi Lane NW',
      buyerAddress2: 'Madison, NJ 07940',
      buyerPhone: 'Call',
      buyerEmail: 'Email',
      buyerShowings: 'Showings',
      buyerStatus: 'Searching',
      buyerPrice: '$350-444k',
      buyerMatches: 'Matches',
    },
    {
      buyerName: 'Ken Sutherland',
      buyerAddress1: '1919 Connectcut Ave Apt 202',
      buyerAddress2: 'Tallahasee, FL 29304',
      buyerPhone: 'Call',
      buyerEmail: 'Email',
      buyerShowings: 'Showings',
      buyerStatus: 'Searching',
      buyerPrice: '$350-444k',
      buyerMatches: 'Matches',
    },
    {
      buyerName: 'Ken Sutherland',
      buyerAddress1: '1919 Connectcut Ave Apt 202',
      buyerAddress2: 'Tallahasee, FL 29304',
      buyerPhone: 'Call',
      buyerEmail: 'Email',
      buyerShowings: 'Showings',
      buyerStatus: 'Searching',
      buyerPrice: '$350-444k',
      buyerMatches: 'Matches',
    },
    {
      buyerName: 'Ken Sutherland',
      buyerAddress1: '1919 Connectcut Ave Apt 202',
      buyerAddress2: 'Tallahasee, FL 29304',
      buyerPhone: 'Call',
      buyerEmail: 'Email',
      buyerShowings: 'Showings',
      buyerStatus: 'Searching',
      buyerPrice: '$350-444k',
      buyerMatches: 'Matches',
    },
    {
      buyerName: 'Ken Sutherland',
      buyerAddress1: '1919 Connectcut Ave Apt 202',
      buyerAddress2: 'Tallahasee, FL 29304',
      buyerPhone: 'Call',
      buyerEmail: 'Email',
      buyerShowings: 'Showings',
      buyerStatus: 'Searching',
      buyerPrice: '$350-444k',
      buyerMatches: 'Matches',
    },
    {
      buyerName: 'Ken Sutherland',
      buyerAddress1: '1919 Connectcut Ave Apt 202',
      buyerAddress2: 'Tallahasee, FL 29304',
      buyerPhone: 'Call',
      buyerEmail: 'Email',
      buyerShowings: 'Showings',
      buyerStatus: 'Searching',
      buyerPrice: '$350-444k',
      buyerMatches: 'Matches',
    },
  ];
  page: number = 1;
  limit: number = 4;
  pagenext() {
    this.page = this.page + 1;
  }
  pageprevious() {
    this.page = this.page - 1;
  }
  constructor(private agentExperienceLibService: BuyerContactsService) {}

  ngOnInit() {
    return this.agentExperienceLibService
      .getContacts()
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  keyboardEnter($event) {
    if ($event.keyCode === 13) {
      // To Do navigate to detail
    }
  }
}
