import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  constructor(private router: Router) { }

  verDetalhes() {
    // Supondo que você tenha uma rota '/detalhes/:id' para exibir os detalhes do filme
    const filmeId = 1; // Você precisaria obter o ID do filme de alguma fonte, como por exemplo, um serviço
    this.router.navigate(['/detalhes', filmeId]);
  }

}
