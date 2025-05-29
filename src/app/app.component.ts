import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pepe';
  listadesugerencias: Sugerencia[] = [];
  titulo = '';
  descripcion = '';
  categoria = '';
  publico = '';
  sugerenciaactual = 0;
  categorias: string[] = ["Tecnología", "Salud", "Educación", "Entretenimiento", "Deportes", "Otros"];
  ingresarSugerenciatitulo(event: Event) {
    this.titulo = (event.target as HTMLInputElement).value;
  }
  ingresarSugerenciadescripcion(event: Event) {
    this.descripcion = (event.target as HTMLInputElement).value;
  }
  ingresarSugerenciacategoria(event: Event) {
    this.categoria = (event.target as HTMLInputElement).value;
  }
  ingresarSugerenciapublico(event: Event) {
    this.publico = (event.target as HTMLInputElement).value;
  }
  agregarSugerencia() {
    if (this.titulo.trim() === '' || this.descripcion.trim() === '' || this.categoria.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
    const su = new Sugerencia(this.titulo, this.descripcion, this.categoria, "Pendiente", this.publico);
    this.listadesugerencias.push(su);
  }
  eliminarSugerencia(index: number) {
    this.listadesugerencias.splice(index, 1);
  }
}
export class Sugerencia {
  titulo: string;
  descripcion: string;
  categoria: string;
  estado: string;
  publico: string;
  constructor(
    titulo: string,
    descripcion: string,
    categoria: string,
    estado: string,
    publico: string) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.estado = estado;
    this.publico = publico;
  }
}
