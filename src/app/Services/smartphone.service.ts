import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Smartphone} from "../Shared/Models/Smartphones";
import {smartphones} from "../Shared/mockSmartphone";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  private apiUrl = "apiUrl/smartphones" ;
  private smartphoneList:Smartphone [] = smartphones;

  constructor(private  http: HttpClient) { }


  getSmartphones(): Observable<Smartphone[]> {
    return this.http.get<Smartphone[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getSmartphoneById(id: number): Observable<Smartphone>{
    return this.http.get<Smartphone>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  // Adding CRUD Method
  addSmartphone(smartphone :Smartphone): Observable<Smartphone>{
    smartphone.id = this.generateNewId();
    this.smartphoneList.push(smartphone);
    return this.http.post<Smartphone>(this.apiUrl, smartphone).pipe(catchError(this.handleError));

  }

  updateSmartphone(smartphone:Smartphone): Observable<Smartphone | undefined>{
   const url = `${this.apiUrl}/${smartphone.id}`;
   return this.http.put<Smartphone>(url, smartphone).pipe(catchError(this.handleError));
  }

  deleteSmartphone(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
   return this.http.delete(url).pipe(catchError(this.handleError));
  }


  selectedSmartphone? : Smartphone;
  selectSmartPhone(phone:Smartphone):void {
    this.selectedSmartphone = phone;
  }

  generateNewId(): number {
    return this.smartphoneList.length > 0 ? Math.max(...this.smartphoneList.map(smartphone => smartphone.id)) + 1 :1;
  }

  private  handleError(error: HttpErrorResponse){
    console.error('API error:', error);
    return throwError(() => new Error('Server error, Please try again'));
  }

}

