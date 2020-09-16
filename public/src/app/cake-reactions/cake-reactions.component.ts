import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-cake-reactions',
  templateUrl: './cake-reactions.component.html',
  styleUrls: ['./cake-reactions.component.scss']
})
export class CakeReactionsComponent implements OnInit {
  @Input() i:any
  all_cakes = []
  new_reaction: any
  

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    
    this.new_reaction = { rating: 0, comment: ""}
    console.log("Here is the cake to display", this.i)
  }

  new_reaction_submit(id) {
    this._httpService.new_reaction(id, this.new_reaction)
    .subscribe(data => {
      console.log('New reaction', data)
      this.new_reaction = { rating: 0, comment: ""}
    })
  }

  delete_task(id){
    console.log("here is the cake ID to delete", id)
    this._httpService.delete_cake(id)
    .subscribe(data => {
      console.log("Cake being deleted", data)
      this.display_all_cakes()
    })
  }

  display_all_cakes() {
    this._httpService.get_cakes()
    .subscribe(data => {
      console.log('Here are all the cakes', data)
      this.all_cakes[0] = data
    })
  }

  
} 
