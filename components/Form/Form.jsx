import React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function Form() {


  const [Name, Set_Name] = useState('');
  const [Contact, Set_Contact] = useState('');
  const [Email, Set_Email] = useState('');

  return (
    <Box sx={{ width: '100%', height: '100vh', display: { sm: 'none', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#ffffff', px: 2 }} >
      <Typography variant='h2' sx={{ alignSelf: 'start', fontFamily: 'Roboto', fontSize: '24px', fontWeight: 800, color: '#22271f', textTransform: 'capitalize' }} >
        New proposal
      </Typography>
      <Typography variant='h2' sx={{ alignSelf: 'start', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, color: '#535353', textTransform: 'capitalize', mt: 1.5 }} >
        Client Details
      </Typography>

      {/* Name Input Field */}
      <Box sx={{ width: '100%', height: '40px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f7f4f8', mt: 1.3 }} >
        <input value={Name} onChange={(e) => Set_Name(e.target.value)} type="text" style={{ width: '100%', height: '100%', outline: 'none', border: 'unset', borderRadius: 'unset', fontFamily: 'Roboto', fontSize: '18px', fontWeight: 400, color: '#9b9b9a', background: 'transparent', padding: '0px 10px' }} autoComplete='off' autoCorrect='off'  placeholder='Client Name' />
      </Box>

      {/* Contact Input Field */}
      <Box sx={{ width: '100%', height: '40px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f7f4f8', mt: 1 }} >
        <input value={Contact} onChange={(e) => Set_Contact(e.target.value)} type="text" style={{ width: '100%', height: '100%', outline: 'none', border: 'unset', borderRadius: 'unset', fontFamily: 'Roboto', fontSize: '18px', fontWeight: 400, color: '#9b9b9a', background: 'transparent', padding: '0px 10px' }} autoComplete='off' autoCorrect='off'  placeholder='Client Contact' />
      </Box>

      {/* Contact Input Field */}
      <Box sx={{ width: '100%', height: '40px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f7f4f8', mt: 1 }} >
        <input value={Email} onChange={(e) => Set_Email(e.target.value)} type="text" style={{ width: '100%', height: '100%', outline: 'none', border: 'unset', borderRadius: 'unset', fontFamily: 'Roboto', fontSize: '18px', fontWeight: 400, color: '#9b9b9a', background: 'transparent', padding: '0px 10px' }} autoComplete='off' autoCorrect='off'  placeholder='Client Email' />
      </Box>

      <Typography variant='h2' sx={{ alignSelf: 'start', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, color: '#535353', textTransform: 'capitalize', mt: 2 }} >
        proposal type
      </Typography>

    </Box>
  )
}

export default Form