const myInput = document.getElementById("myInput");
const accountBalance = document.getElementById("accountBalance");
const cashBalance = document.getElementById("cashBalance");
const transactionLog = document.getElementById("transactionLog");
const operationMode = document.getElementById("operationMode");
const operationBalance = document.getElementById("operationBalance");

function updateBalance(MODE) {
  if (MODE === "TRANSACTION") {
    const amount = Number(operationBalance.value) || 0; // convert to number
    let acc = Number(accountBalance.value) || 0;
    let cash = Number(cashBalance.value) || 0;
    if (operationMode.value === "DEPOSIT") {
      acc += amount;
      cash -= amount;
    } else if (operationMode.value === "WITHDRAW") {
      acc -= amount;
      cash += amount;
    }
    accountBalance.value = acc.toFixed(2);
    cashBalance.value = cash.toFixed(2);
  }
  updateLogging(MODE);
}

function updateLogging(MODE) {
  const now = new Date();
  const ts = now.toISOString();

  const acc = Number(accountBalance.value) || 0;
  const cash = Number(cashBalance.value) || 0;

  const logBox = document.getElementById("transactionLog"); // textarea now
  const prev = (logBox.value || "").trim();

  const line = `[${ts}] ${MODE} | Account Balance: ${acc.toFixed(
    2
  )} , Cash Balance: ${cash.toFixed(2)}`;
  logBox.value = prev ? `${prev}\n${line}` : line;
}
