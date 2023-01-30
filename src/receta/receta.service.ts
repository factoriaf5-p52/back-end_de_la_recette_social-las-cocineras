import { Injectable, HttpStatus, HttpException } from '@nestjs/common';

import { Receta } from './entities/receta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CretareRecetaDto } from './dtos/create-receta.dto';
// import { ListaCompraService } from 'src/lista_compra/lista_compra.service';
import { UsersService } from 'src/users/users.service';
import { UpdateRecetaDto } from './dtos/update-receta.dto';

@Injectable()
export class RecetaService {
  constructor(
    @InjectRepository(Receta) private recetaRepository: Repository<Receta>,
    private usersservice:UsersService
  ) {}
 
 


  async createReceta(receta: CretareRecetaDto){
    const userFoud = await this.usersservice.getUser(receta.authorId);

    if(!userFoud) return new HttpException('User not found', HttpStatus.NOT_FOUND);
    

    const newReceta = this.recetaRepository.create(receta);     
    return this.recetaRepository.save(newReceta);

}
getRecetas(){
  return this.recetaRepository.find()
  relations:['author']
  
}
async getUser(id_receta: number){
  const userFound = await this.recetaRepository.findOne({
    where:{
       id_receta
      },
      relations:['author']
       
});


  if(!userFound){
      return new HttpException('User not found', HttpStatus. NOT_FOUND)
  }
  return userFound;
}

async deleteUser(id_receta: number){
  const result = await this.recetaRepository.delete({id_receta});

  if(result.affected === 0){
   return new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    return result
  }

  async updateUser (id_receta: number, receta:UpdateRecetaDto){
    const userFoud = await this.recetaRepository.findOne({where:{id_receta}});
    if(!userFoud) {
        return new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    const updateUser = Object.assign(userFoud, receta);
    return this.recetaRepository.save(updateUser);
}


}




  // async findAll(): Promise<Receta[]> {
  //   return await this.recetaRepository.find()
  //   relation:['ListaCompra'];
  // }

  // async findReceta(recetaId: number): Promise<Receta> {
  //   return await this.recetaRepository.findOne({
  //     where: { 
  //       id_receta: recetaId },
      
  //   });
  //   relation:['ListaCompra'];
  // }

  // createReceta(newReceta: CretareRecetaDto) {
  //   return this.recetaRepository.save(newReceta);
  // }

  // deleteReceta(recetaId: number) {
  //   return this.recetaRepository.delete({ id_receta: recetaId });
  // }

  // async updateReceta(recetaId: number, newReceta: CretareRecetaDto): Promise<Receta> {
  //   const toUpdate = await this.recetaRepository.findOne({
  //     where: { id_receta: recetaId },
  //   });
  //   const updated = Object.assign(toUpdate, newReceta);

  //   return this.recetaRepository.save(updated);
  // }

