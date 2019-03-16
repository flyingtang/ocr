
const tesseract = require('node-tesseract');

const picPath = "aa.png"

tesseract.process(picPath,function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
});