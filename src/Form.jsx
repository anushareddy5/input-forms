import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [textInput, setTextInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [checkboxInput, setCheckboxInput] = useState(false);
  const [radioInput, setRadioInput] = useState('');
  const [selectInput, setSelectInput] = useState('');

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateInput(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumberInput(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckboxInput(e.target.checked);
  };

  const handleRadioChange = (e) => {
    setRadioInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Text Input:', textInput);
    console.log('Email Input:', emailInput);
    console.log('Date Input:', dateInput);
    console.log('Number Input:', numberInput);
    console.log('Checkbox Input:', checkboxInput);
    console.log('Radio Input:', radioInput);
    console.log('Select Input:', selectInput);

   
    // Reset the form
    setTextInput('');
    setEmailInput('');
    setDateInput('');
    setNumberInput('');
    setCheckboxInput(false);
    setRadioInput('');
    setSelectInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form-title">Input Form</h2>

      <div className="form-group">
        <label htmlFor="text-input" className="form-label">
          Text Input:
        </label>
        <input
          type="text"
          id="text-input"
          className="form-input"
          value={textInput}
          onChange={handleTextChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email-input" className="form-label">
          Email Input:
        </label>
        <input
          type="email"
          id="email-input"
          className="form-input"
          value={emailInput}
          onChange={handleEmailChange}
        />
      </div>

      <div className="form-group">
  <label htmlFor="date-input" className="form-label">
    Date Input:
  </label>
  <input
    type="text"
    id="date-input"
    className="form-input"
    value={dateInput}
    onChange={handleDateChange}
    required
    pattern="\d{2}/\d{2}/\d{4}"
    title="Please enter a date in the format mm/dd/yyyy"
    placeholder="mm/dd/yyyy"
  />
</div>

      <div className="form-group">
        <label htmlFor="number-input" className="form-label">
          Number Input:
        </label>
        <input
          type="number"
          id="number-input"
          className="form-input"
          value={numberInput}
          onChange={handleNumberChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Checkbox Input:</label>
        <input
          type="checkbox"
          className="form-checkbox"
          checked={checkboxInput}
          onChange={handleCheckboxChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Radio Input:</label>
        <div className="form-radio-group">
          <label className="form-radio-label">
            <input
              type="radio"
              className="form-radio"
              value="option1"
              checked={radioInput === 'option1'}
              onChange={handleRadioChange}
            />
            Option 1
          </label>
          <label className="form-radio-label">
            <input
              type="radio"
              className="form-radio"
              value="option2"
              checked={radioInput === 'option2'}
              onChange={handleRadioChange}
            />
            Option 2
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="select-input" className="form-label">
          Select Input:
        </label>
        <select
          id="select-input"
          className="form-select"
          value={selectInput}
          onChange={handleSelectChange}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>

      <button type="submit" className="form-submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
