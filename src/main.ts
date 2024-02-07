// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: '*',
    // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    // allowedHeaders: ['Content-Type', 'Authorization'], 
  });

  await app.listen(3000);
}
bootstrap();
