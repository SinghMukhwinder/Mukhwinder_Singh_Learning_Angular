import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {Smartphone} from "../Shared/Models/Smartphones";
import {SmartphoneListItemComponent} from "../smartphone-list-item/smartphone-list-item.component";
import {SmartphoneService} from "../Services/smartphone.service";
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [NgForOf, SmartphoneListItemComponent, NgClass, NgOptimizedImage, RouterLink],
  templateUrl: './smartphone-list.component.html',
  styleUrl: './smartphone-list.component.css'
})
export class SmartphoneListComponent  implements OnInit{
  displayColumns:string[]=['serialNumber',
  'brand',
  'model',
  'storage'];
  smartphones:Smartphone[]=[];

  constructor(
    private smartphoneService: SmartphoneService) {}
  ngOnInit() {
    this.smartphoneService.getSmartphones().subscribe({
      next:(data: Smartphone[]) => this.smartphones = data,
      error:err => console.log("Error fetching Smartphones", err),
      complete: () => console.log("Smartphone data fetch complete!")

    })
  }


  selectedSmartphone? : Smartphone;
  selectSmartPhone(phone:Smartphone):void {
    this.selectedSmartphone = phone;
  }

}

