let family = {
  // coloque a renda de sua familia dentro de [] e despesas dentro de []
  incomes: [1300, 2000, 500, 100],
  expanses: [125.5, 59.1, 210.31, 1600.0],
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

  let balanceText = " Negativo ";
  if (itsOk) {
    balanceText = " Positivo ";
  }

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$ `);
}

calculateBalance();
