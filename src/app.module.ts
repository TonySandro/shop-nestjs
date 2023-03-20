import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsuarioModule, ProdutoModule],
})
export class AppModule {}
