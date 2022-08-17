const employee = require('../lib/employee');

describe('employee', () => {
    it('should log name to console', () => {
        const mock = jest.spyOn(console, 'log');
        employee('charlie');
        mock.mockImplementation(() => { });
        expect(mock).toBeCalledWith('charlie');
        mock.mockRestore();
    });
});

