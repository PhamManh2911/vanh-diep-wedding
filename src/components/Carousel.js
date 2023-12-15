import { useEffect, useState } from "react";
import IconImg from "./IconImg";
import { Box, Stack, Typography, styled, useTheme } from "@mui/material";

const zIndex = 1000;
const opacity = 1;

const genCommonSx = (theme) => ({
  position: 'absolute',
  aspectRatio: '17/10',
  width: '55vw',
  top: '50%',
  left: '50%',
  translate: '-50% -50%',
  borderRadius: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex,
  opacity,
  transition: theme.transitions.create(['all'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: 'hidden',
});

const genCommonStyle = (theme) => ({
  transition: theme.transitions.create(['all'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const images = [
  '/images/image1.jpeg',
  '/images/image2.jpeg',
  '/images/image3.jpeg',
  '/images/image4.jpeg',
  '/images/image5.jpeg',
];

const genTransitionProps = (index) => {
  const pos = Math.abs(index);

  return {
    zIndex: zIndex - pos,
    transform: `scale(${(5/6)**pos}, ${(5/6)**pos}) translateX(${280*index}px)`,
    opacity: opacity-0.05*pos,
  };
};

const recenterIndex = (pos) => {
  if (pos === 4) return -1;
  if (pos === 3) return -2;
  if (pos === -4) return 1;
  if (pos === -3) return 2;
  return pos;
}

const IconImage = styled('img')({
  height: 'auto',
  width: '100%',
});

export function Carousel() {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent(prevCurrent => prevCurrent === 4 ? 0 : prevCurrent + 1);
  }

  const handlePrev = () => {
    setCurrent(prevCurrent => prevCurrent === 0 ? 4 : prevCurrent - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prevCurrent => {
        if (prevCurrent === 4) return 0;
        return prevCurrent + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <Stack
      padding='8px 64px'
      alignItems='center'
      gap='24px'
    >
      <Box width='90vw' height='65vh' position='relative'>
        <Typography sx={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          zIndex: 1001,
          color: theme.palette.primary.light,
          textAlign: 'center',
          textShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
          fontSize: 64,
          lineHeight: '72px',
          letterSpacing: '32px',
        }}>
          01.01.2024
        </Typography>
        {images.map((image, index) => (
          <Box
            key={image}
            style={{
              ...genCommonSx(theme),
              ...genTransitionProps(recenterIndex(index-current)),
            }}
            onClick={index === current ? null : () => setCurrent(index)}
          >
            {index === current && (
              <>
                <Box sx={{
                  height: '100%',
                  width: '40%',
                  position: 'absolute',
                  left: '0%',
                  cursor: 'pointer',
                }}
                  onClick={handlePrev}
                ></Box>
                <Box sx={{
                  height: '100%',
                  width: '40%',
                  position: 'absolute',
                  left: '60%',
                  cursor: 'pointer',
                }}
                  onClick={handleNext}
                ></Box>
              </>
            )}
            <IconImage src={image} sx={{
              ...genCommonStyle(theme),
            }} />
          </Box>
        ))}
      </Box>
      <Stack
        direction='row'
        padding='8px'
        justifyContent='center'
        alignItems='8px'
        gap='8px'
      >
        <Box sx={{ display: 'flex', padding: '8px', alignItems: 'center', cursor: 'pointer' }} onClick={handlePrev}>
          <IconImg src='/icons/chevron-left.svg' width='24px' height='24px' />
        </Box>
        <Box sx={{ display: 'flex', padding: '8px', alignItems: 'center', gap: '10px', width: '120px' }}>
          {[0,1,2,3,4].map(value => (
            <IconImg
              key={value}
              onClick={() => setCurrent(value)}
              src={value === current ? '/icons/dot-active.svg' : '/icons/dot.svg'}
              style={{
                ...(value === current ? { width: 16, height: 16 } : { width: 12, height: 12 }),
                cursor: 'pointer'
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', padding: '8px', alignItems: 'center', cursor: 'pointer' }} onClick={handleNext}>
          <IconImg src='/icons/chevron-right.svg' width='24px' height='24px' />
        </Box>
      </Stack>
    </Stack>
  );
}