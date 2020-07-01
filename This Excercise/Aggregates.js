function solve(arr) {
    console.log(`Sum = ${arr.reduce((a, b) => a + b)}`);
    console.log(`Min = ${arr.reduce((a, b) => {
        a[0] = (a[0] === undefined || a[0] > b) ? b : a[0];
        return a;
    }, [])}`);
    console.log(`Max = ${arr.reduce((a, b) => {
        a[0] = (a[0] === undefined || a[0] < b) ? b : a[0];
        return a;
    }, [])}`);
    console.log(`Product = ${arr.reduce((a, b) => a * b)}`);
    console.log(`Join = ${arr.reduce((a, b) => a + b, '')}`);
}

solve([1,2,0.3,4])