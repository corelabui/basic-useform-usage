import { Form, Input, useForm } from 'formfusion';
import './App.css';

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log('Success ' + JSON.stringify(data));
  };

  const config = useForm({ onSubmit });

  return (
    <Form config={config} className="form">
      <Input
        id="username"
        name="username"
        type="username"
        label="Username"
        required
        classes={{
          field: 'input-field',
          label: 'input-field__label',
          error: 'input-field__error-message',
        }}
        validation={{
          patternMismatch: 'Please match the requested format.',
          valueMissing: 'This field is required.',
        }}
      />
      Your username is {config.values.username}
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
