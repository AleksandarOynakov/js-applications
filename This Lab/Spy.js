function Spy(obj, method) {
    let original = obj[method];
    let result = { count: 0 };

    obj[method] = function (){
        result.count++;
        return original.apply(this,arguments);
    }

    return result;
}

let a = Spy(console, 'log');

console.log('a')
console.log(a)