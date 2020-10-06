class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(hexObject) {
        if (hexObject instanceof Hex) {
            return new Hex(this.value + hexObject.valueOf());
        }
        return new Hex(this.value + hexObject);
    }

    minus(hexObject) {
        if (hexObject instanceof Hex) {
            return new Hex(this.value - hexObject.valueOf());
        }
        return new Hex(this.value - hexObject);
    }

    parse(value) {
        return parseInt(value, 16);
    }
}
