import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SrvRecord } from 'dns';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    findOneByNombreUsuario(nombre_usuario: string) {
        throw new Error('Method not implemented.');
    }
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    
  ) {}


    async createUser(user: CreateUserDto){

      const userFoud = await this.userRepository.findOne({
          where:{
              nombre_usuario:user.nombre_usuario
         }
     });
    

          if(userFoud){
              return new HttpException('User already exists', HttpStatus.CONFLICT)
     }

          const newUser = this.userRepository.create(user)
              return this.userRepository.save(newUser)
        }

        getUsers(){
          return this.userRepository.find()
      }

      async getUser(id_usuario: number){
        const userFound = await this.userRepository.findOne({
          where:{
             id_usuario
            },
            relations:['recetas']
             
    });
  

        if(!userFound){
            return new HttpException('User not found', HttpStatus. NOT_FOUND)
        }
        return userFound;
    }

    async deleteUser(id_usuario: number){
      const result = await this.userRepository.delete({id_usuario});

      if(result.affected === 0){
       return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }
        return result
      }

        async updateUser (id_usuario: number, user:UpdateUserDto){
          const userFoud = await this.userRepository.findOne({where:{id_usuario}});
          if(!userFoud) {
              return new HttpException('User not found', HttpStatus.NOT_FOUND)
          }
          const updateUser = Object.assign(userFoud, user);
          return this.userRepository.save(updateUser);
   }
 }


  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   return this.userRepository.save(createUserDto);
  // }

  // findAll(): Promise<User[]> {
  //   return this.userRepository.find();
  //   relation:['receta'];
  // }

  // findOne(id: number): string {
  //   return `This action returns a #${id} user`;
  // }

  // async findOneByNombreUsuario(nombre_usuario: string): Promise<User> {
  //   return this.userRepository.findOne({ where: { nombre_usuario } });
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
