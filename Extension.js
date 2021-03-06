// make method available to all functions
//If there is a method with this name it will not be added
Function.prototype.method = function (name, func) {
        if (!this.prototype[name]) {
                    this.prototype[name] = func;
                    }
                 };
                 
                 
//String extension methods are here
String.method('trim', function () {
            return this.replace(/^\s+|\s+$/g, ''); 
        });

String.method('trimEnd', function () {
            return this.replace(/\s+$/, ''); 
        });

String.method('trimStart', function () {
            return this.replace(/^\s+/, '');; 
        });

String.method('format', function () {
        if (arguments.length < 1) {
                //If only one parameter, we can return when as there is nothing to format
                return this;
                }
        var text=this;
        var tokenCount = arguments.length-1;
        for (var token = 0; token <= tokenCount; token++) {
                //We iterate through the text tokens and replace their spot with arguments
                text = text.replace(new RegExp("\\{" + token + "\\}", "g"), arguments[token]);
                }
        return text;

        });


String.method('reverse', function () {
            return this.split('').reverse().join('');
        });

String.method('replaceAll', function (oldValue, newValue,isCaseSensitive) {
            var flags="g";
            if((typeof isCaseSensitive == 'undefined')||(isCaseSensitive==false))
            {
                    flags=flags+"i";
            }
            return this.replace(new RegExp(oldValue, flags), newValue);
        });

String.method('removeSubsString', function (value,isCaseSensitive) {
            return this.replaceAll(value," ",isCaseSensitive);
        });

String.method('removeByForwardingIndexNumerAndLength', function (startIndex,length) {
             var s = '';
             if (startIndex > 0)
                s = this.substring(0, startIndex);

             if ((typeof length != 'undefined') && (startIndex + length < this.length))
                s += this.substring(startIndex + length, this.length);
             return s;
        });


String.method('removeByBackwardingIndexNumerAndLength', function (backIndex,length) {
             var s = '';
             if (backIndex > 0)
                s = this.substring(this.length-backIndex, this.length);

             if ((typeof length != 'undefined') && (0 < this.length-backIndex-length))
                s = this.substring(0, this.length-backIndex-length)+s;
             return s;
        });


