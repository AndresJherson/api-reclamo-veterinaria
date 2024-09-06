import { Injectable } from '@nestjs/common';
import { QueryTypes, Sequelize } from 'sequelize';

@Injectable()
export class ConectorService {

    private sequelize: Sequelize;

    constructor()
    {
        this.sequelize = new Sequelize( 'db_aacb0c_dbventas', 'db_aacb0c_dbventas_admin', 'ventas123456', {
            host: 'sql8020.site4now.net',
            dialect: 'mssql'
        } );
    }

    async getId( table: string ): Promise<number>
    {
        const data: any[] = await this.sequelize.query( `select max( id ) as id from ${table}`, {
            type: QueryTypes.SELECT
        } );

        const id = data[ 0 ]?.id;

        return id !== undefined ? id + 1 : 1;
    }

    async executeQuery( query: string )
    {
        const data = await this.sequelize.query( query, {
            type: QueryTypes.SELECT
        } );

        return data;
    }


    async exectueNonQuery( query: string, parameters: Record<string,any> )
    {
        const [ data, metadata ]: [ any, any ] = await this.sequelize.query( query, {
            replacements: parameters
        } );

        return metadata?.affectedRows ?? metadata;
    }
}
