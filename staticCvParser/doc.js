var mammoth = require("mammoth");
var fs=require('fs');
//var x=require("./words.js");
var rowbyrow=require("./logic.js");


var mailData,genderData,phoneData;
var mail=[],gender=[],phone=[],newLines=[];
var html="";

mammoth.extractRawText({path: __dirname+ "/Chandu CV.docx"})
    .then(function(result){
        html = result.value; // The generated HTML
        console.log(html);
        var messages = result.messages; // Any messages, such as warnings during conversion

        //writing resulted raw data to an external file;
        fs.writeFile('plainText.txt', html, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
            // success case, the file was saved
            console.log('file saved!');

            //reading file after file has written
            rowbyrow.myCode();

        }); //end of writing a file
    }) //end of mammoth
    .done();
