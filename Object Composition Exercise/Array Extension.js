(function () {
    Array.prototype.last() = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip(n) = function () {
        return this.slice(n);
    };

    Array.prototype.take(n) = function () {
        return this.slice(0, n);
    };

    Array.prototype.sum() = function () {
        return this.reduce((a, b) => a + b)[0];
    }

    Array.prototype.average() = function () {
        return this.reduce((a, b) => a + b)[0] / this.length;
    }
})();