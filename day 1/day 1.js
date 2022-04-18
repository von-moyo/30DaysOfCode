function sum(sums) {
    let total = 0;
    for (let num of sums) {
        total += num;
    }
    return total;
}
console.log(sum([12, 56, 67, 3, 78]));
