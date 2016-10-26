import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Rx";
import {Http, URLSearchParams} from "@angular/http";

@Injectable()
export class DrupalService {
  private rootUrl = "https://researchit.cer.auckland.ac.nz/api/content";

  constructor(private http:Http) {
  }

  search(category:string, searchChange:Subject<any>, debounceDuration = 400) {
    return searchChange
      .debounceTime(debounceDuration)
      .distinctUntilChanged()
      .switchMap(value => this.rawSearch(category, value.searchTerm, value.subcategories));
  }
      
   detailsearch(id:number, searchChange:Subject<any>, debounceDuration = 400) {
    return searchChange
      .debounceTime(debounceDuration)
      .distinctUntilChanged()
      .switchMap(value => this.rawdetailSearch(id, value.searchTerm, value.subcategories));
  }

  rawSearch(category:string, term:string, subcategories:any[]) {
    var search = new URLSearchParams();

    if (term != undefined && term.trim() != "") {
      search.set('q', term);
    }
    else if (subcategories != undefined) {
      for (let subcat of subcategories) {
        if (subcat.value != "" && subcat.value != undefined)
          search.set(subcat.key, subcat.value);
      }
    }

     return this.http
      .get(this.rootUrl + "?type=" + category, {search})
      .map((response) => response.json());
  }
  rawdetailSearch(id:number, term:string, subcategories:any[]) {
    var search = new URLSearchParams();

    if (term != undefined && term.trim() != "") {
      search.set('q', term);
    }
    else if (subcategories != undefined) {
      for (let subcat of subcategories) {
        if (subcat.value != "" && subcat.value != undefined)
          search.set(subcat.key, subcat.value);
      }
    }

     return this.http
      .get(this.rootUrl + "/" + id, {search})
      .map((response) => response.json());
  }
}



