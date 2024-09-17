import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Smartphone} from "./Shared/Models/Smartphones";
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Brand New Smartphones'

  smartphone1 : Smartphone = {serialNumber: "1234A", brand: "Apple", model: "IPhone13", storage:  256, isAvailable: true};
  smartphone2 : Smartphone = {serialNumber: "1234B", brand: "Samsung", model: "S23", storage:  512, isAvailable: true};
  smartphone3 : Smartphone = {serialNumber: "1234C", brand: "One Plus", model: "5T", storage:  128, isAvailable: true};
  smartphone4 : Smartphone = {serialNumber: "1234D", brand: "Vivo", model: "V15", storage:  256, isAvailable: false};
  smartphone5 : Smartphone = {serialNumber: "1234E", brand: "RealMe", model: "GT neo 3T", storage:  64, isAvailable: false}
  smartphone6 : Smartphone = {serialNumber: "1234E", brand: "RealMe", model: "GT neo 3T", storage:  64, isAvailable: false}



  ArrayList: Smartphone[] =
    [this.smartphone1,this.smartphone2, this.smartphone3, this.smartphone4, this.smartphone5, this.smartphone6]



}
