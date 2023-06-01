const bankAcc = {
    firstName: "Ram",
    lastName: "Thapa",
    accountNo: 123456789,
    currentBalance: 100000,
    transaction : [],
    fundDeposit: function(amount) {console.log(`${bankAcc.firstName} ${bankAcc.lastName}, ${amount} has been deposited in your Acc No. ${bankAcc.accountNo}and your current total is ${bankAcc.currentBalance+=amount}`)
        this.transaction.push(this.amount)},  

    withDraw: function(amount){
        if(this.currentBalance <= amount){
            console.log(`Dear ${this.firstName} ${this.lastName} you do not have sufficient balance in your bank account.`)
        }else{
            console.log(`You have withdraw Rs${amount}. Your current balance is ${bankAcc.currentBalance-=amount}`)
            this.transaction.push(this.amount)
        }
    },

    fundCheck: () => console.log(`Your current balance is ${this.currentBalance}`)
}


bankAcc.fundDeposit(10000)
bankAcc.withDraw(10000)
console.log(bankAcc.currentBalance)

console.log(bankAcc.transaction)