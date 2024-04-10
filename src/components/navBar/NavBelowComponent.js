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
      <div className='flex justify-center md:gap-12 w-full md:p-3 flex-col md:flex-row py-2 align-middle gap-3'>
      <div className='m-auto'>
       <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='w-[300px] bg-white'
        >
          <MenuItem value="">
           <em>Search Jobs</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       </div>

       <div className='m-auto'>
       <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='w-[300px] bg-white'
        >
          <MenuItem value="">
            <em>Search Locations</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       </div>

       <div className='m-auto'>
       <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='w-[300px] bg-white'
        >
          <MenuItem value="">
            <em>Search Category</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       </div>
      {/* <input type="button" value={"Search Now"}  className='font-bold font-serif py-3 px-5 text-white hover:bg-orange-700 border-2'/> */}
      </div>

      </FormControl>
    </div>
  );
}