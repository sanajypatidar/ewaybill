import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http : HttpClient) { }

  first(){
    const httpOptions = {
      headers: new HttpHeaders({
        
          "Accept":"application/json",
          // "ip_address":"122.168.154.158",
          // "client_id":"04abe2b6-dcc6-4fcd-84c1-38561bc77785",
          // "client_secret":"6e0fc854-72ff-4df9-8981-a757c0fa06c5",
          // "gstin":"29AACCH2364P1Z3"
          
        })
    };

    return this.http.get("http://192.168.1.14:2000" , httpOptions)

  }


submit1(obj){
  console.log(obj)
      const httpOptions = {
      headers: new HttpHeaders({
      
       "Content-type": "application/json",
      //  "gstin": "29AACCH2364P1Z3",
      //  "client_secret": "6e0fc854-72ff-4df9-8981-a757c0fa06c5",
      //  "client_id": "04abe2b6-dcc6-4fcd-84c1-38561bc77785",
      //  "ip_address": "122.168.154.158",
      //  "Accept": "application/json"

        })
    };

    return this.http.post("http://192.168.1.14:2000/payment" ,obj,httpOptions)

  }

}