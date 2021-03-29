import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'n5if3v',
    password: 'n5if3vX?9',
    database: 'inforendszerek',
    synchronize: true,
    logging: false,
    entities: [
       'src/entity/**/*.ts'
    ],
    migrations: [
       'src/migration/**/*.ts'
    ],
    subscribers: [
       'src/subscriber/**/*.ts'
    ],
    cli: {
       entitiesDir: 'src/entity',
       migrationsDir: 'src/migration',
       subscribersDir: 'src/subscriber'
    }
 };

export { connectionOptions };