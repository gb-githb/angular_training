import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usersList';
  noOfDisplayedUsers:number = 4;
  // noOfUsers:number = this.usersArray.length;

  onLoadMore(){
    
    if (this.noOfDisplayedUsers < this.usersArray.length){
      this.noOfDisplayedUsers += 4;
    }
  }

  public  usersArray:any[]  = 
  [
    {uname  :  "Smith",  gender:  "M"},
    {uname  :  "Scott",  gender:  "m"},
    {uname  :  "Nancy",  gender:  "F"},
    {uname  :  "Ruth",   gender:  "f"},
    {uname  :  "Smith",  gender:  "M"},
    {uname  :  "Scott",  gender:  "m"},
    {uname  :  "Nancy",  gender:  "F"},
    {uname  :  "Ruth",   gender:  "f"}, 
    {uname  :  "Smith",  gender:  "M"},
    {uname  :  "Scott",  gender:  "m"},
    {uname  :  "Nancy",  gender:  "F"},
    {uname  :  "Ruth",   gender:  "f"},
    {uname  :  "Smith",  gender:  "M"},
    {uname  :  "Scott",  gender:  "m"},
    {uname  :  "Nancy",  gender:  "F"},
    {uname  :  "Ruth",   gender:  "f"},
  ];
}
