function rect(arr) {
    let result = [];
    for (const rect of arr) {
        let [width, height] = rect;
        result.push({
            width,
            height,
            area: function () { return this.width * this.height },
            compareTo: function (other) {
                return other.area() - this.area() === 0 ? other.width - this.width : other.area() - this.area();
            }
        });
    }
    return result.sort((a, b) => {
        if (b.area() - a.area() !== 0) {
            return b.area() - a.area();
        }
        return b.width - a.width;
    });
}
