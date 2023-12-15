"use strict";
// generics
const stringEcho = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('john'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'moon' }));
console.log(isObj(null));
const ifTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(ifTrue(true));
console.log(ifTrue(0));
console.log(ifTrue(null));
console.log(ifTrue(1));
console.log(ifTrue(''));
console.log(ifTrue('true'));
console.log(ifTrue(undefined));
console.log(ifTrue([true]));
console.log(ifTrue([1, 2, 3]));
console.log(ifTrue({ name: 'dave' }));
console.log(ifTrue(NaN));
console.log(ifTrue(false));
console.log(ifTrue([]));
console.log(ifTrue({}));
console.log(ifTrue(-0));
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'ali' }));
console.log(processUser({ id: 1, name: 'ali' }));
const getUserProperty = (users, key) => {
    return users.map(user => user[key]);
};
const userArray = [
    {
        "id": 1,
        "name": "John Doe",
        "username": "johndoe",
        "email": "john.doe@example.com",
        "address": {
            "street": "123 Main St",
            "suite": "Apt 4",
            "city": "Cityville",
            "zipcode": "12345",
            "geo": {
                "lat": 40.7128,
                "lng": -74.0060
            }
        }
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "username": "janesmith",
        "email": "jane.smith@example.com",
        "address": {
            "street": "456 Oak Ave",
            "suite": "Unit 2",
            "city": "Townsville",
            "zipcode": "67890",
            "geo": {
                "lat": 34.0522,
                "lng": -118.2437
            }
        }
    },
    {
        "id": 3,
        "name": "Bob Johnson",
        "username": "bobjohnson",
        "email": "bob.johnson@example.com",
        "address": {
            "street": "789 Pine Rd",
            "suite": "Suite 8",
            "city": "Villagetown",
            "zipcode": "54321",
            "geo": {
                "lat": 51.5074,
                "lng": -0.1278
            }
        }
    }
];
console.log(getUserProperty(userArray, 'email'));
console.log(getUserProperty(userArray, 'username'));
class StateObj {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObj('john');
console.log(store.state);
store.state = 'davee';
console.log(store.state);
const myState = new StateObj([15]);
myState.state = (['dave', 44, true]);
console.log(myState.state);
