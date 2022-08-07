function addStockName(stock) {
  return setProp("name", stock, stock.id);
}
function formatSign(val) {
  if (Number(val) > 0) {
    return `+${val}`;
  }
  return val;
}
function formatCurrency(val) {
  return `$${val}`;
}
