var mammoth = require("mammoth");
mammoth.extractRawText({path: __dirname + "/Chandu CV.docx"})
    .then(function(result){
        var text = result.value; // The raw text
        text=JSON.stringify(text);
        var arr=[];
        text=text.replace(/\\n/g, ' ');
        text=text.replace(/ /g, '|');
        arr=text.split(/[|]+/)
        console.log(arr);

        var messages = result.messages;
    })
    .done();
