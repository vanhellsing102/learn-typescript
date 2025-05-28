{


class BankAccount{
    readonly id: number;
    public name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number){
        this.id = id,
        this.name = name,
        this._balance = balance
    }
    get balance(){
        return this._balance;
    }
    set deposit(amount: number){
        this._balance = this._balance + amount;
    }
}
const person = new BankAccount(22, "murad", 50);
// console.log(person.balance);
person.deposit = 30;
console.log(person.balance);

















}