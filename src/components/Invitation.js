import { Box, Stack, Typography, styled, useTheme } from "@mui/material";
import { Button } from "./Buttons";
import IconImg from "./IconImg";
import { ThreeDCarousel } from "./3DCarousel";
import { useMedia } from "@/pages/[id]";
import { useState } from "react";
import { nha } from "@/configs/app";
import { SlideCarousel } from "./SlideCarousel";

const NavPhoneStack = styled(Stack)(({ theme, opennav }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  padding: opennav ? '8px' : 0,
  gap: '5px',
  height: opennav ? 191 : 0,
  overflow: 'hidden',
  transition: theme.transitions.create(['all'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export function InvitationSession({ username, clickEvent, clickCouple, clickMungCuoi, clickAlbum }) {
  const theme = useTheme();
  const nhaTrai = nha === 'trai';
  const { isPhone } = useMedia();
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {isPhone ? (
        <>
          <Box sx={{ display: 'flex', width: '100%', height: 50, padding: '8px 16px', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box width={24} height={24}></Box>
            <IconImg src='/icons/vnd.svg' width={24} height={24} />
            <IconImg src={openNav ? "/icons/close.svg" : "/icons/nav.svg"} width={24} height={24} onClick={() => setOpenNav(prev => !prev)} sx={{ cursor: 'pointer' }} />
          </Box>
          <NavPhoneStack opennav={openNav ? 1 : 0}>
            <Button type="text" text='Sự kiện chính' onClick={clickEvent} />
            <Button type='text' text='Cặp đôi' onClick={clickCouple} />
            <Button type='text' text='Album cưới' onClick={clickAlbum} />
            <Button type='text' text='Mừng cưới' onClick={clickMungCuoi} />
          </NavPhoneStack>
        </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', height: '104px' }}>
          <Button type="text" text='Sự kiện chính' onClick={clickEvent} />
          <Button type='text' text='Cặp đôi' onClick={clickCouple} />
          <IconImg src='/icons/vnd.svg' sx={{ width: '72px', hieght: '72px' }} />
          <Button type='text' text='Album cưới' onClick={clickAlbum} />
          <Button type='text' text='Mừng cưới' onClick={clickMungCuoi} />
        </Box>
      )}
      <Stack gap='8px' alignItems='center'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          {isPhone ? (
            <IconImg src="/icons/invitation-deco-left-phone.svg" width={88} height={84} />
          ) : (
            <Box></Box>
          )}
            <Stack alignItems='center' gap='8px'>
              <Typography color={theme.palette.primary.dark} variant="headline2">TRÂN TRỌNG KÍNH MỜI</Typography>
              <Typography color={theme.palette.primary.main} variant="display">{username}</Typography>
              <Typography color={theme.palette.primary.dark} variant="headline2">
                {nhaTrai ? 'TỚI DỰ LỄ THÀNH HÔN' : 'TỚI DỰ LỄ VU QUY'}
              </Typography>
            </Stack>
          {isPhone ? (
            <IconImg src="/icons/invitation-deco-right-phone.svg" width={88} height={84} />
          ) : (
            <Box></Box>
          )}
        </Box>
        {isPhone ? <SlideCarousel /> : <ThreeDCarousel />}
      </Stack>
    </>
  );
};