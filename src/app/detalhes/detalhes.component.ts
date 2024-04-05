import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  detalhesFilme: any;

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.obterDetalhesFilme();
  }

  obterDetalhesFilme(): void {
    this.filmeService.obterDetalhes().subscribe(
      (data) => {
        this.detalhesFilme = data;
      },
      (error) => {
        console.error('Erro ao obter detalhes do filme:', error);
      }
    );
  }
}