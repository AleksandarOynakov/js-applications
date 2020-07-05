function factory(objString) {
    let arrObj = JSON.parse(objString);
    let result = {};
    arrObj.forEach(obj => {
        Object.assign(result, obj);
    });
    return result;
}