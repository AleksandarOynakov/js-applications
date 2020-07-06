function solve() {
    class Figure {
        units = {
            m: 0.01,
            cm: 1,
            mm: 10,
        }

        default = 'cm';
        changeUnits(x) {
            this.default = x;
        }

        toString() {
            return `Figures units: ${this.default} Area: ${this.area} -`;
        }
    }

    class Circle extends Figure {
        constructor(r) {
            super();
            this.radius = r;
        }

        get area() {
            const r = this.radius * this.units[this.default];
            return Math.PI * r * r;
        }

        toString() {
            const r = this.radius * this.units[this.default];
            return `${super.toString()} radius: ${r}`;
        }
    }

    class Rectangle extends Figure {
        constructor(w, h, u) {
            super();
            this.width = w;
            this.height = h;
            this.default = u;
        }

        get area() {
            const w = this.width * this.units[this.default];
            const h = this.height * this.units[this.default];
            return w * h;
        }

        toString() {
            const w = this.width * this.units[this.default];
            const h = this.height * this.units[this.default];
            return `${super.toString()} width: ${w}, height: ${h}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle,
    };
}