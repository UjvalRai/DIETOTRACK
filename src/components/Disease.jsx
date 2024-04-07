import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const diseases = [
  'COVID-19',
  'Influenza',
  'Diabetes',
  'Asthma',
  'Hypertension',
  'Arthritis',
  'Alzheimer\'s Disease',
  'Cancer',
  'Heart Disease',
  'Stroke',
  'Chronic Kidney Disease',
  'Chronic Obstructive Pulmonary Disease (COPD)'
];

const DiseaseInput = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (inputValue) => {
    const inputValueLowerCase = inputValue.trim().toLowerCase();
    return diseases.filter(disease =>
      disease.toLowerCase().includes(inputValueLowerCase)
    );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: 'Enter the name of the disease',
    value,
    onChange
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={suggestion => suggestion}
      renderSuggestion={suggestion => <div>{suggestion}</div>}
      inputProps={inputProps}
      className="mt-1 p-2 border rounded-md w-full"
      renderInputComponent={(inputProps) => (
        <input {...inputProps} className="w-full p-2 border rounded-md z-20 text-black" />
      )}
      
      renderSuggestionsContainer={({ containerProps, children }) => (
        <div {...containerProps} className="absolute z-10 bg-white shadow-md rounded-md mt-1  text-black">
          {children}
        </div>
      )}
      
    />
  );
};

export default DiseaseInput;
