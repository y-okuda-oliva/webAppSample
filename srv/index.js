import express from 'express';
// import test from './test.js';
// import socketIO from "socket.io";
// var mongo = require('mongodb');
// var monk = require('monk');



// const query = {
//   text: 'SELECT $1 FROM $2',
//   values: ['name', 'test'],
// }

export default (app) => {
  const port = process.env.PORT || 3000
  app.set('port', port)
  app.use(express.json());
  
  app.get('/gomi', (req, res) => {
    res.json({msg: 'morimori'});
    // console.log(test.testMethod("gorigori"));
  //   client.query(query)
  // .then(res => console.log(res.rows[0]))
  // .catch(e => console.error(e.stack))


  });
  
  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
  
  // optional support for socket.io
  
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
}
