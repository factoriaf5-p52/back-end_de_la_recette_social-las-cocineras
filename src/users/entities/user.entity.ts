// import { ListaCompra } from 'src/lista_compra/entities/lista_compra.entity';
import { Receta } from 'src/receta/entities/receta.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;


  //crear validadores de campos : email, nombre, etc....
  @Column()
  nombre_usuario: string;


//validador de contraseña requiered
  @Column()
  contraseña_registro: string;

  @Column()
  id_registro: number;

  @Column()
  insignias: number;

  @OneToMany(()=>Receta, receta =>receta.author)
  recetas:Receta[]

  // @OneToMany(()=>ListaCompra, listacompra =>listacompra.listacompra) 
  // user:User[]

}
