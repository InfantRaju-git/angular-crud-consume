import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../services/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service: UserService) { }

  alluser:User[];
  user:User={
    id: null,
    userId: null,
    title: '',
    body: ''
  };

  ngOnInit(): void {
    this.service.getusers().subscribe((data:User[])=>{this.alluser=data;});
  }

  showuser(id):void{
    this.service.getuser(id).subscribe((data:User)=>{this.user=data;});
  }

  createuser(formData:User){
    this.service.adduser(formData).subscribe((data:any)=>{console.log("added user",data)})
  }

  changeuser(formData:User){
    this.service.updateuser(formData).subscribe((data:any)=>{console.log("updated user",data)})
  }

  removeuser(id){
    this.service.deleteuser(id).subscribe((data:any)=>{console.log("deleted user",data)})
  }
}