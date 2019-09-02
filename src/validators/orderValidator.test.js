import { fromJS } from 'immutable';
import orderValidator from './orderValidator';

describe('Given the order validator', () => {
  let values;
  let result;
  beforeEach(() => {
    result = orderValidator(values);
  });
  describe('when the validator is called with empty fields', () => {
    beforeAll(() => {
      values = fromJS({});
    });
    it('should fail required field validation for all fields', () => {
      expect(result.name).toBe('Required');
      expect(result.email).toBe('Required');
      expect(result.city).toBe('Required');
      expect(result.zip).toBe('Required');
    });
  });
  describe('when the validator is called with invalid email address', () => {
    beforeAll(() => {
      values = fromJS({ email: 'invalid@email' });
    });
    it('should fail email field validation', () => {
      expect(result.email).toBe('Invalid email address');
    });
  });
  describe('when the validator is called with invalid postal code', () => {
    beforeAll(() => {
      values = fromJS({ zip: '666999' });
    });
    it('should fail postal code field validation', () => {
      expect(result.zip).toBe('Invalid postal code');
    });
  });
  describe('when the validator is called with properly filled fields', () => {
    beforeAll(() => {
      values = fromJS({ name: 'John Smith', email: 'jsmith@domain.com', city: 'New York', zip: 10001 });
    });
    it('should fail postal code field validation', () => {
      expect(result).toStrictEqual({});
    });
  });
});
