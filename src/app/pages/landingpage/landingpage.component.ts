import { Component, OnInit ,Input} from '@angular/core';
import {ITile} from '../../tile/tile.component';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
 headertext:string;
skillinfo : Array<ITile>=[

  {
    name: 'HTML',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'CSS',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'JS',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'React',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'Angular',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'Webpack',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'HTML',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'CSS',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'JS',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'React',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'Angular',
    description: 'aaaa',
    img: 'assets/images/html.png'
  },
  {
    name: 'Webpack',
    description: 'aaaa',
    img: 'assets/images/html.png'
  }
]

  constructor() {
this.headertext="We are learning";
   }

  ngOnInit() {
  }

}
