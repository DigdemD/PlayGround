class bankAccount {
  #balance = 0
  #transactions = []
  #overdraft = 100

  #setBalance = newAmount => {
    if (newAmount < -this.#overdraft) throw new Error(`Balance can not go below -${this.#overdraft}`)

    this.#transactions.push(newAmount)
    this.#balance = newAmount
  }

  get balance() {
    return this.#balance
  }

  deposit(amount) {
    if (amount <= 0) throw new Error(`Amount must be positive number`)
    this.#setbalance(this.#balance + amount)
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error(`Amount must be positive number`)
    this.#setbalance(this.#balance - amount)
  }

  get transactions() {
    return this.#transactions.slice()
  }
}

const account = new bankAccount()
account.withdraw(-100)

console.log('account balance', account.balance)
console.log('transaction history', account.transactions)
