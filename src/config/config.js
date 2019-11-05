module.exports ={
    development:{
        database:{
            host: 'localhost',
            port: 3306,
            name: 'pontoeletronico',
            dialect: 'mysql',
            user: 'root',
            password: 'baidek'
            
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.BD_PORT,
        }
    }

}