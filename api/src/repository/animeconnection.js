import mysql from 'mysql2/promise' 


const con =  await mysql.createConnection ({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    bd: process.env.MYSQL_BD

})

export { con }
