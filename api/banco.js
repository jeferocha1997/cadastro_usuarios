import mysql from "mysql";

export const banco = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "banco_dadoso",
    port: 3300,
});