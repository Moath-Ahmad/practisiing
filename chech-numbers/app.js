var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var WorkType = /** @class */ (function (_super) {
    __extends(WorkType, _super);
    function WorkType(workType) {
        return _super.call(this) || this;
    }
    return WorkType;
}(GettingName));
var firstCustomer = new GettingName('Moath', 'Ahmad');
firstCustomer.get();
