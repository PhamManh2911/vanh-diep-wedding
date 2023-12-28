import Image from "next/image";
import { useState } from "react";
import { Box, Stack, styled } from "@mui/material";

import { Button } from "../Buttons";

const NavPhoneStack = styled(Stack)(({ theme, opennav }) => ({
  position: "fixed",
  top: 50,
  left: 0,
  zIndex: 2000,
  backgroundColor: "white",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: opennav ? "8px" : 0,
  gap: "5px",
  height: opennav ? 191 : 0,
  overflow: "hidden",
  transition: theme.transitions.create(["all"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
}));

export function MobileNav({
  clickEvent,
  clickCouple,
  clickAlbum,
  clickMungCuoi,
}) {
  const [openNav, setOpenNav] = useState(false);

  const onClickNav = (callback) => {
    setOpenNav(false);
    callback();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: 50,
          padding: "8px 16px",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2000,
          backgroundColor: "white",
        }}
      >
        <Box width={24} height={24}></Box>
        <Image src="/icons/vnd.svg" width={24} height={24} alt="vnd phone" />
        <Image
          src={openNav ? "/icons/close.svg" : "/icons/nav.svg"}
          width={24}
          height={24}
          onClick={() => setOpenNav((prev) => !prev)}
          alt="nav icon"
        />
      </Box>
      <NavPhoneStack opennav={openNav ? 1 : 0}>
        <Button
          type="text"
          text="Sự kiện chính"
          onClick={() => onClickNav(clickEvent)}
        />
        <Button
          type="text"
          text="Cặp đôi"
          onClick={() => onClickNav(clickCouple)}
        />
        <Button
          type="text"
          text="Album cưới"
          onClick={() => onClickNav(clickAlbum)}
        />
        <Button
          type="text"
          text="Mừng cưới"
          onClick={() => onClickNav(clickMungCuoi)}
        />
      </NavPhoneStack>
      <Box height={50} width="100%"></Box>
    </>
  );
}
