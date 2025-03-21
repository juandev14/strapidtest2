module.exports = ({ env }) => ({
  connection: {
    client: 'mysql2', // Cambia de 'mysql' a 'mysql2'
    connection: {
      host: env('DATABASE_HOST', 'mysql'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'dbprueba1'),
      user: env('DATABASE_USERNAME', 'usermysql1'),
      password: env('DATABASE_PASSWORD', '123456'),
      ssl: false,
    },
  },
});
