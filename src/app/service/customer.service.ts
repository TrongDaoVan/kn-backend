import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll():Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }

  findCustomerById(id: number) {
    return this.http.get<Customer>(`${API_URL}/customer/${id}`);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + `/customer`,customer);
  }

  deleteCustomer(id: number| undefined): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customer/${id}`);
  }

  editCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customer/${id}`, customer);
  }
}
