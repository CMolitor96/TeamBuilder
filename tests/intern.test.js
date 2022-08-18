const Intern = require('../lib/intern');

describe('Intern', () => {
    
    //Tests for constructor initialiaztion of intern subclass
    describe('Initialization', () => {
        it('Should create a new object with name, id, email, and school', () => {
            const foo = new Intern('Foo', 1, 'email@email', 'UCSD');
            expect(foo).toEqual({name: 'Foo', id: 1, email: 'email@email', school: 'UCSD'});
        });
    });

    //Tests getSchool() function for Intern subclass
    describe('getSchool', () => {
        it('Should return the school of the intern', () => {
            const bar = new Intern('Bar', 1, 'email@email', 'UCSD');
            expect(bar.getSchool()).toEqual('UCSD');
        });
    });

    //Tests getRole() function for Intern subclass
    describe('getRole', () => {
        it('Should return Intern', () => {
            const foobar = new Intern('Bar', 1, 'email@email', 'UCSD');
            expect(foobar.getRole()).toEqual('Intern');
        });
    });
});