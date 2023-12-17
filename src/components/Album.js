import { uuid } from 'uuidv4';
import { forwardRef, useState } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

import { useMedia } from "@/pages/[id]";
import { Button } from "./Buttons";
import IconImg from "./IconImg";

const desktopAlbum = [
  [{src: '/images/dummy2.png', height: 357}, {src: '/images/dummy1.png', height: 146}, {src: '/images/dummy2.png', height: 357}, {src: '/images/dummy1.png', height: 146}],
  [{src: '/images/dummy2.png', height: 357}, {src: '/images/dummy2.png', height: 357}, {src: '/images/dummy2.png', height: 357}, {src: '/images/dummy2.png', height: 357}],
  [{src: '/images/dummy2.png', height: 357}, {src: '/images/dummy1.png', height: 146}, {src: '/images/dummy2.png', height: 357}, {src: '/images/dummy1.png', height: 146}],
  [{src: '/images/dummy1.png', height: 146}, {src: '/images/dummy1.png', height: 146}, {src: '/images/dummy1.png', height: 146}, {src: '/images/dummy1.png', height: 146}],
];

const phoneAlbum = [
  [{src: '/images/dummy2.png', height: 219}, {src: '/images/dummy1.png', height: 92}, {src: '/images/dummy2.png', height: 219}, {src: '/images/dummy1.png', height: 92}],
  [{src: '/images/dummy2.png', height: 219}, {src: '/images/dummy2.png', height: 219}, {src: '/images/dummy1.png', height: 92}, {src: '/images/dummy2.png', height: 219}],
];

export const AlbumSession = forwardRef(function AlbumSession(_ , ref) {
  const theme = useTheme();
  const { isPhone } = useMedia();

  const [expand, setExpand] = useState(false);

  const imagesAlbum = isPhone ? phoneAlbum : desktopAlbum;
  const imageWidth = isPhone ? 146 : 236;

  return (
    <Box width='100vw' height={expand ? 'fit-content' : '1035px'} ref={ref} position='relative' sx={{ overflow: 'hidden', transition: theme.transitions.create(['all'], { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.enteringScreen }) }}>
      <Stack
        width='100%'
        minHeight='100%'
        padding='0px 82px 64px 82px'
        alignItems='center'
        gap={isPhone ? '8px' : '32px'}
        flexShrink={0}
        sx={{ background: theme.palette.neutral.light, zIndex: 1000 }}
      >
        <Typography variant="headline1" color={theme.palette.primary.dark} textAlign="center">
          ALBUM ẢNH CƯỚI
        </Typography>
        {isPhone ? (<IconImg src="/icons/album-deco-phone.svg" />) : (<IconImg src="/icons/album-deco.svg" />)}
        <Typography variant="display" color={theme.palette.primary.dark} textAlign="center">
          Ngày tình về chung đôi
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '24px' }}>
          {imagesAlbum.map((images) => (
            <Stack key={uuid()} gap='24px'>
              {images.map(image => (
                <IconImg key={uuid()} sx={{ width: imageWidth, height: image.height, borderRadius: '20px', overFlow: 'hidden' }} src={image.src} />
              ))}
            </Stack>
          ))}
        </Box>
      </Stack>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'inline-flex',
        height: '100%',
        width: '100%',
        padding: '32px 0',
        margin: 'auto',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '8px',
        flexShrink: 0,
        background: expand ? null : 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 67.31%, #FFF 97.17%)',
        zIndex: 1001,
      }}>
        <Button onClick={() => setExpand(prev => !prev)} text={expand ? 'Thu nhỏ' : 'Xem thêm'} />
      </Box>
    </Box>
  );
})