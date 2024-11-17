import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass, NgForOf, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {Smartphone} from "../Shared/Models/Smartphones";
import {SmartphoneListItemComponent} from "../smartphone-list-item/smartphone-list-item.component";
import {SmartphoneService} from "../Services/smartphone.service";
import {Router, RouterLink} from "@angular/router";
import {smartphones} from "../Shared/mockSmartphone";
import {SmartphoneDetailsPipe} from "../pipes/smartphone-details.pipe";



@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [NgForOf, SmartphoneListItemComponent, NgClass, NgOptimizedImage, RouterLink, NgIf, UpperCasePipe, CurrencyPipe, DatePipe, SmartphoneDetailsPipe],
  templateUrl: './smartphone-list.component.html',
  styleUrl: './smartphone-list.component.css'
})
export class SmartphoneListComponent  implements OnInit{
  displayColumns:string[]=['serialNumber',
  'brand',
  'storage',
  'relesaeDate',
  'price'];
  smartphones:Smartphone[]=[];
  error: string | null = null;

  constructor(
    private smartphoneService: SmartphoneService,
    private router: Router

  ) {}
  ngOnInit() {
    this.smartphoneService.getSmartphones().subscribe({
      next:(data: Smartphone[]) => this.smartphones = data,
      error:err => console.log("Error fetching Smartphones", err),
      complete: () => console.log("Smartphone data fetch complete!")
    });
  }

  selectedSmartphone? : Smartphone;
  selectSmartPhone(phone:Smartphone):void {
    this.selectedSmartphone = phone;
  }

  editSmartphone(id:number): void{
    this.router.navigate(['/modify-list-item']);
  }

  onDelete(id: number): void{
    this.smartphones = this.smartphones.filter(smartphones => smartphones.id !== id);
  }

}

