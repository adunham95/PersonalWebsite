import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'element-block',
  templateUrl: './element-block.component.html',
  styleUrls: ['./element-block.component.css']
})
export class ElementBlockComponent implements OnInit {

  @Input('name') elementName: string;
  @Input('color') elementColor: string;
  @Input('title') elementTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
