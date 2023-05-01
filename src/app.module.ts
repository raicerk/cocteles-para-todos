import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsModule } from './ingredients/ingredients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './ingredients/entities/ingredient.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TipoDeCantidadModule } from './tipo-de-cantidad/tipo-de-cantidad.module';
import { QuantityTypeModule } from './quantity-type/quantity-type.module';

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
        entities: [Ingredient],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    IngredientsModule,
    TipoDeCantidadModule,
    QuantityTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
