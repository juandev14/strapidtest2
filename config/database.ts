import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'mysql'), // Nombre del servicio en docker-compose
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'dbprueba1'), // Nombre de la BD en docker-compose
      user: env('DATABASE_USERNAME', 'usermysql1'), // Usuario en docker-compose
      password: env('DATABASE_PASSWORD', '123456'), // Contraseña en docker-compose
      ssl: false, // No necesitas SSL en este caso
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
