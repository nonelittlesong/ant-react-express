const pool = require('../mysqlpool');

function Demo(name, content, picture) {
  this.name = name;
  this.content = content;
  this.picture = picture;
}

Demo.prototype.testQuery = async () => {
  console.log('testQuery start');
  const [rows, fields] = await pool.query('SELECT 1');
  console.debug(rows);
  console.debug(fields);
  return fields;
};

module.exports = Demo;
