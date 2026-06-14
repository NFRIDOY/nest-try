import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Configure Swagger options
  const config = new DocumentBuilder()
    .setTitle('Nest Try API')
    .setDescription('Interactive Nest.js API documentation')
    .setVersion('1.0')
    .addTag('NestJs Try')
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Setup the UI at http://localhost:3000/api/docs
  SwaggerModule.setup('api/docs', app, document);
  app.enableCors({ origin: "*" });
  await app.listen(port);
  console.log(`Nest.js application started at http://localhost:${port}/api/docs`);
}
bootstrap();
