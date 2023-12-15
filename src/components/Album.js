import { useMedia } from "@/pages/[id]";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { forwardRef } from "react";
import { Button } from "./Buttons";
import IconImg from "./IconImg";

export const AlbumSession = forwardRef(function AlbumSession(_ , ref) {
  const theme = useTheme();
  const { isPhone } = useMedia();

  return (
    <Box width='100vw' minHeight='100vh' ref={ref} position='relative'>
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
        {isPhone ? null : (<IconImg src="/icons/album-deco.svg" />)}
        <Typography variant="display" color={theme.palette.primary.dark} textAlign="center">
          Ngày tình về chung đôi
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '24px', flexShrink: 0 }}>

        </Box>
      </Stack>
      <Box sx={{
        position: 'absolute',
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
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 67.31%, #FFF 97.17%)',
        zIndex: 1001,
      }}>
        <Button text='Xem thêm' />
      </Box>
    </Box>
  );
})