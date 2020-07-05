function processor(arr) {
    let closureProc = (function () {
        let collection = [];
        return {
            'add': (str) => collection.push(str),
            'remove': (str) => collection = collection.filter(x => x !== str),
            'print': () => console.log(collection.join(','))
        }
    })();

    arr.forEach(element => {
        if (!element.startsWith('print')) {
            let [command, value] = element.split(' ');
            closureProc[command](value);
        } else {
            closureProc['print']();
        }
    });
}