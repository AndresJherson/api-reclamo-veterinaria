import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductoService } from './model-services/producto/producto.service';
import { ReclamoService } from './model-services/reclamo/reclamo.service';

@Controller()
export class AppController {
    
    constructor(
        private readonly appService: AppService,
        private productoService: ProductoService,
        private reclamoService: ReclamoService
    ) {}


    @Get('producto')
    async getProducto() {
        return await this.productoService.readResumen();
    }


    @Post('reclamo')
    async getReclamo(
        @Body() body: any
    )
    {
        return await this.reclamoService.create( body.reclamo );
    }
}
