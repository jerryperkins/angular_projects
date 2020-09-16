import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.scss']
})
export class CakeDetailsComponent implements OnInit {
  @Input() cake_to_show:any
  @Input() avg_rating: number

  constructor() { }

  ngOnInit() {
    
  }

}
