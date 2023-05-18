import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { updateToken } from 'src/app/store/player.actions';
import { ExpressAPI } from '../../services/express-api.service';

interface AppState {
  player: {
    token: string;
  };
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoading = false;
  error = false;
  isRegister = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    file: [null],
  });

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder,
    private expressApiService: ExpressAPI
  ) {}

  changeForm() {
    this.isRegister = !this.isRegister;
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.get('file').setValue(file);
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.isLoading = true;

      const formData = new FormData();
      formData.append('name', this.registerForm.get('name').value);
      formData.append('email', this.registerForm.get('email').value);
      formData.append('password', this.registerForm.get('password').value);
      formData.append('file', this.registerForm.get('file').value);

      this.expressApiService.register(formData).subscribe(
        (data: any) => {
          this.store.dispatch(updateToken({ token: data.accessToken }));
          localStorage.setItem('token', data.accessToken);
          this.router.navigate(['/']);
        },
        (err) => {
          window.alert(err.error.msg);
          this.error = true;
        }
      );
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const user = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      };

      this.expressApiService.login(user).subscribe(
        (data: any) => {
          this.store.dispatch(updateToken({ token: data.accessToken }));
          localStorage.setItem('token', data.accessToken);
          this.router.navigate(['/']);
        },
        (err) => {
          window.alert(err.error.msg);
          this.error = true;
        }
      );
    }
  }
}
