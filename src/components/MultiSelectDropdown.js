import React, { useState,useEffect, useRef } from 'react';

const MultiSelectDropdown = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    const newSelectedValues = [...selectedValues];
    const isSelected = newSelectedValues.includes(value);

    if (isSelected) {
      // Remove the option if already selected
      const index = newSelectedValues.indexOf(value);
      newSelectedValues.splice(index, 1);
    } else {
      // Add the option if not selected
      newSelectedValues.push(value);
    }

    setSelectedValues(newSelectedValues);
    onChange(newSelectedValues); // Trigger callback with updated selections
  };

  // Function to explicitly remove an item from the dropdown (visible in UI)
  const removeItem = (value) => {
    const newSelectedValues = selectedValues.filter((item) => item !== value);
    setSelectedValues(newSelectedValues);
    onChange(newSelectedValues); // Trigger callback with updated selections
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []); // Empty dependency array to run only once

  const dropdownItems = options.map((option) => {
    const isSelected = selectedValues.includes(option.value); // Check if option is selected

    return (
      <li
        key={option.value}
        onClick={() => handleOptionClick(option.value)}
        className={`text-gray-600 hover:bg-gray-100 px-4 py-2 cursor-pointer ${
          isSelected ? 'text-red-500' : ''
        }`}
      >
        {option.label}
        {isSelected && (
          <span className="ml-2 text-red-500 hover:text-red-700 cursor-pointer" onClick={() => removeItem(option.value)}>
            (Remove)
          </span>
        )}
      </li>
    );
  });

  const selectedLabels = selectedValues.map((value) => {
    const option = options.find((option) => option.value === value);
    return option ? option.label : value; // Handle cases where label might not be available
  });

  return (
    <div className="multiselect-dropdown relative">
      <button
        onClick={toggleDropdown}
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {selectedLabels.length > 0 ? selectedLabels.join(', ') : placeholder}
      </button>
      {isOpen && (
        <ul
          ref={dropdownRef}
          className="absolute top-full left-0 w-full rounded-md shadow-md bg-white z-50 overflow-y-auto max-h-60"
        >
          {dropdownItems}
        </ul>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
