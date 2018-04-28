// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { filename: './database/pfmdb.sqlite3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'pfmdbmigrations',
    },
    seeds: { directory: './database/seeds' },
    debug: true,
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'pfmdbmigrations',
    },
    seeds: { directory: './database/seeds' },
  }
};
