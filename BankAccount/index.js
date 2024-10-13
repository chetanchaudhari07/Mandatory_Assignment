class BankAccount {
    constructor(accountNumber, accountHolderName, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = initialBalance;
    }


    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive.');
        }
        this.balance += amount;
    }


    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive.');
        }
        if (amount > this.balance) {
            throw new Error('Insufficient balance.');
        }
        this.balance -= amount;
    }


    canWithdraw(amount) {
        return amount <= this.balance;
    }


    transferTo(targetAccount, amount) {
        if (!targetAccount) {
            throw new Error('Target account cannot be null.');
        }
        if (this.canWithdraw(amount)) {
            this.withdraw(amount);
            targetAccount.deposit(amount);
        } else {
            throw new Error('Transfer failed due to insufficient funds.');
        }
    }


    getBalance() {
        return this.balance;
    }


}


const account1 = new BankAccount('123456', 'John Doe', 1000);
const account2 = new BankAccount('789012', 'Jane Doe', 500);


account1.deposit(500);


account1.withdraw(200);


account1.transferTo(account2, 300);


console.log(`Account 1 Balance: ${account1.getBalance()}`);
console.log(`Account 2 Balance: ${account2.getBalance()}`);