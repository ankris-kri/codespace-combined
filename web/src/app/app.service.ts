import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get("https://ankris-kri-automatic-eureka-x54x6g54rrvh6q6-5000.preview.app.github.dev/data")
  }
}
