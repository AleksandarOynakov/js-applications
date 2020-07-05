function cars(arr) {
    let processor = (function () {
        let collection = [];
        let commands = {
            'create': (firstObj, _, secObj) => {
                let searchedObj = collection.find(el => el.name === secObj) || null;
                let x = Object.create(searchedObj);
                Object.defineProperty(x,'name',{
                    value: firstObj,
                    enumerable: false
                });
                collection.push(x);
            },
            'set': (name, key, value) => {
                let searchedObj = collection.find(el => el.name === name);
                searchedObj[key] = value;
            },
            'print': (name) => {
                let result = [];
                let searchedObj = collection.find(el => el.name === name);
                for (const key in searchedObj) {
                    result.push(`${key}:${searchedObj[key]}`);
                }
                console.log(result.join(', '));
            }
        }
        return commands;
    })();

    for (const line of arr) {
        let args = line.split(' ');
        let command = args.shift();
        processor[command](...args);
    }
}



cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)