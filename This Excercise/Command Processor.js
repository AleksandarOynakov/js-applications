function processor(arr) {
    let command = (function () {
        let text = '';
        return {
            append: (str) => text += str,
            removeStart: (n) => text = text.slice(Number(n)),
            removeEnd: (n) => text = text.slice(0, text.length - Number(n)),
            print: () => console.log(text)
        }
    })();
    for (const line of arr) {
            let [comm, value] = line.split(' ');
            command[comm](value);
    }
}

processor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);
