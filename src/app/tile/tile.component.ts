import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
@Input() tileInfo : ITile
  constructor() { }

  ngOnInit() {
  }

}
export interface ITile{
name:string;
img:string;
description:string;
}