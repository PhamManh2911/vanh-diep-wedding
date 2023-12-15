import React from 'react';
import { Box, styled } from '@mui/material';

const IconImage = styled('img')({
  display: 'flex',
  height: 'inherit',
  width: 'inherit',
});

export default function IconImg({ src, sx = {}, imageSx, ...props }) {
	if (sx && sx.width && !sx.height) sx.height = 'auto';
	if (sx && sx.height && !sx.width) sx.width = 'auto';
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...sx,
    }} { ...props }>
      <IconImage src={src} sx={{ ...imageSx }} />
    </Box>
  );
}
