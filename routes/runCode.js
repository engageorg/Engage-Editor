const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/', async(req, res, next) => {
  let body  = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  }
  let body1  = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  }
  let body2  = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  }
  let output = []
  if((req.body.stdin === '' && req.body.testcases[0].i1 === '') || req.body.stdin !== ''){
    console.log("WORK")
    body.stdin = req.body.stdin
    body.language = req.body.language
    body.versionIndex = req.body.versionIndex
    body.script = req.body.script
    fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    .then(json => console.log(json));
  }else if(req.body.testcases[0].i1 !== ''){
    if(req.body.testcases[0].i1 !== ''){
      body.stdin = req.body.testcases[0].i1
      body.language = req.body.language
      body.versionIndex = req.body.versionIndex
      body.script = req.body.script
    }
    if(req.body.testcases[1].i2 !== ''){
      body1.stdin = req.body.testcases[1].i2
      body1.language = req.body.language
      body1.versionIndex = req.body.versionIndex
      body1.script = req.body.script
    }
    if(req.body.testcases[2].i3 !== ''){
      console.log("WROKING - 3")
      body2.stdin = req.body.testcases[2].i3
      body2.language = req.body.language
      body2.versionIndex = req.body.versionIndex
      body2.script = req.body.script
    }
    const fetch1 = fetch('https://api.jdoodle.com/v1/execute', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json())
    
    const fetch2 = req.body.testcases[1].i2 !== ''? Promise.all([fetch1,     
      fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      body: JSON.stringify(body1),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    ])
     : fetch1;
     const fetch3 = req.body.testcases[2].i3 !== ''? Promise.all([fetch1,fetch2,     
      fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      body: JSON.stringify(body2),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
    ])
     : fetch2;
    fetch3.then(result => {
      //result is a array
      let output = []
      console.log(result)
      if(result.length){
        output = {o1:result[0].output, o2:result[1].output, o3:''}
          if(result[2]){
            output.o3 = result[2].output
          }
          res.send(output)
        }
      //result is a object
      else{
        output = {o1:result.output, o2:'', o3:''}
        res.send(output)
      }
    })
  }
});


module.exports = router; 