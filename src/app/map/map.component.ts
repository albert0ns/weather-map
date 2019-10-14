import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Output('seleccionarEvent') seleccionar:EventEmitter<any> = new EventEmitter<any>();
  latitude = 61;
  longitude = 22;
  zoom = 7;
  constructor() { }

  ngOnInit() {
  }

  mapClicked($event: MouseEvent) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.seleccionar.emit($event.coords);
  }
}
