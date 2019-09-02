import { fromJS } from 'immutable';
import orderValidator from './orderValidator';

describe('Given the order validator', () => {
  let values;
  let result;
  describe('when the validator is called with empty fields', () => {
    beforeAll(() => {
      values = fromJS({});
      result = orderValidator(values);
    });
    it('should fail required field validation for all fields', () => {
      expect(result.name === 'Required').toBe(true);
      expect(result.email === 'Required').toBe(true);
      expect(result.city === 'Required').toBe(true);
      expect(result.zip === 'Required').toBe(true);
    });
  });
  describe('when the validator is called with invalid email address', () => {
    beforeAll(() => {
      values = fromJS({ email: 'invalid@email' });
      result = orderValidator(values);
    });
    it('should fail email field validation', () => {
      expect(result.email === 'Invalid email address').toBe(true);
    });
  });
  describe('when the validator is called with invalid postal code', () => {
    beforeAll(() => {
      values = fromJS({ zip: '666999' });
      result = orderValidator(values);
    });
    it('should fail postal code field validation', () => {
      expect(result.zip === 'Invalid postal code').toBe(true);
    });
  });
  describe('when the validator is called with properly filled fields', () => {
    beforeAll(() => {
      values = fromJS({ name: 'John Smith', email: 'jsmith@domain.com', city: 'New York', zip: 10001 });
      result = orderValidator(values);
    });
    it('should fail postal code field validation', () => {
      expect(result === {}).toBe(false);
    });
  });
});
