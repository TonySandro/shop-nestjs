import { ProdutoController } from './produto.controller';
import { Module } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class ProdutoModule {}
