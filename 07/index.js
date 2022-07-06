function calculadoraCovid(po, x, t) {
    console.log("Haverá " + (po * (x ** (t / 7))) + " contaminadas")
}
calculadoraCovid(1000, 4, 100);