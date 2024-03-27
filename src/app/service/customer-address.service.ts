import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerAddress } from '../class/customer-address';
@Injectable({
  providedIn: 'root'
})
export class CustomerAddressService {

  baseUrl: string = "http://localhost:9999";
  constructor(private http: HttpClient) { }

  public saveCustomerAdd(customerAddress: any) {
    return this.http.post<CustomerAddress>(`${this.baseUrl}/saveCustomerAddress`, customerAddress);
  }

  public assignAddToCustomer(custId: number, addid: number) {
    return this.http.get<CustomerAddress>(`${this.baseUrl}/customerAssigncustomeraddress/customer/${custId}/customerAddress/${addid}`);
  }

  public getCustomerAddById(id:number){
    return this.http.get<CustomerAddress>(`${this.baseUrl}/getCustomerAddById/${id}`); 
  }

  public deleteCustomerAdd(id:number){
    return this.http.delete<CustomerAddress>(`${this.baseUrl}/deleteCustomerAddressById/${id}`);
  }
}
