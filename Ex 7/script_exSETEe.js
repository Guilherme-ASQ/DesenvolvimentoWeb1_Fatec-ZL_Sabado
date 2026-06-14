function converterTemperatura(){
    const textoTemperaturaCelsius = document.getElementById('campoConverter').value;
    const C = parseFloat(textoTemperaturaCelsius);
    const F = (C * 1.8) + 32;
    document.getElementById('campoFinal').textContent = F + " graus Fahrenheit.";
    //°F
}