const pool = require('../mysqlpool');

function Test(name, content, picture) {
  this.name = name;
  this.content = content;
  this.picture = picture;
}

Test.prototype.testQuery = async () => {
  const [rows, fields] = await pool.query('SELECT 1');
  console.debug(rows);
  console.debug(fields);
};
