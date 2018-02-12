module.exports.myCode=function(){

  var x=require("./words.js");
  const fs = require('fs');

  var clearRows=[];
  var lines=[];
  var keyword;
  var words=["ACADEMIC QUALIFICATIONS","PROJECT EXPERIECE","POSITIONS OF RESPONSIBILITY","ACHIEVEMENTS","TECHNICAL SKILLS","PERSONAL DETAILS"]
  var keySkills=['autocad','ajax','asp.net','asp.net','ado.net','gwt','android','automation','animation','angular js','artifical intelligence','bootstarp','c','c++','c#',
                  'core java','css','computer hardware','cloud computing','computer operating system','dataware','data analysis','data science','data structure','database management',
                  'data entty','embedded system','embedded c','express','codeigniter','functional testing','graphics design','google analytics','html','hardware','hadoop','java',
                  'jquery','javascript','js','j2ee','jsp','linux','matlab','mongodb','mongoose','networking','network administration','network security','network management',
                  'node js','node-js','react-js','reactjs','office management','operation manangemnt','microsoft excel','microsoft word','microsoft presentation','php','pascal','project management',
                  'photoshop','perl','r lanaguage','r programming','r studio','robotics','research','ruby','ruby on rails','rearch and development','software development','scala','software testing','sql',
                  'sap','abap programming','sap abap','shell scripting','seo','selenium','security','servlet','site execution','testing','technical support','tally','unix',
                  'unix shell scripting','vb.net','visual design','visi design','web development','wordpress','warehouse management','xml','xhtml',
                  'saas','hibernate','json']
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
      var data  = cleanTextByRows(data).toLowerCase();
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

//logic for key skills
function skills(clearRows){
  var r=/html/
  clearRows1=clearRows
  for(i=0;i<clearRows.length;i++){
    for(j=0;j<keySkills.length;j++){
      if(clearRows1[i].includes(keySkills[j])){
        console.log('::Technical skills::',keySkills[j])
      }
      else{
        console.log("::Nopes::")
      }
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
