import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Smartphone} from "../Shared/Models/Smartphones";
import {smartphones} from "../Shared/mockSmartphone";

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  constructor() { }


  getSmartphones (): Observable<Smartphone[]> {
    return of(smartphones);
  }

}

