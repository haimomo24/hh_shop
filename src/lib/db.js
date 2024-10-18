import mysql from 'mysql2/promise';  

const pool = mysql.createPool({  
  host: 'localhost',  
  user: 'bystzrdvhosting_admin', 
  password: 'juG2s4]+}r;TU)T', 
  database: 'bystzrdvhosting_hh_shop', 
});  

export default pool; 