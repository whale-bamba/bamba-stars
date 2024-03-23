module.exports = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    migrationsTableName: "migrations",
    synchronize: true,
    logging: true,
    entities: ["./dist/entities/*.js"],
    migrations: ["./dist/migrations/*.js"],
    cli: {
      migrationsDir: "src/migrations",
      entitiesDir: "dist/entities/*.js"
    }
  };