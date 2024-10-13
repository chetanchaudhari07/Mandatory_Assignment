# Bank Account Module

This module contains the `BankAccount` class, which allows you to simulate a bank account with methods like:

- `deposit(amount)`: Adds money to the account.
- `withdraw(amount)`: Withdraws money from the account if there's enough balance.
- `transferTo(targetAccount, amount)`: Transfers funds to another account.
- `getBalance()`: Retrieves the current balance.

### Example Usage
```javascript
const account = new BankAccount('123', 'John Doe', 100);
account.deposit(50);
console.log(account.getBalance());