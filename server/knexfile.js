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
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost', // update this
      database: 'pfmdb', // if you want to use a different database change this name
      user:     'username', // update this with the user you use to connect to MySQL
      password: 'password', // update this with the password of the user you use to connect to MySQL
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
