import Image from "next/image";
import { useState } from "react";
import { Box, Stack, Typography, styled, useTheme } from "@mui/material";

import { Button } from "./Buttons";
import { ThreeDCarousel } from "./3DCarousel";
import { useMedia } from "@/providers/MediaProvider";
import { nha } from "@/configs/app";
import { SlideCarousel } from "./SlideCarousel";
import { BackgroundFlower, BackgroundFlowerMobile } from "./Flower/BackgroundFlower";

const NavPhoneStack = styled(Stack)(({ theme, opennav }) => ({
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

export function InvitationSession({
  username,
  clickEvent,
  clickCouple,
  clickMungCuoi,
  clickAlbum,
}) {
  const theme = useTheme();
  const nhaTrai = nha === "trai";
  const { isPhone } = useMedia();
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {isPhone ? (
        <>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: 50,
              padding: "8px 16px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box width={24} height={24}></Box>
            <Image
              src="/icons/vnd.svg"
              width={24}
              height={24}
              alt="vnd phone"
            />
            <Image
              src={openNav ? "/icons/close.svg" : "/icons/nav.svg"}
              width={24}
              height={24}
              onClick={() => setOpenNav((prev) => !prev)}
              alt="nav icon"
            />
          </Box>
          <NavPhoneStack opennav={openNav ? 1 : 0}>
            <Button type="text" text="Sự kiện chính" onClick={clickEvent} />
            <Button type="text" text="Cặp đôi" onClick={clickCouple} />
            <Button type="text" text="Album cưới" onClick={clickAlbum} />
            <Button type="text" text="Mừng cưới" onClick={clickMungCuoi} />
          </NavPhoneStack>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            height: "104px",
          }}
        >
          <Button type="text" text="Sự kiện chính" onClick={clickEvent} />
          <Button type="text" text="Cặp đôi" onClick={clickCouple} />
          <Image
            src="/icons/vnd.svg"
            width={72}
            height={72}
            alt="vnd desktop"
          />
          <Button type="text" text="Album cưới" onClick={clickAlbum} />
          <Button type="text" text="Mừng cưới" onClick={clickMungCuoi} />
        </Box>
      )}
      <Stack gap={isPhone ? 0 : "8px"} alignItems="center" style={{ position: "relative" }}>
        {isPhone ? (
          <>
            <BackgroundFlowerMobile sx={{ top: 0, left: 0, transform: "rotateY(180deg)" }} />
            <BackgroundFlowerMobile sx={{ top: 0, right: 0 }} />
          </>
        ) : (
          <>
            <BackgroundFlower sx={{ top: 0, left: 0, transform: "rotateY(180deg)" }} />
            <BackgroundFlower sx={{ top: 0, right: 0 }} />
          </>
        )}
        <Stack alignItems="center" gap={isPhone ? 0 : "8px"}>
          <Typography color={theme.palette.primary.dark} variant="headline2">
            TRÂN TRỌNG KÍNH MỜI
          </Typography>
          <Typography color={theme.palette.primary.main} variant="display">
            {username ?? "Bạn"}
          </Typography>
          <Typography color={theme.palette.primary.dark} variant="headline2">
            {nhaTrai ? "TỚI DỰ LỄ THÀNH HÔN" : "TỚI DỰ LỄ VU QUY"}
          </Typography>
        </Stack>
        {isPhone ? <SlideCarousel /> : <ThreeDCarousel />}
      </Stack>
    </>
  );
}
