import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public';
  selected_file = null
  new_cake: any
  all_cakes = []
  new_reaction: any
  cake_to_show = {}
  avg_rating: number
  show_cake_details:boolean
  

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.new_cake = {baker: '', picture: ''}
    this.display_all_cakes()
    this.show_cake_details = false
  }



  new_cake_submit() {
    this._httpService.add_cake(this.new_cake)
    .subscribe(data => {
      console.log('New Cake data', data)
      this.display_all_cakes()
      this.new_cake = { baker: '', picture: ''}
      
    })
  }

  display_all_cakes() {
    this._httpService.get_cakes()
    .subscribe(data => {
      console.log('Here are all the cakes', data)
      this.all_cakes[0] = data
    })
  }

  show_cake(id) {
    this.show_cake_details = true
    this.avg_rating = 0
    this._httpService.show_cake(id)
    .subscribe(data => {
      console.log("Here is the cake to show", data)
      this.cake_to_show = data
      for (let i = 0; i < data.comment.length; i++){
        this.avg_rating += data.comment[i].rating
      }
      this.avg_rating = this.avg_rating / data.comment.length
      this.avg_rating = this.avg_rating.toFixed(2)
      console.log("here is the average rating", this.avg_rating)
    })
  }

  // average_rating(ratings) {
  //   this.avg_rating = 0
  //   console.log("Here are the ratings", ratings)
  //   for (let i = 0; i < ratings.length; i++){
  //     this.avg_rating += ratings[i].rating
  //   }
  //   this.avg_rating = this.avg_rating / ratings.length
  //   console.log("Here is the average rating", this.avg_rating)
    
  // }


  

}
