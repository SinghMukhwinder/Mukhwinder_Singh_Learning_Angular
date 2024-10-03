import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {Smartphone} from "../Shared/Models/Smartphones";
import {SmartphoneListItemComponent} from "../smartphone-list-item/smartphone-list-item.component";
import {SmartphoneService} from "../Services/smartphone.service";

@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [NgForOf, SmartphoneListItemComponent, NgClass],
  templateUrl: './smartphone-list.component.html',
  styleUrl: './smartphone-list.component.css'
})
export class SmartphoneListComponent  {
  displayColums:string[]=['serialNumber',
  'brand',
  'model',
  'storage'];
  smartphones:Smartphone[]=[];





  constructor(private smartphoneService: SmartphoneService) {
  }
}

