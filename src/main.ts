import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {SmartphoneListComponent} from "./app/smartphone-list/smartphone-list.component";
import {SmartphoneListItemComponent} from "./app/smartphone-list-item/smartphone-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";



const routes: Routes = [
  {path: '', redirectTo: '/smartphoneList', pathMatch: 'full'}, // default route
  {path: 'smartphoneList', component: SmartphoneListComponent },
  {path: 'smartphoneList/:serialNumber', component: SmartphoneListItemComponent },
  {path: 'modify-list-item', component: ModifyListItemComponent },
  {path: '**', component: PageNotFoundComponent } // WildCard route for 404 page
];


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});



