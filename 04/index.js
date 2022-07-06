function calcularJuros(c, t, i) {
    console.log("O montante é " + (c * ((1 + (i / 100)) ** t)));
}
calcularJuros(1000, 5, 12.5);
