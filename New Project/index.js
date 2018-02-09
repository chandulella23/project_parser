var mammoth = require("mammoth");
var arr=[];

//var bodyParser=require('body-parser');
mammoth.convertToHtml({path: "Chandu CV.docx"})
    .then(function(result){

        var html = result.value; // The generated HTML
        //console.log(JSON.stringify(html));
        //console.log(html);

        var
        //let string=html;
        arr=html.split(/<\/[a-z]+><[a-z]+>/ );
        //arr=JSON.stringify(arr);
        console.log(arr);

        var messages = result.messages; // Any messages, such as warnings during conversion
    })
    .done();
