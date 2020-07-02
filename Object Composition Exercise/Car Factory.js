function car(obj) {
    let engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 }
    }
    let { model, power, color, carriage, wheelsize } = obj;

    let engine = Object.values(engines).find(value => value.power >= power);
    if (wheelsize % 2 === 0) {
        wheelsize--;
    }

    return {
        model,
        engine,
        carriage: { type: carriage, color },
        wheels: [wheelsize,wheelsize,wheelsize,wheelsize]
    }
}
let input = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};
console.log(car(input))