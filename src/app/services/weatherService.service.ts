
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/Weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }


  key:string;
  getWeather(city:string):Observable<Weather[]>{
    this.key="b2c3fe177b09541fedddd7d348429546";
    return this.httpClient.get<Weather[]>("https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid="+this.key)
  }

  // public createOrder(order: Orders) {
  //   return this.httpClient.post<Orders>("http://localhost:8080/addOrder", order);
  // }
  // public findAll(): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/findAllOrders");
  // }

  
  // public findAllByStatutDemand(): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/getAllOrdersByStatutsDemand");
  // }

  // public findAllByStatutConfirmed(): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/getAllOrdersByStatutsConfirm");
  // }

  // public findAllByStatutDelivery(): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/getAllOrdersByStatutsDelivery");
  // }

  // public findAllByStatutRetour(): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/getAllOrdersByStatutsRetour");
  // }

  // public findAllByStatutUncertain(): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/getAllOrdersByStatutsUncertain");
  // }

  // public findAllByStatutDone(): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/getAllOrdersByStatutsDone");
  // }


  // public findAllByStatus(status:Status): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/findAllByStatus?status="+status);
  // }

  // public findAllbetweenDate(startDate:string,endDate:string): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/getAllOrdersByDatesitemsBetween?startDate="+startDate+"&endDate="+endDate);
  // }

  // public findByCurrentDate(currentDateStart:string,currentDateEnd:string): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/getAllOrdersByDateOrder?currentDateStart="+currentDateStart+"&currentDateEnd="+currentDateEnd);
  // }

  // public findByCity(city:string): Observable<Orders[]> {
  //   return this.httpClient.get<Orders[]>("http://localhost:8080/getAllOrdersByCity?city="+city);
  // }




  // public deleteOrder(order: Orders) {
  //   return this.httpClient.get<Orders>("http://localhost:8080/deleteOrderById?id=" + order.id, { responseType: 'text' as 'json' });
  // }

  // public editOrder(order: Orders) {
  //   return this.httpClient.post<Orders>("http://localhost:8080/editOrderbyid", order);
  // }
  // public getOrderById(order: Orders) {
  //   return this.httpClient.get<Orders>("http://localhost:8080/getOrder?id=" + order.id);
  // }
  // public getCandidatebyMail(candidate: Candidate) {
  //   return this.http.get<Candidate>(this.url + '/getCandidateByMail?mail=' + candidate.mail);
  // }
 

}

 
  




  