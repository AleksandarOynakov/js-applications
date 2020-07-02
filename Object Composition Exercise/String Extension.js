(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    };

    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return ".".repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.substr(0, n - 2).lastIndexOf(" ");
            if (lastIndex != -1) {
                return this.substr(0, lastIndex) + "...";
            } else {
                return this.substr(0, n - 3) + "...";
            }
        }
    };

    String.format = function (str, ...params) {
        
        let pattern = /{([0-9]+)}/g;
        let index;
        while (index = pattern.exec(str)) {
            console.log(index[1]);
            if (params[index[1]]) {
                str = str.replace(index[0], params[index[1]]);
            }
        }
        return str;
    }
})();

var testString = 'quick brown fox jumps over the lazy dog';
console.log(testString.ensureStart('quick'));
// ⦁	truncate(n) - truncates the string to n characters by removing words and appends an ellipsis (three periods) to the end. If a string is less than n characters long, return the same string. If it is longer, split the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n. If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n amount of periods.
// ⦁	format(string, …params) - static method to replace placeholders with parameters. A placeholder is a number surrounded by curly braces. If parameter index cannot be found for a certain placeholder, do not modify it. Note static methods are attached to the String object instead of it’s prototype. See the examples for more info.
