
//String test

//trim 

var demo=function(){
var trimString = "          hello this //nice world           ";
var formateString="Hi {0} good{1}";

return {
    trimString:trimString,
    trim : trimString.trim(),
    trimEnd:trimString.trimEnd(),
    trimStart:trimString.trimStart(),
    formateString:formateString,
    format:formateString.format("anik","morning"),
    reverse:trimString.reverse(),
}
}();

for (name in demo) {
        if (typeof demo[name] !== 'function') {
                    document.write("<strong>"+name+"</strong>" + '::' + "<u>"+demo[name]+"</u>");
                    document.write("<br>");
                    }
                 } 

