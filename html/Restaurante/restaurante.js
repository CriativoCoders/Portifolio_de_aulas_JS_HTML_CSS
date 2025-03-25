function CalcularTotal() {
    const pratoSelect = document.getElementById('prato');
    const SombremesaSelect = document.getElementById('Sobremesa');
    const quantidadeInput = document.getElementById('quantidade');
    const resultadoElement = document.getElementById('resultado');

    const pratoValor = parseFloat(pratoSelect.value);
    const SobremesaValor = parseFloat(SombremesaSelect.value);
    const quantidade = parseInt(quantidadeInput.value);

    // if (pratoValor === 0) {
    //     resultadoElement.textContent = 'Por favor, selecione um prato.';
    //     return;
    // }

    const total = pratoValor + SobremesaValor * quantidade;
    resultadoElement.textContent = `O total é: R$ ${total.toFixed(2)}`;

}