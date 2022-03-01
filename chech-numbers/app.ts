class GettingName {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        console.log(this)
    };
    get() {
        console.log(`Welcome ${this.firstName} ${this.lastName}`);
        console.log(this);
        let c = function (firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            console.log('-----', this.firstName, this.lastName)
        }

        let c2 = () => console.log('-----', this.firstName, this.lastName)

        c(this.firstName, this.lastName);
        c2();
    };
}

let firstCustomer = new GettingName('Moath', 'Ahmad');
console.log(this)
firstCustomer.get();
