import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /* mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  mySlideOptions={items: 1, dots: true, nav: false};
  myCarouselOptions={items: 5, dots: true, nav: true};
 */
  constructor() { }

  ngOnInit() {
  }

}
