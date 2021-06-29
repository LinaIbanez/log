import { Component, OnInit } from '@angular/core';
import { async } from 'q';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authSvc:AuthService) { }

  ngOnInit() {
  }

 async onRegister(email, password)
  {
    /*console.log('Email', email);
    console.log('Password', password);*/
    try
    {
      const user = await this.authSvc.register(email.value, password.value);
      if(user)
      {
        console.log('User->',user);
        //Todo: CheckEmail
      }
    }catch(e){
      console.log('Error:',e);
    }
    
  }

}
