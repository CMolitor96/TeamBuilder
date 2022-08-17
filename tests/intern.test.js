const intern = require('../lib/intern');

describe('intern', () => {
    it('should console log name of intern', () => {
        const mock = jest.spyOn(console, 'log');
        intern('harry');
        mock.mockImplementation(() => {});
        expect(mock).toBeCalledWith('harry');
        mock.mockRestore();
    });
});