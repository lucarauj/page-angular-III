import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  
  private apiKey = '34d20a5982f3d8c2d89999ef290a81e8';
  private language = 'pt-BR';

  constructor(private http: HttpClient, private router: Router) { } 

  obterDetalhes(): Observable<any> {
   
    const url = this.router.url;
    const parts = url.split('/');
    const filmeId = parts[parts.length - 1];

    const apiUrl = `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${this.apiKey}&language=${this.language}`;

    return this.http.get<any>(apiUrl).pipe(
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
    );
  }
}
