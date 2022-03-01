var GettingName = /** @class */ (function () {
    function GettingName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        console.log(this);
    }
    ;
    GettingName.prototype.get = function () {
        var _this = this;
        console.log("Welcome ".concat(this.firstName, " ").concat(this.lastName));
        console.log(this);
        var c = function (firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            console.log('-----', this.firstName, this.lastName);
        };
        var c2 = function () { return console.log('-----', _this.firstName, _this.lastName); };
        c(this.firstName, this.lastName);
        c2();
    };
    ;
    return GettingName;
}());
var firstCustomer = new GettingName('Moath', 'Ahmad');
firstCustomer.get();
