import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {SmartphoneListComponent} from "./app/smartphone-list/smartphone-list.component";
import {SmartphoneListItemComponent} from "./app/smartphone-list-item/smartphone-list-item.component";


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {path: 'smartphoneList', component: SmartphoneListComponent },
  {path: 'smartphoneList/:serialNumber', component: SmartphoneListItemComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
