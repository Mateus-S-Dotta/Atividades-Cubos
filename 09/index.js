function ladosDoPoligono(numeroDeAngulos) {
    let somaAngulosInternos = (numeroDeAngulos - 2) * 180;
    console.log("A soma de todos os angulos é de " + somaAngulosInternos);
    console.log("E cada um deles tem " + (somaAngulosInternos / numeroDeAngulos))
}
ladosDoPoligono(3);