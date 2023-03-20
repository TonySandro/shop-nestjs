import { UsuarioRepository } from './usuario.repository';
import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';

@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository = new UsuarioRepository();

  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
}
