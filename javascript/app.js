class PersonAccount {
    constructor(firstName, lastName, incomes, expenses){
        this.firstName = "Abdul";
        this.lastName = "Basit";
        this.incomes = "2lac";
        this.expenses = "";
    }
    move (a,b,c,d){
        this.a = a
        this.b = b
        this.c = c
        this.d = d
    }
}

const PersonAcc = new PersonAccount ("Abdul, Basit, 2lac") 
console.log (PersonAcc)