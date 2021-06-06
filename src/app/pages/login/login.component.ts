import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import   firebase   from 'firebase/app'
@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string=''
password:string=''
user!:any
  constructor(public auth:AngularFireAuth) { }

  ngOnInit(): void {
  }
loginGoogle(){
this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider ).then(res=>this.user=res)
}

loginEmail(){
  console.log('ostias',this.email,this.password)
this.auth.signInWithEmailAndPassword(this.email,this.password).then(res=>this.user=res)
}
logout(){
  this.auth.signOut()
}
}
