import {Component, Input} from '@angular/core';
import {Smartphone} from "../Shared/Models/Smartphones";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";


@Component({
  selector: 'app-smartphone-list-item',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, MatCardModule],
  templateUrl: './smartphone-list-item.component.html',
  styleUrl: './smartphone-list-item.component.css'
})

export class SmartphoneListItemComponent {
  @Input() smartphones?: Smartphone;
  error: string | null = null;
}
