import "hammerjs";
import "rxjs/Rx";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdPaginatorModule,
  MdSelectModule,
  MdSidenavModule,
  MdToolbarModule,
  MdProgressBarModule, MdChipsModule, MdFormField, MdFormFieldModule, MdButtonToggleModule, MdAutocompleteModule,
  MdExpansionModule, MdDialogModule
} from "@angular/material";
import {BreadcrumbService, Ng2BreadcrumbModule} from "ng2-breadcrumb/ng2-breadcrumb";


import {appRoutingProviders, routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {AnalyticsService} from "./app.analytics.service";
import {SearchBarService} from "./search-bar/search-bar.service";
import {ApiService} from "./app.api.service";
import {FeedbackComponent} from "./feedback/feedback.component";
import {BrowseComponent} from "./browse/browse.component";
import {MenuService} from "./menu.service";
import {ResultsListComponent} from './results-list/results-list.component';
import {SearchResultsComponent} from "./search-results/search-results.component";
import { ContentDetailsComponent } from './content-details/content-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { OrgUnitDetailsComponent } from './org-unit-details/org-unit-details.component';
import { FeaturedComponent } from './featured/featured.component';
import { ResearchActivityComponent } from './research-activity/research-activity.component';
import { BrowseResultsComponent } from './browse-results/browse-results.component';
import { HeaderComponent } from './header/header.component';
import { GuideDetailsComponent } from './guide-details/guide-details.component';
import { GuideCategoryComponent } from './guide-category/guide-category.component';
import { ResearchActivityToggleComponent } from './research-activity-toggle/research-activity-toggle.component';
import { AutocompleteSearchComponent } from './autocomplete-search/autocomplete-search.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { ImageViewDialogComponent } from './image-view-dialog/image-view-dialog.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import {ToolbarService} from "./toolbar.service";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SearchBarComponent,
    FeedbackComponent,
    SearchResultsComponent,
    BrowseComponent,
    ResultsListComponent,
    ContentDetailsComponent,
    PersonDetailsComponent,
    MarkdownComponent,
    FeedbackFormComponent,
    OrgUnitDetailsComponent,
    FeaturedComponent,
    ResearchActivityComponent,
    BrowseResultsComponent,
    HeaderComponent,
    GuideDetailsComponent,
    GuideCategoryComponent,
    ResearchActivityToggleComponent,
    AutocompleteSearchComponent,
    ImageViewComponent,
    ImageViewDialogComponent,
    FilterDialogComponent
  ],
  imports: [
    FlexLayoutModule,
    Ng2BreadcrumbModule,
    ReactiveFormsModule,
    MdPaginatorModule,
    MdSelectModule,
    MdGridListModule,
    MdIconModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonToggleModule,
    MdButtonModule,
    MdChipsModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdProgressBarModule,
    MdFormFieldModule,
    MdAutocompleteModule,
    MdDialogModule,
    routing
  ],
  entryComponents: [ImageViewDialogComponent, FilterDialogComponent],
  providers: [appRoutingProviders, AnalyticsService, SearchBarService, ApiService, BreadcrumbService, MenuService,
    ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
