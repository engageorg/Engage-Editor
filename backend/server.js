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

app.get("/", (req,res) => {
    res.send("GFJDJKFHKSDH")

})

app.listen(5000, () => {
    console.log("Server running on 5000")
})