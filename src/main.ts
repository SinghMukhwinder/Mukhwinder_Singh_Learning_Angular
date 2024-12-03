import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";




const routes: Routes = [
  {path: '', redirectTo: '/smartphones', pathMatch: 'full'}, // default route
  {path: 'smartphones', loadComponent:() => import('./app/smartphone-list/smartphone-list.component').then(m => m.SmartphoneListComponent)},
  {path: 'smartphones/:id', loadComponent:()=> import('./app/smartphone-list-item/smartphone-list-item.component').then(m => m.SmartphoneListItemComponent) },
  {path: 'modify-list-item', loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent) },
  {path: '**', loadComponent:() => import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) } // WildCard route for 404 page
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


