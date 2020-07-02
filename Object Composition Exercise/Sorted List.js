function sorted() {
    let collection = [];
    function add(element) {
        collection.push(element);
        this.size++;
        collection = collection.sort((a, b) => a - b);
    }

    function remove(index) {
        if (index >= 0 && index < collection.length) {
            collection.splice(index, 1);
            this.size--;
            collection = collection.sort((a, b) => a - b);
        }
    }

    function get(index){
        if (index >= 0 && index < collection.length) {
            return collection[index];
        }
    }
    return {
        add,
        remove,
        get,
        size: 0
    }
}

let a = sorted();
a.add(5);
console.log(a.size)

let b = sorted();

console.log(b.size)