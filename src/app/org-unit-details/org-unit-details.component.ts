import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService, PeopleSearchParams} from "../app.api.service";
import {OrgUnit} from "../model/OrgUnit";
import { Location } from '@angular/common';
import {BreadcrumbService} from "ng2-breadcrumb/ng2-breadcrumb";
import {Person} from "../model/Person";
import {AnalyticsService} from "../app.analytics.service";


@Component({
  selector: 'app-org-unit-details',
  templateUrl: './org-unit-details.component.html',
  styleUrls: ['./org-unit-details.component.scss']
})
export class OrgUnitDetailsComponent implements OnInit {

  private orgUnit: OrgUnit;
  userSupport: Array<Person>;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private breadcrumbService: BreadcrumbService,
              private location: Location, private analyticsService: AnalyticsService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.apiService.getOrgUnit(id).subscribe(
        orgUnit => {
          const url = this.location.path();
          const name = orgUnit.name;

          this.analyticsService.trackOrgUnit(name, url);
          this.breadcrumbService.addFriendlyNameForRoute(url, name);
          this.orgUnit = orgUnit;
        }
      );

      const searchParams = new PeopleSearchParams();
      searchParams.setOrgUnits([id]);
      searchParams.setRoleTypes([3]);
      this.apiService.getPeople(searchParams).subscribe(people => {
        this.userSupport = people.content;
      });
    });
  }
}
