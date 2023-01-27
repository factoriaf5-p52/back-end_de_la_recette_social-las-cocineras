
import { Receta } from "src/receta/entities/receta.entity";
import { Column, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Ingredient {
    @PrimaryGeneratedColumn()
    id_ingrediente: number;

    @Column()
    nombre: string;


  //   @OneToMany(
  //   () => Receta,
  //   (receta: Receta) => receta
  // )
  //   @JoinTable()
  // receta: Receta[];
}
