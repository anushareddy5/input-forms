import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [textInput, setTextInput] = useState('');
  const [checkboxInput, setCheckboxInput] = useState(false);
  const [radioInput, setRadioInput] = useState('');
  const [selectInput, setSelectInput] = useState('');

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
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
    console.log('Checkbox Input:', checkboxInput);
    console.log('Radio Input:', radioInput);
    console.log('Select Input:', selectInput);

    // Reset the form
    setTextInput('');
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
