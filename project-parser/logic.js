module.exports.myCode=function(){

  var x=require("./words.js");
  const fs = require('fs');

  var clearRows=[];
  var lines=[];
  var keyword;
  var words=["ACADEMIC QUALIFICATIONS","PROJECT EXPERIECE","POSITIONS OF RESPONSIBILITY","ACHIEVEMENTS","TECHNICAL SKILLS","PERSONAL DETAILS"]

  function cleanStr(str) {
    return str.replace(/\r?\n|\r|\t|\n/g, '').trim();
  }

  function cleanTextByRows(data) {
    var rows,
        clearRow;

    rows = data.split("\n");

    for (var i = 0; i < rows.length; i++) {
      clearRow = cleanStr(rows[i]);
      if (clearRow) {
        clearRows.push(clearRow);
      }
    }
    //console.log(clearRows
    keyWords(clearRows);
    clearRows=clearRows.join("\n") + "\n";

    return clearRows
  }

  fs.readFile('./plainText.txt','utf8',(err,data)=>{

    if(err) throw err;
    else{
      var data  = cleanTextByRows(data);
      //console.log(clearRows);

      fs.writeFile('message.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    }
  });

  function keyWords(clearRows)
  {
    //console.log(clearRows);
    for(let j=0;j<words.length;j++)
    {
      console.log(words[j]);
      lines=[];
    if(clearRows.includes(words[j]))
    {
      let index=clearRows.indexOf(words[j]);
      for(i=index;i<clearRows.length;i++)
      {
        let keyy=clearRows[i+1]
        //console.log(keyy)
        if(words.includes(keyy))
        {
          break;
        }
        else{
          lines.push(keyy);

        }
        }
        //json(lines,words[j]);
        //console.log(lines);
        x.obj[words[j]]=lines;
    }
  }
  }

  //just checkin whethere words is displaying in json format or not
  var express=require('express');
  var app=express();
  app.get('/',(req,res)=>{
    res.send(x);
  })
  app.listen(3000);

}
