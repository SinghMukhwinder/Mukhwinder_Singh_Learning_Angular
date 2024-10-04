import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Smartphone} from "../Shared/Models/Smartphones";
import {smartphones} from "../Shared/mockSmartphone";

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  private smartphoneList:Smartphone [] = smartphones;

  constructor() { }


  getSmartphones (): Observable<Smartphone[]> {
    return of(smartphones);
  }

  addSmartphone(mySmartphone:Smartphone): Observable<Smartphone[]>{
    this.smartphoneList.push(mySmartphone)
    return of(this.smartphoneList);
  }

  updateSmartphone(updateSmartphone:Smartphone): Observable<Smartphone[]>{
    const  index = this.smartphoneList.findIndex(smart => smart.serialNumber === updateSmartphone.serialNumber);
    if (index != -1){
      this.smartphoneList[index] = updateSmartphone;
    }
    return  of(this.smartphoneList);
  }

  deleteSmartphone(deleteSerialNu: string): Observable<Smartphone[]>{
    this.smartphoneList = this.smartphoneList.filter(smart => smart.serialNumber !== deleteSerialNu);
    return of(this.smartphoneList);
  }

  getSmartphone(readSerialNu:string): Observable<Smartphone | undefined>{
    const smartphone = this.smartphoneList.find(smart => smart.serialNumber === readSerialNu);
    return of(smartphone);
  }

  selectedSmartphone? : Smartphone;
  selectSmartPhone(phone:Smartphone):void {
    this.selectedSmartphone = phone;
  }

}

