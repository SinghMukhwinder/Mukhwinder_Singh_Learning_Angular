import {Component, Input} from '@angular/core';
import {Smartphone} from "../Shared/Models/Smartphones";

@Component({
  selector: 'app-smartphone-list-item',
  standalone: true,
  imports: [],
  templateUrl: './smartphone-list-item.component.html',
  styleUrl: './smartphone-list-item.component.css'
})
export class SmartphoneListItemComponent {
  @Input() isAvailable?: Smartphone;

}
