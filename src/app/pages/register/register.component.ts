import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide: boolean = false;
  myForm: FormGroup;
  passwordControl: FormControl = new FormControl('', Validators.required)
constructor(private authService: AuthService, private router: Router){
  this.myForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
}

ngOnInit(): void {
  
}
registerWithEmailAndPassword(){
  const userData = Object.assign(this.myForm.value, {email: this.myForm.value.email, password: this.myForm.value.password, name: this.myForm.value.name, confirmPassword: this.myForm.value.confirmPassword})
  this.authService.registerWithEmailAndPassword(userData).then((res:any)=>{
    console.log(
      res
    )
    alert('cadastrado com sucesso')
    this.router.navigateByUrl('/')
  }).catch((error:any)=>{
  alert(error)
  })
  }
}
