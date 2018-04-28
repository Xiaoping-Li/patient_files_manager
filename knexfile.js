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
      host: process.env.database_host,
      user: process.env.database_user,
      database: process.env.database_name,
      password: process.env.database_password,
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
