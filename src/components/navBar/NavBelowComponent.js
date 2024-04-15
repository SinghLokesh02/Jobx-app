import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function NavBelowComponents() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='bg-orange-500'>
      <FormControl sx={{ minWidth: 240 }} className='flex justify-center align-middle w-full'>
        <div className='w-full md:w-auto md:p-3 flex flex-col gap-3 md:flex-row p-5'>
          <div className='m-auto w-full md:w-80'>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              className='w-full bg-white h-10'
            >
              <MenuItem value="">
                <em>Search Jobs</em>
              </MenuItem>
              <MenuItem value={"React Js Developer"}>React Js Developer</MenuItem>
              <MenuItem value={"Python Developer"}>Python Developer</MenuItem>
              <MenuItem value={"NodeJs Developer"}>NodeJs Developer</MenuItem>
              <MenuItem value={"Content Writer"}>Content Writer</MenuItem>
              <MenuItem value={"Process Manager"}>Process Manager</MenuItem>
              <MenuItem value={"SEO Specialist"}>SEO Specialist</MenuItem>
            </Select>
          </div>

          <div className='m-auto w-full md:w-80'>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              className='w-full bg-white h-10'
            >
              <MenuItem value="">
                <em>Search Locations</em>
              </MenuItem>
              <MenuItem value={"Bhopal"}>Bhopal</MenuItem>
              <MenuItem value={"Ratlam"}>Ratlam</MenuItem>
              <MenuItem value={"Indore"}>Indore</MenuItem>
              <MenuItem value={"Ujjain"}>Ujjain</MenuItem>
              <MenuItem value={"Gwalior"}>Gwalior</MenuItem>
            </Select>
          </div>

          <div className='m-auto w-full md:w-80'>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              className='w-full bg-white h-10'
            >
              <MenuItem value="">
                <em>Search Category</em>
              </MenuItem>
              <MenuItem value={"Frontend Developer"}>Frontend Developer</MenuItem>
              <MenuItem value={"Backend Developer"}>Backend Developer</MenuItem>
              <MenuItem value={"Content Writer"}>Content Writer</MenuItem>
              <MenuItem value={"Digital Marketing"}>Digital Marketing</MenuItem>
              <MenuItem value={"Accounting"}>Accounting</MenuItem>
              <MenuItem value={"Sales"}>Sales</MenuItem>
              <MenuItem value={"UI/UX"}>UI/UX</MenuItem>
              <MenuItem value={"Data Analyst"}>Data Analyst</MenuItem>
            </Select>
          </div>
          {/* <input type="button" value={"Search Now"}  className='font-bold font-serif py-3 px-5 text-white hover:bg-orange-700 border-2'/> */}
        </div>
      </FormControl>
    </div>
  );
}
