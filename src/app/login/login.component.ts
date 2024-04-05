import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(email: string, password: string, event: Event) {
    event.preventDefault(); 
  
    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    this.isLoading = true;
  
    const data = { email, password };
  
    this.http.post<any>('https://reqres.in/api/login', data)
      .subscribe({
        next: (response) => {
          console.log('Login bem-sucedido. Token:', response.token);
          sessionStorage.setItem('auth-token', response.token);
          this.router.navigate(['/user']);
        },
        error: (error) => {
          console.error('Erro ao fazer login:', error);
          alert('Erro ao fazer login. Por favor, verifique suas credenciais.');
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }
}
