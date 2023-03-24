import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { CaracteristicaProductDTO } from './ProductDetails.dto';

export class AddProductDTO {
  @IsNotEmpty()
  name: string;
  valor: number;
  quantidade: number;
  descricao: string;

  @Type(() => CaracteristicaProductDTO)
  caracteristicas: CaracteristicaProductDTO[];

  imagens: string[];
  categoria: string;
}
