const orderValidator = values => {
  const errors = {};
  if (!values.get('name')) errors.name = 'Required';
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('city')) errors.city = 'Required';
  if (!values.get('zip')) {
    errors.zip = 'Required';
  } else if (!/^[0-9]{5}(?:-[0-9]{4})?$/i.test(values.get('zip'))) {
    errors.zip = 'Invalid postal code';
  }
  return errors;
};

export default orderValidator;
