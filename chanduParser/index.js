var mammoth = require("mammoth");
var fs=require('fs');
var htmlBeautify = require("html-beautify")
var DomParser = require('dom-parser');
var parser = new DomParser();
var logic=require("./logic.js");

mammoth.convertToHtml({path: "./rimpy cv.docx"})
    .then(function(result){
      var j=0;
      var strongArr=[],h1Arr=[];

        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion
        var data=htmlBeautify(html).toString();

//making each and every line as a seperate string and storing in an array named arr
        var arr=[];
        arr=data.split('\n');
        for(i=0;i<arr.length;i++){
        arr[i]=arr[i].trim();
      }
        //console.log("1st ",arr[1]);

//writing into another file
        fs.writeFile('plainText.html', htmlBeautify(html), (err) => {
          if (err) throw err;
          console.log('file saved! in plainText.html');
      })
//reading content from particular file plainText.html
        fs.readFile('plainText.html', 'utf8', function(err, html){
          if (!err){
            var dom = parser.parseFromString(html);
          //  console.log( dom.getElementsByTagName('p')); //in this case,it will return total num of p tags as an empty objects
          //  console.log( "1st element in h1",dom.getElementsByTagName('h1')[0].innerHTML.trim());

            var strong =dom.getElementsByTagName('strong');
            var inputList = Array.prototype.slice.call(strong);
            console.log("input list of strong tags are :",inputList.length);
            inputList.forEach(ShowResults);

            var h1 =dom.getElementsByTagName('h1');
            var inputList1 = Array.prototype.slice.call(h1);
            console.log("input1 list of h1 tags are :",inputList1.length);
            inputList1.forEach(ShowResults1);

            //console.log(h1Arr);
            logic.logic(strongArr,arr,h1Arr);
            }
            else {
              console.log(err);
            }

            function ShowResults(value, index, ar) {
              strongArr.push(value.innerHTML)
            }

            function ShowResults1(value, index, ar) {
              h1Arr.push(value.innerHTML)
            }
        })
    })
    .done();
