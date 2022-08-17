const manager = require('../lib/manager');

describe('manager', () => {
    it('should console log manager name', () => {
        const mock = jest.spyOn(console, 'log');
        manager('darren');
        mock.mockImplementation(() => {});
        expect(mock).toBeCalledWith('darren');
        mock.mockRestore();
    })
})