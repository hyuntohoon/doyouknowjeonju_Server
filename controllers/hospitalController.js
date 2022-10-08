const mysql = require('mysql');
const cnf = require('../cnf').SQLpool;

const pool = mysql.createPool({
    connectionLimit:cnf.connectionLimit,
    host:cnf.host,
    user:cnf.user,
    password:cnf.password,
    database:cnf.database
})

exports.getAllhospital = (fail, done) => {
    pool.getConnection((err, conn) => { 
        if(err) {
            return fail(err);
        }
        let sql = "select * from hospital";
        conn.query(sql, (err, rows) => {
        if(err) {
            return fail(err);
        }
        conn.release();
        done(rows);
        });
    });
};