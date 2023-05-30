function createAccount(pin, amount = 0) {
    // It returns an object with four methods: checkBalance, deposit, withdraw, and changePin.
    return {
      // checkBalance takes an inputPin, checks if it matches the account's pin, and if it does, returns the account balance.
      checkBalance(inputPin) {
        if (inputPin !== pin) return "Invalid PIN.";
        return `$${amount}`;
      },
      // deposit takes an inputPin and a newAmount. If the inputPin matches the account's pin, it increments the account balance by newAmount and returns a success message with the new balance.
      deposit(inputPin, newAmount) {
        if (inputPin !== pin) return "Invalid PIN.";
        amount += newAmount;
        return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`;
      },
      // withdraw takes an inputPin and a withdrawalAmount. If the inputPin matches the account's pin, and the withdrawalAmount does not exceed the account balance, it decrements the account balance by withdrawalAmount and returns a success message with the new balance.
      withdraw(inputPin, withdrawalAmount) {
        if (inputPin !== pin) return "Invalid PIN.";
        if (withdrawalAmount > amount)
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        amount -= withdrawalAmount;
        return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
      },
      // changePin takes an oldPin and a newPin. If the oldPin matches the account's pin, it changes the pin to newPin and returns a success message.
      changePin(oldPin, newPin) {
        if (oldPin !== pin) return "Invalid PIN.";
        pin = newPin;
        return "PIN successfully changed!";
      }
    };
}



module.exports = { createAccount };
