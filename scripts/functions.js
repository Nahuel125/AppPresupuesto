const uploadMoneyAvailable = (dataBase) => {
  const money = JSON.parse(dataBase.getItem("totalMoney"));
  const moneyValue = JSON.parse(dataBase.getItem("total"));

  document.getElementById("moneyAvailable").innerText = `$${moneyValue.total}`;
  document.getElementById("moneyLeftover").innerText = `$${money.total}`;
};

const saveTransaction = (dataBase, transaction) => {
  dataBase.setItem(transaction.id, JSON.stringify(transaction));
  let objeto = JSON.parse(dataBase.getItem("totalMoney"));

  let money2 = {
    id: "totalMoney",
    total: objeto.total - transaction.mount,
  };

  dataBase.setItem("totalMoney", JSON.stringify(money2));
  window.location.reload();
};

const uploadTransaction = (dataBase, parentNode) => {
  let claves = Object.keys(dataBase);
  for (clave of claves) {
    if (clave != "totalMoney" && clave != "total") {
      let article = JSON.parse(dataBase.getItem(clave));
      addArticle(dataBase, article, parentNode);
    }
  }
};

function addArticle(dataBase, article, parentNode) {
  let divArticle = document.createElement("div");
  let type = document.createElement("p");
  let mount = document.createElement("p");
  let iconDelete = document.createElement("span");

  mount.innerText = `$${article.mount}`;
  type.innerText = article.type;
  iconDelete.innerText = "delete_forever";

  divArticle.classList.add("listArticle");
  iconDelete.classList.add("material-icons", "icono");

  iconDelete.onclick = () => {
    addMoney(dataBase, article);
    dataBase.removeItem(article.id);
  };

  divArticle.appendChild(type);
  divArticle.appendChild(mount);
  divArticle.appendChild(iconDelete);
  parentNode.appendChild(divArticle);

  applyColorAlert(dataBase);
}

const addMoney = (dataBase, article) => {
  let objeto = JSON.parse(dataBase.getItem("totalMoney"));

  let money2 = {
    id: "totalMoney",
    total: objeto.total + parseInt(article.mount),
  };

  dataBase.setItem("totalMoney", JSON.stringify(money2));
  window.location.reload();
};

const applyColorAlert = (dataBase) => {
  let objeto = JSON.parse(dataBase.getItem("totalMoney"));
  let objetoTotal = JSON.parse(dataBase.getItem("total"));
  let porcentajeMitad = (50 * objetoTotal.total) / 100;
  let porcentajeCuarto = (25 * objetoTotal.total) / 100;

  if (objeto.total <= porcentajeCuarto) {
    document.getElementById("alertMoney").classList.add("moneyResto");
  } else if (objeto.total <= porcentajeMitad) {
    document.getElementById("alertMoney").classList.add("moneyLeftover");
  }
};
