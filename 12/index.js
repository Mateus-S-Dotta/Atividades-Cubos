function calcularTaxa(c, n, m) {
    let i = (m / c) ** (1 / n) - 1;
    console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${i * 100}%, pois após ${n} meses você teve que pagar ${m} reais.`);
}
calcularTaxa(60000, 24, 90000);