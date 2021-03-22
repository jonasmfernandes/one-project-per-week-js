let family = {
  // coloque a renda de sua familia dentro de incomes[] e despesas dentro de expanses[]
  incomes: [3000, 2500, 150,],
  expanses: [200, 150, 50, 1400, 600],
};

function sum(array) {
  let total = 0;

  for (let valor of array) {
    total += valor;
  }

  return total;
}
function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpanses = sum(family.expanses);

  const total = calculateIncomes - calculateExpanses;

  const itsOk = total >= 0;

  let balanceText = "Negativo ";
  if (itsOk) {
    balanceText = "Positivo ";
  }

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$ `);
}

calculateBalance();
