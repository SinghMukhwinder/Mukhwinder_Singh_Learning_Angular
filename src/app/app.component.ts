import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {SmartphoneListComponent} from "./smartphone-list/smartphone-list.component";
import {Smartphone} from "./Shared/Models/Smartphones";
import {SmartphoneListItemComponent} from "./smartphone-list-item/smartphone-list-item.component";
import {SmartphoneService} from "./Services/smartphone.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, SmartphoneListComponent, SmartphoneListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  displayColums:string[]=['serialNumber',
    'brand',
    'storage',
  'releaseDate',
  'price'];
  smartphones:Smartphone[]=[];

  constructor(private smartphoneService: SmartphoneService) {
  }
  ngOnInit() {
    this.smartphoneService.getSmartphones().subscribe({
      next:(data: Smartphone[]) => this.smartphones = data,
      error:err => console.log("Error fetching Smartphones", err),
      complete: () => console.log("Smartphone data fetch complete!")

    })
  }



}
