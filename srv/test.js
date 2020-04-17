
export default {testMethod}

// var { Client } = require('pg');
// var client = new Client({
//   database: 'df471g37de4gn9',
//   user: 'xbfbuwmomhiwdb', 
//   password: '3918b53914cd5e7ff04a59c95140ff62a419703efc5bb195d6557e7c6c21b120',
//   host: 'ec2-52-201-55-4.compute-1.amazonaws.com',
//   port: 5432,
// })
// const query = {
//     text: 'SELECT $1 FROM $2',
//     values: ['name', 'test'],
//   }

function testMethod(msg) {
    console.log(msg);
    console.log("testMethod!!");

    const { Client } = require('pg');
    const client = new Client({
    // connectionString: process.env.DATABASE_URL || "postgres://xbfbuwmomhiwdb:3918b53914cd5e7ff04a59c95140ff62a419703efc5bb195d6557e7c6c21b120@ec2-52-201-55-4.compute-1.amazonaws.com:5432/df471g37de4gn9",
    connectionString:"postgres://xbfbuwmomhiwdb:3918b53914cd5e7ff04a59c95140ff62a419703efc5bb195d6557e7c6c21b120@ec2-52-201-55-4.compute-1.amazonaws.com:5432/df471g37de4gn9?ssl=true&sslmode=require&sslfactory=org.postgresql.ssl.NonValidatingFactory",
    ssl: true,
    sslfactory:"org.postgresql.ssl.NonValidatingFactory",
    sslmode:"require"
    // database: 'df471g37de4gn9',
    // user: 'xbfbuwmomhiwdb', 
    // password: '3918b53914cd5e7ff04a59c95140ff62a419703efc5bb195d6557e7c6c21b120',
    // host: 'ec2-52-201-55-4.compute-1.amazonaws.com',
    // port: 5432,
    });

client.connect();

client.query('SELECT * from test;', (err, res) => {
  if (err) {
      console.log("error");
  } else {
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
}
  client.end();
});
}