import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReclamoService } from './model-services/reclamo/reclamo.service';
import { ConectorService } from './services/conector/conector.service';
import { ProductoService } from './model-services/producto/producto.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService, 
    ReclamoService,
    ProductoService,
    ConectorService
],
})
export class AppModule {}
