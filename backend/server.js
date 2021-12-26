const rp = require('request-promise');
const cheerio = require('cheerio');
const url = 'https://codeforces.com/problemset/problem/1620/G';

rp(url)
  .then(function(html){
    const $ = cheerio.load(html);

    //Problem Statement
    const problemStatement = $('.problem-statement > div:nth-child(2)').text()

    //Title
    const title = $('.problem-statement > div:nth-child(1) > .title').text()

    //Time limit
    const time_limit = $('.problem-statement > div:nth-child(1) > .time-limit').text().replace('time limit per test', '');

    //Memory limit
    const memory_limit = $('.problem-statement > div:nth-child(1) > .memory-limit').text().replace('memory limit per test', '');
 
    //input-specifications
    const input_specifications = $('.problem-statement > div:nth-child(3)').text().replace('Input', '');
   
    //output-specifications
    const output_specifications = $('.problem-statement > div:nth-child(4)').text().replace('Output', '');
    console.log(output_specifications)
    
   //sample-tests -  this will be a array
  })
  .catch(function(err){
    //handle error
  });

const app = require('express')()
const express = require('express');
const login = require('./routes/login')
const signup = require('./routes/signup')
const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/storage");

<<<<<<< HEAD
const firebaseConfig = {
  apiKey: "AIzaSyAp2cQvNNp8fUKOv6kO_7wR5IsKROCoh14",
  authDomain: "engage-6ef42.firebaseapp.com",
  projectId: "engage-6ef42",
  storageBucket: "engage-6ef42.appspot.com",
  messagingSenderId: "27842359842",
  appId: "1:27842359842:web:e8f5b15f6a86ac66fa507b",
  measurementId: "G-EVEY2DP36T",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  

app.use('/signup', signup)
app.use('/login', login)
=======
app.get("/", (req,res) => {
    res.send("GFJDJKFHKSDH")

})
>>>>>>> fc34d1cc01a48cad8fe6706da676fd76315169c0

app.listen(5000, () => {
    console.log("Server running on 5000")
})