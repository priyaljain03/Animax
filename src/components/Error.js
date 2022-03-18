import * as React from 'react';
import Box from '@mui/material/Box';
import ReportIcon from '@mui/icons-material/Report';
import '../css/Error.css';

export default function BoxSx(props) {
  return (
    <Box
      className="error-box"
      sx={{
        width: '40%',
        height: 50,
        backgroundColor: 'orange',
        color:'whir',
        fontSize:'15px',
        fontWeight:'1000',
        alignItems:"center",
        borderRadius:'20px',
        padding:"10px",
        margin:'auto',
        position: 'absolute',
        top:'30%',
        left:'50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <ReportIcon className="error-icon" style={{fontSize:"20px"}}/>Sorry,something went Wrong .
    </Box>
  );
}