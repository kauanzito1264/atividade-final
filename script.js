const form = document.getElementById('cadastro-form');
const tabela = document.getElementById('cadastros-tabela');
const tbody = document.getElementById('cadastros-tbody');
let cadastros = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cadastro = { nome, email };
    cadastros.push(cadastro);
    atualizaTabela();
    form.reset();
});

function atualizaTabela() {
    tbody.innerHTML = '';
    cadastros.forEach((cadastro) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cadastro.nome}</td>
            <td>${cadastro.email}</td>
        `;
        tbody.appendChild(row);
    });
}