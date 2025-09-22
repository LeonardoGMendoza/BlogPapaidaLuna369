import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ultimosVideos = [
    {
      titulo: 'Vídeo mais recente do canal',
      descricao: 'Confira o conteúdo mais recente publicado no canal PapaidaLuna369!',
      link: 'https://www.youtube.com/watch?v=lGGGJifzc38'
    },
    {
      titulo: 'Outro vídeo interessante',
      descricao: 'Mais um conteúdo especial para você!',
      link: 'https://www.youtube.com/@PapaidaLuna369'
    },
    {
      titulo: 'Destaque do canal',
      descricao: 'Não perca este vídeo incrível!',
      link: 'https://www.youtube.com/@PapaidaLuna369'
    }
  ];

  // Sistema de comentários REAL
  novoComentario = {
    nome: '',
    mensagem: ''
  };

  comentarios: any[] = [];

  adicionarComentario() {
    if (this.novoComentario.nome && this.novoComentario.mensagem) {
      const comentario = {
        nome: this.novoComentario.nome,
        mensagem: this.novoComentario.mensagem,
        data: 'agora mesmo',
        avatar: this.gerarAvatar()
      };

      this.comentarios.unshift(comentario);

      // Limpa o formulário
      this.novoComentario.nome = '';
      this.novoComentario.mensagem = '';
    }
  }

  private gerarAvatar(): string {
    const avatares = ['👤', '😊', '😎', '🤩', '😍', '🔥', '⭐', '🎯'];
    return avatares[Math.floor(Math.random() * avatares.length)];
  }
}
