function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, seatingType) {
  let price = quantity * basePrice;

  if (seatingType === "premium") {
    price = price * 1.50;
  }

  return Math.round(price);
}

module.exports = { isValidQuantity, calculateTicketPrice };
