import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const colourOptions = ["C++","java","python","react","Node","MongoDB","Express","HTML","CSS","JavaScript","Bootstrap","Tailwind","Django","Flask","React Native","Angular","Vue","Svelte","Next.js","Gatsby"];

const animatedComponents = makeAnimated();

const DropdownItem = ()=> {
  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}

export default DropdownItem;