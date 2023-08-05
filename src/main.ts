import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import initSwagger from './docs/swagger.initializer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  await app.listen(3000);
}
bootstrap();
