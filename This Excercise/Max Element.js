function max(arr){
    return arr.reduce((a,b) => {
        a[0] = (a[0] === undefined || a[0] < b) ? b : a[0];
        return a;
    },[])[0];
}