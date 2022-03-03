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

class WorkType extends GettingName {
    workType: string;
    constructor(workType) {
        super(workType);


    }
}
let firstCustomer = new GettingName('Moath', 'Ahmad');
firstCustomer.get();
