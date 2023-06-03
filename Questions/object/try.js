const bank = {
    firstName: "Ram",
    lastName: "Thapa",
    accountNo: 123456789,
    currentBalance: 100000,
    account : function() {
         console.log(this.firstName)
    }
}
bank.account()