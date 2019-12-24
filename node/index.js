const express   = require('express');
const app       = express();
const mysql     = require('mysql');

/*
 * configure mysql client parameters by ENV vars
 */
const localPortNum  = process.env.APP_LISTEN_PORT       || 3000;
const remotePortNum = process.env.MYSQL_REMOTE_PORT     || 3306;
const mysqlHost     = process.env.MYSQL_REMOTE_HOST     || "localhost";
const mysqlUser     = process.env.MYSQL_REMOTE_USER     || "root";
const mysqlPasswd   = process.env.MYSQL_REMOTE_PW       || "1";
const mysqlDBName   = process.env.MYSQL_REMOTE_DBNAME   || "information_schema";

const healthCheckQuery = process.env.MYSQL_QUERY_STRING || "select table_name from information_schema.tables;";

/* ##############################
 * Run REST API
############################## */

app.listen(localPortNum, () => console.log(`Listening on TCP:${localPortNum}...`));

/* ##############################
 * Method routing definition
############################## */

app.get('/debug', (req, res) => {
    res.send('Simple REST API');
});

app.get('/select', (req, res) => {
    con.query(healthCheckQuery, function (err, rows, fields) {
        if (err) {
            console.log('err: ' + err);
            res.send("500");
        }
        //console.log('table_name: ' + rows[0].table_name);
        res.send("200");
    });
});

/* ##############################
 * Prepare MySQL Connection
############################## */

const con = mysql.createConnection({
    host: mysqlHost,
    user: mysqlUser,
    port: remotePortNum,
    password: mysqlPasswd, // TODO: does not support over MySQL8.0
    database: mysqlDBName,
});
con.connect();

// EOF
