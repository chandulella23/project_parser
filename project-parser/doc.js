var mammoth = require("mammoth");
var fs=require('fs');
var x=require("./words.js");

var mailData,genderData,phoneData;
var mail=[],gender=[],phone=[];

mammoth.extractRawText({path: __dirname+ "/Chandu CV.docx"})
    .then(function(result){
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion

        //writing resulted raw data to an external file;
        fs.writeFile('plainText.txt', html, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
            // success case, the file was saved
            console.log('file saved!');

            //reading file after file has written
            fs.readFile('./plainText.txt', 'utf8', function(err, contents) {

                 mail=contents.match(/\w+[.]?\w+@\w+.\w{3}/);
                 console.log(mail[0]);
                 mailData=mail[0];


                 gender=contents.match(/male/i);
                 console.log(gender[0]);
                 if(gender[0].toLowerCase() == "male")
                 {
                   genderData="Male"
                 }
                 else{
                   genderData="Female"
                 }

                 phone=contents.match(/[0-9]{10}/);
                 console.log(phone[0]);
                 phoneData=phone[0];

                 foo(mailData,genderData,phoneData);

            }); //end of reading a file
        }); //end of writing a file
    }) //end of mammoth
    .done();


function foo(email,gender,mobile)
{
  x.obj.email=email;
  x.obj.gender=gender;
  x.obj.mobile=mobile;
}


//just checkin whethere words is displaying in json format or not
var express=require('express');
var app=express();
app.get('/',(req,res)=>{
  res.send(x);
})
app.listen(3000);
