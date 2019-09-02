import { handlers } from './OrderContainer';

describe('Given the OrderContainer enhancer', () => {
  const testProps = { history: { push: jest.fn() } };

  describe('Given a handleSubmit handler', () => {
    describe('when the handleSubmit is called', () => {
      beforeEach(() => {
        handlers.handleSubmit(testProps)();
      });

      it('should call the history push function', () => {
        expect(testProps.history.push).toHaveBeenCalledWith('/thankyou');
      });
    });
  });
});
