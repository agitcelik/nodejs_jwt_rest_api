const env = {
  database: 'your_db_name',
  username: 'your_user_name',
  password: 'your_password',
  host: '...',
  dialect: '...',

  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;
