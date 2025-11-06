// Dummy store (simulate data)
let orders = [
  { id: 1, name: "Ali", amount: 120.00 },
  { id: 2, name: "Mira", amount: 89.90 }
];

const tbody = document.querySelector('#tbl tbody');
const frm = document.getElementById('frm');

function render() {
  tbody.innerHTML = orders.map(o =>
    `<tr><td>${o.id}</td><td>${o.name}</td><td>${o.amount.toFixed(2)}</td></tr>`
  ).join('');
}

frm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(frm);
  const name = formData.get('name').trim();
  const amount = Number(formData.get('amount'));
  const nextId = orders.length ? Math.max(...orders.map(o => o.id)) + 1 : 1;
  orders.push({ id: nextId, name, amount });
  frm.reset();
  render();
});

render();
