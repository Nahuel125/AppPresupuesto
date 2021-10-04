const transactionButton = document.getElementById("transactionButton");
const transactionType = document.getElementById("transactionType");
const transactionMount = document.getElementById("transactionMount");
const transactionList = document.getElementById("listFinance");
const dataBase = window.localStorage;

addNewEstimation(dataBase);

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
