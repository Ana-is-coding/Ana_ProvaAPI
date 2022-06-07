import mysql from 'mysql2' 


const con =  await mysql.createConnection ({
    host: process.env.MYSQL_host,
    user: process.env.MYSQL_user,
    password: process.env.MYSQL_password,
    bd: process.env.MYSQL_bd

})

export { con }
