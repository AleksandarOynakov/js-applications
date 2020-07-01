function solve(area, vol, input) {
    let arr = JSON.parse(input);
    let result = [];
    for (const coordinates of arr) {
        result.push({ area: Math.abs(area.call(coordinates)), volume: Math.abs(vol.call(coordinates)) });
    }
    return result;
}
