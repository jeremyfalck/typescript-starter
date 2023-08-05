import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function initSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Nestjs Swagger example')
    .setDescription('Nestjs Swagger API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

export default initSwagger;
