const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    
    //Tests constructor for Engineer Class
    describe('Initialization', () => {
        it('is a subclass of employee, and should return an object with name, id, email, and github username of new object extended from parent class', () => {
            const foo = new Engineer('foo', 1, 'email@email', 'GitHubName');
            expect(foo).toEqual({name:'foo', id: 1, email: 'email@email', github: 'GitHubName'});
        });
    });

    //Tests getGithub() function for Engineer
    describe('getGithub', () => {
        it('should return the GitHub username of the Engineer', () => {
            const bar = new Engineer('bar', 1, 'email@email', 'GitHubName');
            expect(bar.getGithub()).toEqual('GitHubName');
        });
    });

    //Tests getRole function for Engineer
    describe('getRole', () => {
        it('should return Engineer', () => {
            const foobar = new Engineer('Foobar', 1, 'email@email', 'GitHubName');
            expect(foobar.getRole()).toEqual('Engineer');
        });
    });
});

