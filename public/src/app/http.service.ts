import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  add_cake(new_cake){
    return this._http.post('/cake', new_cake)
  }

  get_cakes(){
    return this._http.get('/cake')
  }

  delete_cake(id){
    return this._http.delete(`/cake/${id}`)
  }

  new_reaction(id, new_reaction){
    return this._http.post(`/reaction/${id}`, new_reaction)
  }

  show_cake(id){
    return this._http.get(`/cake/${id}`)
  }
}
