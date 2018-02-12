var mammoth = require("mammoth");
var fs = require('fs')
var arr=[]
mammoth.extractRawText({path: "sample3.docx"})
    .then(function(result){

        var text = result.value; // The raw text
        text1 = text.replace(/\s+/g,' ').trim();
        console.log(text)
        fs.writeFile('temp.txt', text1.toLowerCase(), function(err, data){
        if (err) console.log(err);
        console.log("Successfully Written to File.");  
       
        // fs.readFile('temp.txt','utf8', function(err, buf) {
        //     console.log(buf);
        //     console.log('Gender : ',buf.includes('male'))
        //     var arr = buf.match('/\w+[.]?\w+@\w+.\w{3}/')
        //    // console.log(arr[0])
        //   }); 
        fs.readFile('./temp.txt', 'utf8', function(err, contents) {
          arr=contents.match(/\w+[.]?\w+@\w+.\w{3}/);
            console.log(arr[0]);
            
        });
    });
    })
    .done();

    exports.array = "{a,a,a,a,a,a}"
    
    