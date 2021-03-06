import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Staff } from '../classes/Staff'

export default class StaffsSeeder implements Seeder {
  public async run(_factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Staff)
      .values([
        { 
          name: "Mercy Muyoka"
        },
        { 
          name: "Kennedy Ayako"
        },
        { 
          name: "Stephanie Tomsett"
        },
        { 
          name: "Faith Kityo"
        }
      ])
      .execute()
  }
}