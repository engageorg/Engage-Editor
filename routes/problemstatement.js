const express = require("express");
const rp = require('request-promise');
const cheerio = require('cheerio');

const router = express.Router()

router.get("/", (req, res) => {
   const url = req.query.url;
    rp(url)
    .then(function(html){
    const $ = cheerio.load(html);

    //Problem Statement
    const problem_statement = $('.problem-statement > div:nth-child(2)').text()

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
    
    
    //sample-tests -  this will be a array

    res.send({title, problem_statement, time_limit, memory_limit, input_specifications, output_specifications})
    })
    .catch(function(err){
    //handle error
    });

})

module.exports = router


const url = 'https://codeforces.com/problemset/problem/1620/G';

