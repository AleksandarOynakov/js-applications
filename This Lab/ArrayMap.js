function arrayMap(arr,func){
    let result = [];
    arr.forEach(element => result.push(func(element)));
    return result;
}
