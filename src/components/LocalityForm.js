import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

const LocalityForm = ({ saveData, user }) => {
  const [values, setValues] = useState({});

  const onChange = (field, event) => {
    setValues({
      ...values,
      [field]: event.target.value,
    })
  };

  const onSubmit = (event) => {
    event.preventDefault();

    saveData(user.username, values)
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formState">
        <Form.Label>State</Form.Label>
        <Form.Select aria-label="Select state" onChange={(e) => onChange('state', e)}>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DC">District of Columbia</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
          <option value="AS">American Samoa</option>
          <option value="GU">Guam</option>
          <option value="MP">Northern Mariana Islands</option>
          <option value="PR">Puerto Rico</option>
          <option value="UM">United States Minor Outlying Islands</option>
          <option value="VI">Virgin Islands</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPostalCode">
        <Form.Label>Postal code</Form.Label>
        <Form.Control type="postalCode" placeholder="Enter postal code" onChange={(e) => onChange('postalCode', e)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LocalityForm;
