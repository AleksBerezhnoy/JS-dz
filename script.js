class Billing {
  amount = 0;
  calculateTotal() {
    return this.amount + 10
  }
}

class fixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal() {
    return this.amount
  }
}
class hourBilling extends Billing {
  constructor(amount, hour) {
    super(amount);
    this.hour = hour
  }

  calculateTotal() {
    return this.amount * this.hour
  }
}

class itemBilling extends Billing {
  constructor(amount, countElements) {
    super(amount);
    this.countElements = countElements;
  }

  calculateTotal() {
    return this.amount * this.countElements
  }
}

console.log(new hourBilling(10, 10).calculateTotal());