const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'mysql',
  user: 'root',
  password: 'sql_server',
  database: 'test_board',
  port: '3306'
}, (err)=>{
  if(err) console.log(err);
  else console.log('DB connected');
});

const query = (sql, params) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      connection.query(sql, params, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
        connection.release();
      });
    });
  });
}

module.exports = { query };