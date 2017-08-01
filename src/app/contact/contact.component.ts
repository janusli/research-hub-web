import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  physicalAddress: string [] = ['Centre for eResearch', 'Building 302, Level 5, Room 585',
    '23 Symonds Street', 'Auckland Central', 'Auckland 1010', 'New Zealand'];

  postalAddress: string [] = ['Centre for eResearch', 'The University of Auckland',
    'Private Bag 92019', 'Auckland 1142', 'New Zealand'];

  emailAddress = 'eresearch-support@auckland.ac.nz';

  contactPhone = '+64 9 373 7599 ext 822231';

  constructor() {
    // TODO: set contact info variable values from a database
  }

  ngOnInit() {}

}
