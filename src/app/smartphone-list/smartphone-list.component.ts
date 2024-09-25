import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './smartphone-list.component.html',
  styleUrl: './smartphone-list.component.css'
})
export class SmartphoneListComponent {

}
