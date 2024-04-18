import React from 'react'
import MultiSelectDropdown from './MultiSelectDropdown';

function MultiDropdownItem() {
  const options = [
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Javascript', label: 'Javascript' },
    { value: 'C', label: 'C' },
    { value: 'C++', label: 'C++' },
    { value: 'React', label: 'React' },
    { value: 'Python', label: 'Python' },
    { value: 'NodeJs', label: 'NodeJs' },
    { value: 'Tailwind CSS', label: 'Tailwind CSS' },
  ];
  const handleChange = (selectedValues) => {
    console.log('Selected values:', selectedValues);
  };
  return (    
   <div className='w-[70%]'>
     <MultiSelectDropdown
      options={options}
      placeholder="Skills"
      onChange={handleChange}
    />
   </div>
    
  )
}

export default MultiDropdownItem
