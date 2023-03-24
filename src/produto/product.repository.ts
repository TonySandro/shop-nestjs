import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class ProductRepository {
  private products = [];

  async salvar(product) {
    this.products.push(product);
  }

  async listar() {
    return this.products;
  }
}
