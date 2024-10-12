import {Component, Input} from '@angular/core';
import {Smartphone} from "../Shared/Models/Smartphones";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SmartphoneService} from "../Services/smartphone.service";


@Component({
  selector: 'app-smartphone-list-item',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './smartphone-list-item.component.html',
  styleUrl: './smartphone-list-item.component.css'
})
export class SmartphoneListItemComponent {
  @Input() smartphones?: Smartphone;
}
