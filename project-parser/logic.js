module.exports.myCode=function(){

  var x=require("./words.js");
  const fs = require('fs');

  var clearRows=[];
  var lines=[];
  var keyword;
  var words=["ACADEMIC QUALIFICATIONS","PROJECT EXPERIECE","POSITIONS OF RESPONSIBILITY","ACHIEVEMENTS","TECHNICAL SKILLS","PERSONAL DETAILS"]
  var keySkills=['autocad','asp.net','automation','android','animation','angular','angular js','analytics','bootstap','css','core java',
                  'c#','c','c++','data structures','data minning','data analysis','desgning','embedded systems','embedded c','functional testing',
                  'graphics designs','google analytics','hardware','hadoop','information security','js','javascript','jquery','jsp','j2ee',
                  'linux','manual testing','matlab','networking','network administration','network security','network management','oracle',
                  'oracle dba','operation management','php','pascal','photoshop','research','reserch and development','r language','r studio',
                  'scala','software testing','sql','sap abap','software developmemnt','testing','technical support','shell scripting','unix'
                  ,'unigraphics','vb.net','visi design','web development','wordpress','warehouse management','xml','html','java',]
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
    skills(clearRows)
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

  function skills(clearRows){
    var count=0;
    clearRows=clearRows.toString().toLowerCase();
    //console.log(keySkills.length);
    for(i=0;i<keySkills.length;i++)
    {

      if(clearRows.includes(keySkills[i]))
      {
            console.log(keySkills[i]);
      }

    }
//console.log(count);
  }

//   //just checkin whethere words is displaying in json format or not
//   var express=require('express');
//   var app=express();
//   app.get('/',(req,res)=>{
//     res.send(x);
//   })
//   app.listen(3000);
//
 }
