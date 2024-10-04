import {Component, Input} from '@angular/core';
import {Smartphone} from "../Shared/Models/Smartphones";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-smartphone-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './smartphone-list-item.component.html',
  styleUrl: './smartphone-list-item.component.css'
})
export class SmartphoneListItemComponent {
  @Input() smartphones?: Smartphone;
}
