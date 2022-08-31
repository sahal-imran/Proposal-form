import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from '@mui/material';

function Form() {


  const [Name, Set_Name] = useState('');
  const [Contact, Set_Contact] = useState('');
  const [Email, Set_Email] = useState('');
  const [Design, Set_Design] = useState();
  const [Development, Set_Development] = useState();

  const [ProposalType, setProposalType] = useState('');

  const handleChange = (event) => {
    setProposalType(event.target.value);
  };

  // Validations States
  const [RequiredAll, Set_RequiredAll] = useState(false);
  const [Error, Set_Error] = useState(false);
  const [ErrorMessage, Set_ErrorMessage] = useState(false);

  const clr = RequiredAll ? "red" : "transparent";

  const Next = () => {
    if (Name.length === 0 && Contact.length === 0 && Email.length === 0 && !Design && !Development && ProposalType.length === 0) {
      Set_RequiredAll(true);
      return;
    }
    else if (Name.length === 0) {
      Set_Error(true);
      Set_ErrorMessage('Name is required*');
      return;
    }
    else if (Contact.length === 0) {
      Set_Error(true);
      Set_ErrorMessage('Contact is required*');
      return;
    }
    else if (Email.length === 0) {
      Set_Error(true);
      Set_ErrorMessage('Email is required*');
      return;
    }
    else if (ProposalType.length === 0) {
      Set_Error(true);
      Set_ErrorMessage('Select ProposalType*');
      return;
    }
    else if (!Design) {
      Set_Error(true);
      Set_ErrorMessage('Put design wks*');
      return;
    }
    else if (!Development) {
      Set_Error(true);
      Set_ErrorMessage('Put development wks*');
      return;
    }

    // +++++++++++++++++++++++++++
    // Make API's request here...
    // +++++++++++++++++++++++++++

  }



  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#ffffff', px: 2 }} >
      <Typography variant='h2' sx={{ alignSelf: 'start', fontFamily: 'Roboto', fontSize: '24px', fontWeight: 800, color: '#22271f', textTransform: 'capitalize' }} >
        New proposal
      </Typography>
      <Typography variant='h2' sx={{ alignSelf: 'start', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, color: '#535353', textTransform: 'capitalize', mt: 1.5 }} >
        Client Details
      </Typography>

      {/* Name Input Field */}
      <Box sx={{ width: '100%', height: '40px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f7f4f8', mt: 1.3, border: `1px solid ${clr}` }} >
        <input value={Name} onChange={(e) => { Set_Name(e.target.value); Set_RequiredAll(false); Set_Error(false) }} type="text" style={{ width: '100%', height: '100%', outline: 'none', border: 'unset', borderRadius: 'unset', fontFamily: 'Roboto', fontSize: '18px', fontWeight: 400, color: '#9b9b9a', background: 'transparent', padding: '0px 10px' }} autoComplete='off' autoCorrect='off' placeholder='Client Name' />
      </Box>

      {/* Contact Input Field */}
      <Box sx={{ width: '100%', height: '40px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f7f4f8', mt: 1, border: `1px solid ${clr}` }} >
        <input value={Contact} onChange={(e) => { Set_Contact(e.target.value); Set_RequiredAll(false); Set_Error(false) }} type="text" style={{ width: '100%', height: '100%', outline: 'none', border: 'unset', borderRadius: 'unset', fontFamily: 'Roboto', fontSize: '18px', fontWeight: 400, color: '#9b9b9a', background: 'transparent', padding: '0px 10px' }} autoComplete='off' autoCorrect='off' placeholder='Client Contact' />
      </Box>

      {/* Contact Input Field */}
      <Box sx={{ width: '100%', height: '40px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f7f4f8', mt: 1, border: `1px solid ${clr}` }} >
        <input value={Email} onChange={(e) => { Set_Email(e.target.value); Set_RequiredAll(false); Set_Error(false) }} type="text" style={{ width: '100%', height: '100%', outline: 'none', border: 'unset', borderRadius: 'unset', fontFamily: 'Roboto', fontSize: '18px', fontWeight: 400, color: '#9b9b9a', background: 'transparent', padding: '0px 10px' }} autoComplete='off' autoCorrect='off' placeholder='Client Email' />
      </Box>

      <Typography variant='h2' sx={{ alignSelf: 'start', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, color: '#535353', textTransform: 'capitalize', mt: 2 }} >
        proposal type
      </Typography>

      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={ProposalType}
        onChange={(e) => { handleChange(e); Set_RequiredAll(false); Set_Error(false) }}
        sx={{ width: '100%' }}
      >
        <Box
          sx={{
            width: "100%",
            height: "36px",
            borderRadius: "4px",
            overflow: "hidden",
            backgroundColor: "#f7f4f8",
            mt: 1.3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1.2,
            border: `1px solid ${clr}`
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Roboto",
              fontSize: "18px",
              fontWeight: 400,
              color: "#3e3e3d",
            }}
          >
            Idea to Prototype
          </Typography>
          <FormControlLabel value="Idea to Prototype" sx={{ width: '20px', height: '20px' }} control={<Radio />} />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "36px",
            borderRadius: "4px",
            overflow: "hidden",
            backgroundColor: "#f7f4f8",
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1.2,
            border: `1px solid ${clr}`
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Roboto",
              fontSize: "18px",
              fontWeight: 400,
              color: "#3e3e3d",
            }}
          >
            Ascent
          </Typography>
          <FormControlLabel value="Ascent" sx={{ width: '20px', height: '20px' }} control={<Radio />} />
        </Box>
      </RadioGroup>

      {/* Estimated Timeframe */}
      <Typography variant='h2' sx={{ alignSelf: 'start', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, color: '#535353', textTransform: 'capitalize', mt: 2 }} >
        Estimated Timeframe
      </Typography>

      <Box sx={{ width: '100%', height: '40px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f7f4f8', mt: 1.3, display: "flex", justifyContent: "space-between", alignItems: "center", px: 1.2, border: `1px solid ${clr}` }} >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Roboto",
            fontSize: "18px",
            fontWeight: 400,
            color: "#3e3e3d",
          }}
        >
          Design
        </Typography>
        <input min="0" value={Design} onChange={(e) => { Set_Design(e.target.value); Set_RequiredAll(false); Set_Error(false) }} type="number" style={{ outline: 'none', border: 'none', background: 'transparent', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, color: '#9b9b9a', width: '60px  ' }} placeholder="0 wks" />
      </Box>

      <Box sx={{ width: '100%', height: '40px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f7f4f8', mt: 1, display: "flex", justifyContent: "space-between", alignItems: "center", px: 1.2, border: `1px solid ${clr}` }} >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Roboto",
            fontSize: "18px",
            fontWeight: 400,
            color: "#3e3e3d",
          }}
        >
          Development
        </Typography>
        <input min="0" value={Development} onChange={(e) => { Set_Development(e.target.value); Set_RequiredAll(false); Set_Error(false) }} type="number" style={{ outline: 'none', border: 'none', background: 'transparent', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, color: '#9b9b9a', width: '60px  ' }} placeholder="0 wks" />
      </Box>

      <Box sx={{ width: '100%', mt: 1, display: "flex", justifyContent: "space-between", alignItems: "center", px: 1.2 }} >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: 400,
            color: "#728ea0",
          }}
        >
          Sub-Total (Incl. GST)
        </Typography>
        <Typography variant='h2' sx={{ alignSelf: 'start', fontFamily: 'Roboto', fontSize: '20px', fontWeight: 600, color: '#22271f', textTransform: 'capitalize' }} >
          $112,000.00
        </Typography>
      </Box>

      {/* Validation Message */}
      {
        Error &&
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: 400,
            color: "red",
            alignSelf: 'start',
            mt: 1.5
          }}
        >
          {ErrorMessage}
        </Typography>
      }

      {/* Button */}
      <Box sx={Error ? { width: '100%', height: '36px', display: "flex", justifyContent: "center", alignItems: "center", mt: 1.5 } : { width: '100%', height: '36px', display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }} >
        <Button variant='contained' sx={{ width: '25%', height: '100%', boxShadow: 'none', borderRadius: '4px', backgroundColor: '#999999', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, color: 'white', textTransform: 'capitalize', "&:hover": { backgroundColor: '#999999', boxShadow: 'none', }, mr: .5 }} >
          close
        </Button>
        <Button onClick={() => Next()} variant='contained' sx={{ width: '75%', height: '100%', boxShadow: 'none', borderRadius: '4px', backgroundColor: '#1976d2', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, color: 'white', textTransform: 'capitalize', "&:hover": { backgroundColor: '#1976d2', boxShadow: 'none', }, ml: .5 }} >
          Next
        </Button>
      </Box>

    </Box>
  )
}

export default Form