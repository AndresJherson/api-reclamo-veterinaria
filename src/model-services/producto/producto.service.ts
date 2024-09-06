import { Injectable } from '@nestjs/common';
import { ConectorService } from 'src/services/conector/conector.service';

@Injectable()
export class ProductoService {

    constructor(
        private conector: ConectorService
    )
    {}

    async readResumen()
    {
        return this.conector.executeQuery( 'select * from producto' );
    }
}