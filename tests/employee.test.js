const Employee = require('../lib/employee');

describe('Employee', () => {

    //Tests constructor function of class Employee
    describe('Initialization', () => {
        it('employee object should be created with name, id, and email supplied as arguments', () => {
            const charlie = new Employee('charlie', 1, 'email@gmail');
            expect(charlie).toEqual({name: 'charlie', id: 1, email: 'email@gmail'});
        });
    });

    //Tests getName() function of class Employee
    describe('getName', () => {
        it('getName function takes in a name argument and returns the employee name', () => {
            const foo = new Employee('foo', 1, 'email@gmail');
            expect(foo.getName()).toEqual('foo');
        });
    });

    //Tests getId() function of class Employee
    describe('getId', () => {
        it('getId function returns the Id of the specified employee', () => {
            const bar = new Employee('bar', 1, 'email@gmail');
            expect(bar.getId()).toEqual(1);
        });
    });

    //Tests getEmail() function of class Employee
    describe('getEmail', () => {
        it('getEmail is a function that returns the email of the specified employee', () => {
            const foobar = new Employee('Foobar', 1, 'email@email.com');
            expect(foobar.getEmail()).toEqual('email@email.com');
        });
    });

    //Tests getRole() function of class Employee
    describe('getRole', () => {
        it('getRole is a function that should return employee always for the employee class', () => {
            const fizz = new Employee('Fizz', 1, 'email@email.com');
            expect(fizz.getRole()).toEqual('Employee');
        });
    });
});

