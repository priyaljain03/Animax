import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

export default function ColorChip(props) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={props.rt_score} icon={<StarIcon style={{color:"yellow"}}/>} style={{color:"white"}} size="small"  variant="outlined" />
    </Stack>
  );
}