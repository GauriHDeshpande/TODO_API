const DB_CONFIG = {
    HOST: 'localhost',
    DB: 'todo_db',
    USER: 'root',
    PASSWORD: 'mysql@123',
    dialect: 'mysql',
    pool: {
        min: 1,
        max: 20,
        idle: 10000,
        acquire: 60000
    },
}

module.exports = DB_CONFIG;