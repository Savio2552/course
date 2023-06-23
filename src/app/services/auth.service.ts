import { Injectable } from '@angular/core';
import {GoogleAuthProvider } from 'firebase/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs: AngularFireAuth, private router: Router) { 
    this.afs.onAuthStateChanged(function(user){
      if(user){
      router.navigateByUrl('/home')
      }else{
      router.navigateByUrl('/')
      }
    })
  }

 
   
  
  signWithGoogle(){
    return this.afs.signInWithPopup(new GoogleAuthProvider())
  }

  registerWithEmailAndPassword(user: {email:any, password:any}){
    return this.afs.createUserWithEmailAndPassword(user.email,user.password)
  }
  signWithEmailandPassword(user: {email:any, password:any}){
    return this.afs.signInWithEmailAndPassword(user.email,user.password)
  }
}
