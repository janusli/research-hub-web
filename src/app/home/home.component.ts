import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {MenuItem, MenuItemType, MenuService} from "../menu.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  watcher: Subscription;
  activeMediaQuery = '';

  mediaSize = '';

  menuItems = [];
  numCols: number;
  teal = '#0294a5';
  navy = '#004059';
  orange = '#ff8300';
  tileColors = [this.teal, this.navy, this.orange];

  constructor(private menuService: MenuService, media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      this.SetNumCategoryColumns(change.mqAlias);

    });
  }

  SetNumCategoryColumns(mqAlias: string) {
    this.mediaSize = mqAlias;
    switch(mqAlias) {
      case 'xs':
        this.numCols = 2;
        break;
      case 'sm':
        this.numCols = 2;
        break;
      case 'md':
        this.numCols = 2;
        break;
      case 'lg':
        this.numCols = 3;
        break;
      case 'xl':
        this.numCols = 4;
        break;
      default:
        this.numCols = 4;
        break;
    }
    //console.log(mqAlias + ": "+this.numCols);
  }

  ngOnInit() {
    this.numCols = 4;
    const menuItem = this.menuService.getMenuItem('/');
    this.menuItems = menuItem.menuItems;
  }

  getTileColor(id: number): any {
    return { 'background-color': this.tileColors[id % 3] };
  }

}
