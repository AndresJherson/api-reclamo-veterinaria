import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConectorService } from 'src/services/conector/conector.service';

@Injectable()
export class ReclamoService {

    tableName = 'reclamo';

    constructor(
        private conector: ConectorService
    )
    {}


    async getId()
    {
        return await this.conector.getId( this.tableName );
    }

    async create( json: any )
    {
        const id = await this.getId();

        const affectedRows = await this.conector.exectueNonQuery(
            `
                insert into reclamo values (
                    :id,
                    :nombre,
                    :dni,
                    :celular,
                    :descripcion
                )
            `,
            {
                id: id ?? null,
                nombre: json.nombre ?? null,
                dni: json.dni ?? null,
                celular: json.celular ?? null,
                descripcion: json.descripcion ?? null
            }
        );

        if ( affectedRows === 0 ) throw new InternalServerErrorException( 'NINGUN DATO HA SIDO INSERTADO' );

        return affectedRows;
    }

}