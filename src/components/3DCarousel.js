import { useEffect, useState } from "react";
import IconImg from "./IconImg";
import { Box, Stack, Typography, styled, useTheme } from "@mui/material";

const zIndex = 1000;
const opacity = 1;

const genCommonSx = (theme) => ({
  position: 'absolute',
  aspectRatio: '17/10',
  width: '800px',
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
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
  '/images/image4.png',
  '/images/image5.png',
];

const genTransitionProps = (index) => {
  const pos = Math.abs(index);

  return {
    zIndex: zIndex - pos,
    transform: `scale(${(4/5)**pos}, ${(4/5)**pos}) translateX(${280*index}px)`,
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

export function ThreeDCarousel() {
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
      setCurrent(prevCurrent => prevCurrent === 4 ? 0 : prevCurrent + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <Stack padding='8px 64px' alignItems='center' gap='24px' width={1430} height={560} >
      <Box width={1300} height={460} position='relative'>
        <Typography sx={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          zIndex: 1001,
          color: theme.palette.primary.light,
          textAlign: 'center',
          textShadow: '4px 4px 20px rgba(0, 0, 0, 0.25)',
          fontFamily: 'Bellissima',
          fontSize: 80,
          lineHeight: '64px',
          letterSpacing: '3.2px',
        }}>
          Việt Anh &  Ngọc Diệp
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
                <Box sx={{ height: '100%', width: '40%', position: 'absolute', left: '0%', cursor: 'pointer' }} onClick={handlePrev} ></Box>
                <Box sx={{ height: '100%', width: '40%', position: 'absolute', left: '60%', cursor: 'pointer' }} onClick={handleNext}></Box>
              </>
            )}
            <IconImage src={image} sx={genCommonStyle(theme)} />
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', padding: '8px', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
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
      </Box>
    </Stack>
  );
}