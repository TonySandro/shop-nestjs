import { AddProductDTO } from './dto/AddProduct.dto';
import { ProductRepository } from './product.repository';
import { Controller, Post, Get } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async addProduct(@Body() dadosDoProduct: AddProductDTO) {
    this.productRepository.salvar(dadosDoProduct);
    return dadosDoProduct;
  }

  @Get()
  async listProducts() {
    return this.productRepository.listar();
  }
}
