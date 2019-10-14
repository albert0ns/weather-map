import { Component, OnInit,Input, OnChanges, Sanitizer } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {
  
  @Input() latitude:string;
  @Input() longitude:string;
  city: string;
  temp: number=123;
  weatherHourList:any=[];
  constructor(
    private sanitizer: Sanitizer,
    private http: HttpClient
  ) { }

  ngOnChanges(){
    this.obtenerClima();
  }
  ngOnInit() {
   this.obtenerClima();
  }
  obtenerClima() {
    //clima de 3 horas varios dias
    //        api.openweathermap.org/data/2.5/forecast?id=524901&lat=60.15790959006859&lon=7.437744140625&units=metric&lang=es&appid=d590f84d35fcf74bb9f07113d317ffbb
    // http://api.openweathermap.org/data/2.5/forecast?id=524901&lat=60.15790959006859&lon=7.437744140625&units=metric&lang=es&appid=d590f84d35fcf74bb9f07113d317ffbb
    //Clima en el momento 
//    http://api.openweathermap.org/data/2.5/weather?lat=60.15790959006859&lon=7.437744140625&units=metric&lang=es&appid=d590f84d35fcf74bb9f07113d317ffbb

let url = 'http://api.openweathermap.org/data/2.5/weather?'
+ 'lat=' + this.latitude
+ '&lon=' + this.longitude  
+ '&units=metric'
+ '&lang=es'
+ '&appid=d590f84d35fcf74bb9f07113d317ffbb'; // your api key here 
console.log("url1: "+url);
this.http.get(url).subscribe((data: any) => {
  console.log(data);
this.city = data.name;
this.temp = data.main.temp.toFixed(1);
});
     url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&'
            + 'lat=' + this.latitude
            + '&lon=' + this.longitude  
            + '&units=metric'
            + '&lang=en'
            + '&appid=d590f84d35fcf74bb9f07113d317ffbb'; // your api key here 
            console.log("url2: "+url);
            this.http.get(url).subscribe((data: any) => {
            this.weatherHourList=data.list;
            // this.temp = data.main.temp.toFixed(1);
           });
  }
  public getSantizeUrl(url: string) {
    // return this.sanitizer.bypassSecurityTrustUrl(url);
  } 
}
 