import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {SmartphoneListComponent} from "./app/smartphone-list/smartphone-list.component";
import {SmartphoneListItemComponent} from "./app/smartphone-list-item/smartphone-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";




const routes: Routes = [
  {path: '', redirectTo: '/smartphones', pathMatch: 'full'}, // default route
  {path: 'smartphones', component: SmartphoneListComponent },
  {path: 'smartphones/:id', component: SmartphoneListItemComponent },
  {path: 'modify-list-item', component: ModifyListItemComponent },
  {path: '**', component: PageNotFoundComponent } // WildCard route for 404 page
];


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay:1000}))
  ],
}).catch((error) => console.error(error));



