import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'codespace-frontend';
  data:any = '';
  constructor(private _dataService:AppService){}

  ngOnInit():void {
    this._dataService.getdata().subscribe(data=> this.data = data)
  }
}
