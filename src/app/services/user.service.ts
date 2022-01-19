import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootURL ="https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getusers():Observable<User[]>{
    return this.http.get<User[]>(this.rootURL);
  }

  getuser(id:number):Observable<User>{
    return this.http.get<User>(this.rootURL+"/"+id);
  }

  adduser(formData:User){
    return this.http.post(this.rootURL,formData)
  }

  updateuser(formData:User){
    return this.http.put(this.rootURL+"/"+formData.id,formData)
  }

  deleteuser(id:number){
    return this.http.delete(this.rootURL+"/"+id)
  }

}
