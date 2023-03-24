import { ProductModule } from './produto/product.module';
import { UserModule } from './usuario/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule, ProductModule],
})
export class AppModule {}
