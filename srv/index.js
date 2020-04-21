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
  
  app.get('/parlerlist', (req, res) => {
    res.json([{
      name: "スロット専門店エクサ",
      url: "https://www.p-world.co.jp/tokyo/ekusa.htm",
      latLng: [35.7765, 139.634],
    },
    {
      name: "コンサートホール成増スロット館",
      url: "https://www.p-world.co.jp/tokyo/concert-narimasu2.htm",
      latLng: [35.777, 139.633],
    },
    {
      name: "ミリオン成増７号店",
      url: "https://www.p-world.co.jp/tokyo/m7.htm",
      latLng: [35.7775, 139.631],
    }]);
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
