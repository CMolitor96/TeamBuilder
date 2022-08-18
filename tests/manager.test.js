const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('Should create a new object with name, id, email, and office number', () => {
            const foo = new Manager('Foo', 1, 'email@email', 10);
            expect(foo).toEqual({name: 'Foo', id: 1, email: 'email@email', officeNumber: 10});
        });
    });

    describe('getRole', () => {
        it('Should return Manager', () => {
            const bar = new Manager('Bar', 1, 'email@email', 10);
            expect(bar.getRole()).toEqual('Manager');
        });
    });
});