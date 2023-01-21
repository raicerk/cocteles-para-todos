import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingrediente } from './ingredientes/entities/ingrediente.entity';

@Module({
  imports: [
    IngredientesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'cocteles',
      database: 'cocteles-para-todos',
      entities: [Ingrediente],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
