function factoriza(n) {
    let factores = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factores.push(i);
        }
    }
    return factores;
}
