//importing our json object model
var words=require('./words.js')

//pdf to text js converter
var pdftotext = require('pdftotextjs'),
    pdf = new pdftotext(__dirname + '/lella.pdf');
    pdf.getText(function(err, data, cmd) {
  if (err) {
    console.error(err);
  }
  let text1=JSON.stringify(data);
  var arr=[];
  //replace all  \n's in the raw data with space
  let text=text1.replace(/\\n/g, ' ');
  //replace all \r's in the raw data with spcae
  text=text.replace(/\\r/g, ' ');
  //replacing all spaces with |
  text=text.replace(/ /g, '|');
  //split when u find one or more than |'s'
  arr=text.split(/[|]+/)

  console.log(arr)
});

//just checkin whethere words is displaying in json format or not
var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send(words,undefined, 2);
})
app.listen(3000);
