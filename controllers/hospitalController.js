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

exports.getAllhospital10000000 = (fail, done) => {
    pool.getConnection((err, conn) => { 
        if(err) {
            return fail(err);
        }
        let sql = "SELECT * FROM hospital WHERE hos_Subject LIKE '1%'";
        conn.query(sql, (err, rows) => {
        if(err) {
            return fail(err);
        }
        conn.release();
        done(rows);
        });
    });
};

exports.getAllhospital01000000 = (fail, done) => {
    pool.getConnection((err, conn) => { 
        if(err) {
            return fail(err);
        }
        let sql = "SELECT * FROM hospital WHERE hos_Subject LIKE '_1%'";
        conn.query(sql, (err, rows) => {
        if(err) {
            return fail(err);
        }
        conn.release();
        done(rows);
        });
    });
};

exports.getAllhospital00100000 = (fail, done) => {
    pool.getConnection((err, conn) => { 
        if(err) {
            return fail(err);
        }
        let sql = "SELECT * FROM hospital WHERE hos_Subject LIKE '__1%'";
        conn.query(sql, (err, rows) => {
        if(err) {
            return fail(err);
        }
        conn.release();
        done(rows);
        });
    });
};

exports.getAllhospital00010000 = (fail, done) => {
    pool.getConnection((err, conn) => { 
        if(err) {
            return fail(err);
        }
        let sql = "SELECT * FROM hospital WHERE hos_Subject LIKE '___1%'";
        conn.query(sql, (err, rows) => {
        if(err) {
            return fail(err);
        }
        conn.release();
        done(rows);
        });
    });
};

exports.getAllhospital00001000 = (fail, done) => {
    pool.getConnection((err, conn) => { 
        if(err) {
            return fail(err);
        }
        let sql = "SELECT * FROM hospital WHERE hos_Subject LIKE '____1%'";
        conn.query(sql, (err, rows) => {
        if(err) {
            return fail(err);
        }
        conn.release();
        done(rows);
        });
    });
};

exports.getAllhospital00000100 = (fail, done) => {
    pool.getConnection((err, conn) => { 
        if(err) {
            return fail(err);
        }
        let sql = "SELECT * FROM hospital WHERE hos_Subject LIKE '_____1%'";
        conn.query(sql, (err, rows) => {
        if(err) {
            return fail(err);
        }
        conn.release();
        done(rows);
        });
    });
};

exports.getAllhospital00000010 = (fail, done) => {
    pool.getConnection((err, conn) => { 
        if(err) {
            return fail(err);
        }
        let sql = "SELECT * FROM hospital WHERE hos_Subject LIKE '______1%'";
        conn.query(sql, (err, rows) => {
        if(err) {
            return fail(err);
        }
        conn.release();
        done(rows);
        });
    });
};

exports.getAllhospital00000001 = (fail, done) => {
    pool.getConnection((err, conn) => { 
        if(err) {
            return fail(err);
        }
        let sql = "SELECT * FROM hospital WHERE hos_Subject LIKE '%1'";
        conn.query(sql, (err, rows) => {
        if(err) {
            return fail(err);
        }
        conn.release();
        done(rows);
        });
    });
};
