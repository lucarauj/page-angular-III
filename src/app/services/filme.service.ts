import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  
  private apiKey = '34d20a5982f3d8c2d89999ef290a81e8';
  private language = 'pt-BR';

  constructor(private http: HttpClient) { } 

  obterDetalhes(filmeId: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${this.apiKey}&language=${this.language}`;

    return this.http.get<any>(url).pipe(
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

}
