
//String test

//trim 

var demo=function(){
var trimString = "          hello this //nice world           ";
var formateString="Hi {0} good{1}";
var replceString="Cow cow cow dog Dog dog fog fog";

return {
    trimString:trimString,
    trim : trimString.trim(),
    trimEnd:trimString.trimEnd(),
    trimStart:trimString.trimStart(),
    formateString:formateString,
    format:formateString.format("anik","morning"),
    reverse:trimString.reverse(),
    replceString: replceString,
    replaceAll: replceString.replaceAll("cow","dog"),
    replaceAllCaseSensitive: replceString.replaceAll("cow","dog",true),
    removeSubsString:replceString.removeSubsString("dog"),
    removeSubsStringCaseSensitive:replceString.removeSubsString("dog",true),
    removeByStatingIndexNumer: replceString.removeByForwardingIndexNumerAndLength(12),
    removeByStatingIndexNumerAndLength: replceString.removeByForwardingIndexNumerAndLength(12,6),
    removeByBackwardingIndexNumer: replceString.removeByBackwardingIndexNumerAndLength(3),
    removeByBackwardingIndexNumerAndLength: replceString.removeByBackwardingIndexNumerAndLength(3,4),
    contains: replceString.contains("fog"),
    containsCaseSensitive: replceString.contains("Fog",true),
}
}();

for (name in demo) {
        if (typeof demo[name] !== 'function') {
                    document.write("<strong>"+name+"</strong>" + '::' + "<u>"+demo[name]+"</u>");
                    document.write("<br>");
                    }
                 } 

