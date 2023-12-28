import { Stack, Typography, useTheme } from "@mui/material";

import { ThreeDCarousel } from "./3DCarousel";
import { useMedia } from "@/providers/MediaProvider";
import { nha } from "@/configs/app";
import { SlideCarousel } from "./SlideCarousel";
import {
  BackgroundFlower,
  BackgroundFlowerMobile,
} from "./Flower/BackgroundFlower";

export function InvitationSession({ username }) {
  const theme = useTheme();
  const nhaTrai = nha === "trai";
  const { isPhone } = useMedia();

  return (
    <Stack
      gap={isPhone ? 0 : "8px"}
      alignItems="center"
      style={{ position: "relative" }}
    >
      {isPhone ? (
        <>
          <BackgroundFlowerMobile
            sx={{ top: 0, left: 0, transform: "rotateY(180deg)" }}
          />
          <BackgroundFlowerMobile sx={{ top: 0, right: 0 }} />
        </>
      ) : (
        <>
          <BackgroundFlower
            sx={{ top: 0, left: 0, transform: "rotateY(180deg)" }}
          />
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
  );
}
