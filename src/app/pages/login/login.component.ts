import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
hide: boolean = false;
myForm: FormGroup;
passwordControl: FormControl = new FormControl('', Validators.required)


constructor(private authService: AuthService, private router: Router){
  this.myForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
}
ngOnInit(): void {
  
}
loginWithGoogle(){
this.authService.signWithGoogle().then((res:any)=>{
  this.router.navigateByUrl('/home')
}).catch((error:any)=>{
console.log('error', error)
alert("Voce nao tem login")
})
}

loginWithEmailAndPassword(){
const userData = Object.assign(this.myForm.value, {email: this.myForm.value.username, password: this.myForm.value.password})
this.authService.signWithEmailandPassword(userData).then((res:any)=>{
  this.router.navigateByUrl('/home')
}).catch((error:any)=>{
console.log('error', error)
alert("Voce nao tem login")
})
}
}
