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




