const mysql = require('mysql');

const config = {
    host: 'localhost',
    port: '3306',
    user: 'webe-admmin',
    password: '7mIZORyxmTEx',
    database: 'webe',
};

const pool  = mysql.createPool(config);

exports.mysqlQuery = async (sql, args) => {

    let ans = await new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                conn.release();
                reject(err);
            } else {
                conn.query(sql, args, (err, data) => {
                    conn.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
            }
        });
    });
    
    return ans;
};