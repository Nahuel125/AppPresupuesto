const buttonInput = document.getElementById("buttonAddMoney");
const moneyInput = document.getElementById("valueMoney");
const dataBase = window.localStorage;

buttonInput.onclick = () => {
  let money = {
    id: "totalMoney",
    total: moneyInput.value,
  };

  dataBase.setItem(money.id, JSON.stringify(money));
  dataBase.setItem("total", JSON.stringify(money));
  window.location.href = "application.html";
};
