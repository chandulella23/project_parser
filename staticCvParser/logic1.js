module.exports.myCode=function(){

  var x=require("./words.js");
  const fs = require('fs');

  var clearRows=[];
  var lines=[],skill=[];
  var keyword;
  var details=/detail(s)?/i;
  var project=/project(s)?/i;
  var achievements=/achievement(s)?/i;
  var ts=/skill(s)?/i;
  var academic=/academic/i;
  var position=/position/i;
  var words=[academic,project,position,achievements,ts,details];
  //var words=["ACADEMIC QUALIFICATIONS","PROJECT EXPERIECE","POSITIONS OF RESPONSIBILITY","ACHIEVEMENTS","TECHNICAL SKILLS","PERSONAL DETAILS"]
  var keySkills=['autocad','ajax','asp.net','asp.net','ado.net','gwt','android','automation','animation','angular js','artifical intelligence','bootstarp','c++','c#',
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

//Start for name
var name=[];
name=clearRows[0].split(' ');
if(name.length==1)
{
  x.obj.details.name.first_name=name[0];
  console.log(name[0]);
}
else
{
  x.obj.details.name.first_name=name[0];
  x.obj.details.name.last_name=name[name.length - 1];
  console.log(name[0]);
  console.log(name[name.length-1]);
}


//Start for Gender
    var gend1=/\bmale/i;
    var gend2=/\bfemale/i;
    if(gend1.test(clearRows))
    {
      x.obj.details.gender="Male";
      console.log("male");
    }
    else if(gend2.test(clearRows)){
      x.obj.details.gender="Female";
      console.log("female");
    }
    else{
      console.log("No gender Found");
      x.obj.details.gender="null";
    }//End of Gender

//DOB starts here
    if(/\d{1,2}(rd|th)(\s)?[a-zA-Z]+(\s|,)?\d{4}/.test(clearRows) ||  /\d{1,4}[/|-]\d{2}[|/|-]\d{1,4}/.test(clearRows))
    {
      var dob1=[];
      var dob2=[];
      var dob1=clearRows.toString().match(/\d{1,2}(,|rd|th)(\s)?[a-zA-Z]+(,)?(\s)?\d{4}/)
      var dob2=clearRows.toString().match(/\d{1,4}[/|-]\d{2}[|/|-]\d{1,4}/)
      if(dob1.length>0){
          console.log(dob1[0]);
          x.obj.details.dateOfBirth=dob1[0];
      }
      else if(dob2.length>0)
      {
          console.log(dob2[0]);
          x.obj.detaills.dateOfBirth=dob2[0];
      }
    }
    else{
      console.log("No DOB found");
      x.obj.details.dateOfBirth="null";
    } //End of DOB

//Email Starts here
    if(/\w+([.\w]+)+@[a-z]+([.][a-z]+){1,2}/.test(clearRows))
    {
      var mailId=clearRows.toString().match(/\w+([.\w]+)+@[a-z]+([.][a-z]+){1,2}/);
      console.log(mailId[0]);
      x.obj.details.email=mailId[0];
    }
    else{
      console.log("No mail found");
      x.obj.details.email="null"
    } //End of email

//Phone Number starts here
    var number=/(([\+?][\(]?([+]|[+]\d{2}?|\d{2}?)?[\)]?)?\s?[(]?\d{3}[)]?[\-|\s|\.]?\d{3}[\-|\s|\.]?\d{2}[\-|\s|\.]?\d{2})/;
    if(number.test(clearRows))
    {
      var num=[];
      num=clearRows.toString().match(/(?:[+]?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*/);
      console.log(num[0]);
      x.obj.details.mobile=num[0];
    }
    else{
      console.log("Not Found Mobile");
      x.obj.details.mobile="invalid"
    }//End of Phone Number



    //prototype for reIndexOf
    if (typeof Array.prototype.reIndexOf === 'undefined') {
    Array.prototype.reIndexOf = function (rx) {
        for (var i in this) {
            if (this[i].toString().match(rx)) {
                return i;
            }
        }
        return -1;
      };
    } //end of prototype

     for(let j=0;j<words.length;j++)
     {
       lines=[];
      console.log( 'array of strings:', clearRows.reIndexOf(words[j]));
      var index=clearRows.reIndexOf(words[j]);
      console.log("2nd one",clearRows[index]);

      if(words[j].test(clearRows))
      {
        var keyy;
        index++;
         for(let i=index;i<clearRows.length;i++)
         {

           //console.log("++++++",clearRows[i])
           keyy=clearRows[i];
           //console.log(clearRows[i+1])
           //console.log(keyy)
           const isMatch = words.some(rx => rx.test(keyy));

           if(isMatch)
           {
             break;
           }
           else{
             //console.log("true");
             //console.log(keyy);
             lines.push(keyy);

           }
           }
          //json(lines,words[j]);
          console.log(lines);
          //x.obj[words[j]]=lines;
      }

      }
  }


  function skills(clearRows){
    var count=0;
    clearRows=clearRows.toString().toLowerCase();
    console.log(keySkills.length);
    var r=/c\W/;
    if(r.test(clearRows))
    {
      skill.push("c")
    }
    for(i=0;i<keySkills.length;i++)
    {

      if(clearRows.includes(keySkills[i]))
      {
        count++;


            skill.push(keySkills[i]);
      }

    }
    x.obj["skills"]=skill.toString();
    console.log(skill);
    console.log(count);
  }

  //just checkin whethere words is displaying in json format or not
  var express=require('express');
  var app=express();
  app.get('/',(req,res)=>{
    res.send(x);
  })
  app.listen(5432);

 }
