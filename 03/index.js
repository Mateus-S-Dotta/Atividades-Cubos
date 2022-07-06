let tenis = 129.99;
let dinheiro = 80;

let porcentagemTenis = (100 * dinheiro) / tenis;
let valorDescontoNecessario = 100 - porcentagemTenis;
// Usando a regra de três, eu sei a porcentagem do valor que tenho (neste caso, 80) com relação ao valor total (neste caso, 129,99)
// PORTANTO, o desconto que preciso é de 100% (valor total) menos a porcentagem do valor do tenis. 100 - (porcentagem do tenis)
console.log(valorDescontoNecessario);
