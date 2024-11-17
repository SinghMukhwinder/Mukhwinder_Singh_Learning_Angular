import { Pipe, PipeTransform } from '@angular/core';
import {Smartphone} from "../Shared/Models/Smartphones";

@Pipe({
  name: 'smartphoneDetails',
  standalone: true
})
export class SmartphoneDetailsPipe implements PipeTransform {

  transform(phone: Smartphone): string {
    return `${phone.brand} - ${phone.storage} GB`;
  }

}
