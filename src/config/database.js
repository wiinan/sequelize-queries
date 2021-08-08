module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: process.env.DB_password,
    database: 'ormtest',
    port: '3001',
    define: {
        timestamps: true,
        underscored: true
    }
}

