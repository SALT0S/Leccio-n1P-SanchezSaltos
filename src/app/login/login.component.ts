import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;

    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/developer']);
    } else {
      alert('Credenciales erroneas');
    }
  }
}
