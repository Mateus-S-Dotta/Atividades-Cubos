function calcularVolume(diametro) {
    let pi = 3.14159;
    let volume = (4 / 3) * ((diametro / 2) ** 3);
    console.log(`O volume de uma esfera de raio ${diametro / 2} é ${volume} PI`);
    console.log("Considerando o PI, o valor passa para " + (volume * pi));
}
calcularVolume(6);