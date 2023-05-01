import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingrediente } from './ingredientes/entities/ingrediente.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DATABASE_HOST'),
        port: parseInt(config.get<string>('DATABASE_PORT')) || 3306,
        username: config.get<string>('DATABASE_USER'),
        password: config.get<string>('DATABASE_PASSWORD'),
        database: config.get<string>('DATABASE_BASE'),
        entities: [Ingrediente],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    IngredientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
