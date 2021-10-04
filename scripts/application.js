const transactionButton = document.getElementById("transactionButton");
const transactionType = document.getElementById("transactionType");
const transactionMount = document.getElementById("transactionMount");
const transactionList = document.getElementById("listFinance");
const restartButton = document.getElementById("restartEstimate");
const dataBase = window.localStorage;

uploadMoneyAvailable(dataBase);

transactionButton.onclick = () => {
  let transaction = {
    id: Math.random(1, 100),
    type: transactionType.value,
    mount: transactionMount.value,
  };
  saveTransaction(dataBase, transaction);
};

uploadTransaction(dataBase, transactionList);

restartButton.onclick = () => {
  dataBase.clear();
  window.location.href = "index.html";
};
