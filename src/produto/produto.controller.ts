import { ProdutoRepository } from './produto.repository';
import { Controller, Post, Get } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criaProduto(@Body() dadosDoProduto) {
    this.produtoRepository.salvar(dadosDoProduto);
    return dadosDoProduto;
  }

  @Get()
  async listProdutos() {
    return this.produtoRepository.listar();
  }
}
