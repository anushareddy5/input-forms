import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './form.css';
// import InputMask from 'react-input-mask';


const isValidEmail = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const Form = () => {
  const [textInput, setTextInput] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [numberInput, setNumberInput] = useState('');
  const [checkboxInput, setCheckboxInput] = useState(false);
  const [radioInput, setRadioInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [errors, setErrors] = useState({
    textInput: '',
    firstName: '',
    lastName: '',
    emailInput: '',
    passwordInput: '',
    confirmPasswordInput: '',
    dateInput: '',
    numberInput: '',
    checkboxInput: '',
    radioInput: '',
    selectInput: '',
  });

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPasswordInput(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
    const newErrors = validateInputs();
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      console.log('Text Input:', textInput);
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email Input:', emailInput);
      console.log('Password Input:', passwordInput);
      console.log('Confirm Password Input:', confirmPasswordInput);
      console.log('Date Input:', selectedDate);
      console.log('Number Input:', numberInput);
      console.log('Checkbox Input:', checkboxInput);
      console.log('Radio Input:', radioInput);
      console.log('Select Input:', selectInput);

      // Reset the form
      setTextInput('');
      setFirstName('');
      setLastName('');
      setEmailInput('');
      setPasswordInput('');
      setConfirmPasswordInput('');
      setSelectedDate(null);
      setNumberInput('');
      setCheckboxInput(false);
      setRadioInput('');
      setSelectInput('');
      setErrors({
        textInput: '',
        firstName: '',
        lastName: '',
        emailInput: '',
        passwordInput: '',
        confirmPasswordInput: '',
        dateInput: '',
        numberInput: '',
        checkboxInput: '',
        radioInput: '',
        selectInput: '',
      });
    }
  };

  const validateInputs = () => {
    const newErrors = {
      textInput: '',
      firstName: '',
      lastName: '',
      emailInput: '',
      passwordInput: '',
      confirmPasswordInput: '',
      dateInput: '',
      numberInput: '',
      checkboxInput: '',
      radioInput: '',
      selectInput: '',
    };

    // Validate textInput
    if (textInput.trim() === '') {
      newErrors.textInput = 'The text field is required';
    }

    // Validate firstName
    if (firstName.trim() === '') {
      newErrors.firstName = 'The first name field is required';
    } else if (firstName.trim().length < 5) {
      newErrors.firstName = 'The first name must be at least 5 characters';
    }

    // Validate lastName
    if (lastName.trim() === '') {
      newErrors.lastName = 'The last name field is required';
    }

    // Validate emailInput
    if (emailInput.trim() === '') {
      newErrors.emailInput = 'The email field is required';
    } else if (!isValidEmail(emailInput)) {
      newErrors.emailInput = 'Please enter a valid email address';
    }

    if (passwordInput.trim() === '') {
      newErrors.passwordInput = 'The password field is required';
    } else if (passwordInput.trim().length < 6) {
      newErrors.passwordInput = 'Password must be at least 6 characters';
    }
  
    // Validate confirmPasswordInput
    if (confirmPasswordInput.trim() === '') {
      newErrors.confirmPasswordInput = 'Confirm Password is required';
    } else if (passwordInput !== confirmPasswordInput) {
      newErrors.confirmPasswordInput = 'Passwords do not match';
    }

    // Validate dateInput
    if (selectedDate === null) {
      newErrors.dateInput = 'The date field is required';
    }

    // Validate numberInput
    if (numberInput.trim() === '') {
      newErrors.numberInput = 'The number field is required';
    }

    // Validate radioInput
    if (radioInput === '') {
      newErrors.radioInput = 'Please select an option';
    }

    // Validate selectInput
    if (selectInput === '') {
      newErrors.selectInput = 'Please select an option';
    }

    return newErrors;
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
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
          placeholder="Enter Text Here"
        />
        {errors.textInput && <p className="error-message">{errors.textInput}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="first-name" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          id="first-name"
          className="form-input"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="Enter First Name"
        />
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="last-name" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          id="last-name"
          className="form-input"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Enter Last Name"
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
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
          placeholder="Enter Email Address"
        />
        {errors.emailInput && <p className="error-message">{errors.emailInput}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password-input" className="form-label">
          Password:
        </label>
        <div className="password-input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password-input"
            className="form-input password-input"
            value={passwordInput}
            onChange={handlePasswordChange}
            placeholder="Enter Password"
          />
          <button
            type="button"
            className="show-password-button"
            onClick={toggleShowPassword}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.passwordInput && <p className="error-message">{errors.passwordInput}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="confirm-password-input" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirm-password-input"
          className="form-input"
          value={confirmPasswordInput}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
        />
        {errors.confirmPasswordInput && (
          <p className="error-message">{errors.confirmPasswordInput}</p>
        )}
      </div>

      <div className="form-group">
      
        <label htmlFor="date-input" className="form-label">
          Date Input:
        </label>
        <DatePicker
          id="date-input"
          selected={selectedDate}
          onChange={handleDateChange}
          className="form-input"
          placeholderText="Select Date"
        />
        {errors.dateInput && <p className="error-message">{errors.dateInput}</p>}
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
          placeholder="Enter A Number"
        />
        {errors.numberInput && <p className="error-message">{errors.numberInput}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Checkbox Input:</label>
        <input
          type="checkbox"
          className="form-checkbox"
          checked={checkboxInput}
          onChange={handleCheckboxChange}
        />
        {errors.checkboxInput && <p className="error-message">{errors.checkboxInput}</p>}
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
        {errors.radioInput && <p className="error-message">{errors.radioInput}</p>}
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
        {errors.selectInput && <p className="error-message">{errors.selectInput}</p>}
      </div>

      <button type="submit" className="form-submit">
        Submit
      </button>
      {Object.values(errors).some((error) => error !== '') && (
        <div className="error-box">
          <h3 className="error-box-title">Whoops! There are some problems with your input</h3>
          <ul className="error-list">
            {Object.entries(errors).map(([key, value]) => {
              return value && <li key={key}>{value}</li>;
            })}
          </ul>
        </div>
      )}
    </form>
  );
};

export default Form;
