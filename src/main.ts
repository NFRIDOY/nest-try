import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // Configure Swagger options
  const config = new DocumentBuilder()
    .setTitle('NestJS Try API')
    .setDescription('Interactive API documentation')
    .setVersion('1.0')
    .addTag('NestJs Try')
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Setup the UI at http://localhost:3000/api
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
