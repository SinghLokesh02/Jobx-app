import React, { useState } from 'react';

const RadioOptions = () => {
  const [checkedValues, setCheckedValues] = useState([]);

  const checkboxOptions = [
    { label: 'Full Time', value: 'full-time' },
    { label: 'Part Time', value: 'part-time' },
    { label: 'Internship', value: 'internship' },
    { label: 'Contract', value: 'contract' },
    { label: 'Freelance', value: 'freelance' },
    { label: 'Volunteer', value: 'volunteer' },
    { label: 'Temporary', value: 'temporary' },
    { label: 'Remote', value: 'remote' },
    { label: 'On-Site', value: 'on-site' },
    { label: 'Hybrid', value: 'hybrid' },
  ];

  const handleCheckboxChange = (value) => {
    const newCheckedValues = [...checkedValues];
    const isChecked = newCheckedValues.includes(value);

    if (isChecked) {
      // Remove the value if it's already checked
      const index = newCheckedValues.indexOf(value);
      newCheckedValues.splice(index, 1);
    } else {
      // Add the value if it's not checked
      newCheckedValues.push(value);
    }

    setCheckedValues(newCheckedValues);
  };

  const checkboxes = checkboxOptions.map((option) => (
    <label key={option.value} className="flex items-center mr-5 p-1 cursor-pointer">
      <input
        type="checkbox"
        id={`checkbox-${option.value}`}
        className="rounded-full w-5 h-5 bg-gray-400 focus:ring-0 focus:ring-offset-0 border-gray-300 checked:bg-orange-500 cursor-pointer"
        checked={checkedValues.includes(option.value)}
        onChange={() => handleCheckboxChange(option.value)}
        value={option.value} // Pass the value for easier handling
      />
      <span className="ml-4 text-gray-700">{option.label}</span>
    </label>
  ));

  return <div className="flex flex-wrap flex-col mx-5">{checkboxes}</div>;
};

export default RadioOptions;
