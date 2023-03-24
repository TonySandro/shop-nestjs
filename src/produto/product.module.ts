import { ProductController } from './product.controller';
import { Module } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {}
