import { Ingrediente } from 'src/ingrediente/entities/ingrediente.entity';

export class CretareRecetaDto {
  id_receta: number;
  valoracion: number;
  tiempo_cocina: number;
  num_veces_compartido: number;
  pais: string;
  comentarios: string;
  instrucciones: string;
  tipo_cocina: number;
  nombre_receta: string;
  authorId:number;
}