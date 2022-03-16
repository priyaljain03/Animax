import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

export default function ColorChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<StarIcon style={{color:"yellow"}}/>} label="With Icon" variant="outlined" />
    </Stack>
  );
}