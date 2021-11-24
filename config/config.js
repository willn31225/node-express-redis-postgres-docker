require('dotenv').config();

module.exports = {
  "development": {
    "url": process.env.DATABASE_URL,
    "dialect": "postgres"
  },
  "test": {
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB_TEST,
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "localhost",
    "dialect": "postgres"
  }
};
