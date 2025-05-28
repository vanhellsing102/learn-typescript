{


class BankAccount{
    readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;
    constructor(id: number, name: string, balance: number){
        this.id = id,
        this.name = name,
        this._balance = balance
    }
    getBalance(){
        return this._balance;
    }
    addBalance(ammount: number){
        this._balance = this._balance + ammount;
    }
}
class StudentAccount extends BankAccount{
    test(){
        console.log(this._balance);
    }
}
const poorPeople = new BankAccount(112, "murad", 300);
poorPeople.addBalance(30);
const boroLoks = new StudentAccount(112, "murad", 300);
boroLoks.test()
// console.log(poorPeople.getBalance());


















}