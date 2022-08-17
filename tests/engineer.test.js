const engineer = require('../lib/engineer');

describe('engineer', () => {
    it('should console.log name of engineer', () => {
        const mock = jest.spyOn(console, 'log');
        engineer('jacob');
        mock.mockImplementation(() => {});
        expect(mock).toBeCalledWith('jacob');
        mock.mockRestore();
    });
});

