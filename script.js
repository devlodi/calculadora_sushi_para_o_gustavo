function calculateSushi() {
    var numPeople = document.getElementById('num-people').value;
    var arrozPerPerson = 386; // gramas de arroz por pessoa
    var algasPerPerson = 5;   // folhas de alga por pessoa
    var pecasPorPessoa = 30;  // peças de sushi por pessoa

    var totalArroz = numPeople * arrozPerPerson;
    var totalAlga = numPeople * algasPerPerson;
    var totalPecas = numPeople * pecasPorPessoa;

    // Cálculos para ingredientes adicionais
    var totalSalmão = document.getElementById('salmão').checked ? numPeople * 100 : 0; // 100g por pessoa
    var totalPepino = document.getElementById('pepino').checked ? numPeople * 0.5 : 0; // 1/2 pepino por pessoa
    var totalCenoura = document.getElementById('cenoura').checked ? numPeople * 0.5 : 0; // 1/2 cenoura por pessoa
    var totalCreamCheese = document.getElementById('cream-cheese').checked ? numPeople * 50 : 0; // 50g por pessoa
    var totalTofu = document.getElementById('tofu').checked ? numPeople * 100 : 0; // 100g por pessoa

    // Exibindo os resultados
    document.getElementById('total-arroz').textContent = 'Total de Arroz: ' + totalArroz + 'g';
    document.getElementById('total-alga').textContent = 'Total de Folhas de Alga: ' + totalAlga;
    document.getElementById('total-pecas').textContent = 'Total de Peças de Sushi: ' + totalPecas;

    // Exibir resultados dos ingredientes adicionais (se necessário)
    if (totalSalmão > 0) {
        document.getElementById('total-salmao').textContent = 'Total de Salmão: ' + totalSalmão + 'g';
    }
    if (totalPepino > 0) {
        document.getElementById('total-pepino').textContent = 'Total de Pepino: ' + totalPepino + ' unidade(s)';
    }
    if (totalCenoura > 0) {
        document.getElementById('total-cenoura').textContent = 'Total de Cenoura: ' + totalCenoura + ' unidade(s)';
    }
    if (totalCreamCheese > 0) {
        document.getElementById('total-cream-cheese').textContent = 'Total de Cream Cheese: ' + totalCreamCheese + 'g';
    }
    if (totalTofu > 0) {
        document.getElementById('total-tofu').textContent = 'Total de Tofu: ' + totalTofu + 'g';
    }
}

function editReferences() {
    // Mostrar campos de entrada para todos os ingredientes
    document.getElementById('input-arroz').style.display = 'inline';
    document.getElementById('input-alga').style.display = 'inline';
    document.getElementById('input-pecas').style.display = 'inline';
    document.getElementById('input-salmao').style.display = 'inline';
    document.getElementById('input-pepino').style.display = 'inline';
    document.getElementById('input-cenoura').style.display = 'inline';
    document.getElementById('input-cream-cheese').style.display = 'inline';
    document.getElementById('input-tofu').style.display = 'inline';

    // Definir valores atuais nos campos de entrada para todos os ingredientes
    document.getElementById('input-arroz').value = document.getElementById('ref-arroz').textContent.replace('g', '');
    document.getElementById('input-alga').value = document.getElementById('ref-alga').textContent;
    document.getElementById('input-pecas').value = document.getElementById('ref-pecas').textContent;
    document.getElementById('input-salmao').value = document.getElementById('ref-salmao').textContent.replace('g', '');
    document.getElementById('input-pepino').value = document.getElementById('ref-pepino').textContent;
    document.getElementById('input-cenoura').value = document.getElementById('ref-cenoura').textContent;
    document.getElementById('input-cream-cheese').value = document.getElementById('ref-cream-cheese').textContent.replace('g', '');
    document.getElementById('input-tofu').value = document.getElementById('ref-tofu').textContent.replace('g', '');
}

function restoreReferences() {
    // Restaurar valores padrão para todos os ingredientes
    document.getElementById('ref-arroz').textContent = '386g';
    document.getElementById('ref-alga').textContent = '5';
    document.getElementById('ref-pecas').textContent = '30';
    document.getElementById('ref-salmao').textContent = '100g';
    document.getElementById('ref-pepino').textContent = '0.5';
    document.getElementById('ref-cenoura').textContent = '0.5';
    document.getElementById('ref-cream-cheese').textContent = '50g';
    document.getElementById('ref-tofu').textContent = '100g';

    // Ocultar campos de entrada para todos os ingredientes
    document.getElementById('input-arroz').style.display = 'none';
    document.getElementById('input-alga').style.display = 'none';
    document.getElementById('input-pecas').style.display = 'none';
    document.getElementById('input-salmao').style.display = 'none';
    document.getElementById('input-pepino').style.display = 'none';
    document.getElementById('input-cenoura').style.display = 'none';
    document.getElementById('input-cream-cheese').style.display = 'none';
    document.getElementById('input-tofu').style.display = 'none';
}

function saveReferences() {
    // Atualizar os textos dos elementos <span> com os valores dos campos de entrada
    document.getElementById('ref-arroz').textContent = document.getElementById('input-arroz').value + 'g';
    document.getElementById('ref-alga').textContent = document.getElementById('input-alga').value;
    document.getElementById('ref-pecas').textContent = document.getElementById('input-pecas').value;
    document.getElementById('ref-salmao').textContent = document.getElementById('input-salmao').value + 'g';
    document.getElementById('ref-pepino').textContent = document.getElementById('input-pepino').value;
    document.getElementById('ref-cenoura').textContent = document.getElementById('input-cenoura').value;
    document.getElementById('ref-cream-cheese').textContent = document.getElementById('input-cream-cheese').value + 'g';
    document.getElementById('ref-tofu').textContent = document.getElementById('input-tofu').value + 'g';

    // Ocultar os campos de entrada
    document.getElementById('input-arroz').style.display = 'none';
    document.getElementById('input-alga').style.display = 'none';
    document.getElementById('input-pecas').style.display = 'none';
    document.getElementById('input-salmao').style.display = 'none';
    document.getElementById('input-pepino').style.display = 'none';
    document.getElementById('input-cenoura').style.display = 'none';
    document.getElementById('input-cream-cheese').style.display = 'none';
    document.getElementById('input-tofu').style.display = 'none';
}


var modal = document.getElementById('howToUseModal');
var btn = document.getElementById('howToUseBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
