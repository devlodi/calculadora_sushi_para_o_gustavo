function calculateSushi() {
    var numPeople = document.getElementById('num-people').value;

    // Obter os valores das referências atualizadas
    var arrozPerPerson = parseInt(document.getElementById('ref-arroz').textContent.replace('g', '')); // gramas de arroz por pessoa
    var algasPerPerson = parseInt(document.getElementById('ref-alga').textContent); // folhas de alga por pessoa
    var pecasPorPessoa = parseInt(document.getElementById('ref-pecas').textContent); // peças de sushi por pessoa

    var totalArroz = numPeople * arrozPerPerson;
    var totalAlga = numPeople * algasPerPerson;
    var totalPecas = numPeople * pecasPorPessoa;

    // Cálculos para ingredientes adicionais com referências atualizadas
    var salmaoPerPerson = parseInt(document.getElementById('ref-salmao').textContent.replace('g', ''));
    var pepinoPerPerson = parseFloat(document.getElementById('ref-pepino').textContent);
    var cenouraPerPerson = parseFloat(document.getElementById('ref-cenoura').textContent);
    var creamCheesePerPerson = parseInt(document.getElementById('ref-cream-cheese').textContent.replace('g', ''));
    var tofuPerPerson = parseInt(document.getElementById('ref-tofu').textContent.replace('g', ''));

    var totalSalmão = document.getElementById('salmão').checked ? numPeople * salmaoPerPerson : 0;
    var totalPepino = document.getElementById('pepino').checked ? numPeople * pepinoPerPerson : 0;
    var totalCenoura = document.getElementById('cenoura').checked ? numPeople * cenouraPerPerson : 0;
    var totalCreamCheese = document.getElementById('cream-cheese').checked ? numPeople * creamCheesePerPerson : 0;
    var totalTofu = document.getElementById('tofu').checked ? numPeople * tofuPerPerson : 0;

    // Exibindo os resultados atualizados
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
