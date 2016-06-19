
//String test

//trim 

var demo=function(){
var trimString = "          hello this //nice world           ";

return {
    trimString:trimString,
    trim : trimString.trim(),
    trimEnd:trimString.trimEnd(),
    trimStart:trimString.trimStart(),
}
}();

for (name in demo) {
        if (typeof demo[name] !== 'function') {
                    document.write("<strong>"+name+"</strong>" + '::' + "<u>"+demo[name]+"</u>");
                    document.write("<br>");
                    }
                 } 

