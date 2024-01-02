import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import { useMedia } from "@/providers/MediaProvider";
import { nha } from "@/configs/app";
import { bellissima } from "../../public/fonts";
import { TimelineFlower } from "./Flower/TimelineFlower";

function VerticalDivider({ disableVertical }) {
  const theme = useTheme();
  const { isPhone } = useMedia();

  return (
    <Stack
      sx={{ height: isPhone ? 84 : 140, alignItems: "center", gap: "-2px" }}
    >
      <Image
        src="/icons/ellipse.svg"
        alt="ellipse"
        width={isPhone ? 8 : 16}
        height={isPhone ? 8 : 16}
      />
      <Box
        sx={{
          width: isPhone ? "1px" : "4px",
          height: isPhone ? 78 : 126,
          flexShrink: 0,
          background: theme.palette.neutral.midLight,
          visibility: disableVertical ? "hidden" : "visible",
        }}
      ></Box>
    </Stack>
  );
}

function EventIcon({ src, alignItems }) {
  const { isPhone } = useMedia();

  return (
    <Stack
      width={isPhone ? 150 : 420}
      alignItems={alignItems}
      gap="8px"
      padding={isPhone ? "4px" : "8px"}
    >
      <Image
        src={src}
        width={isPhone ? 60 : 120}
        height={isPhone ? 60 : 120}
        alt="image"
      />
    </Stack>
  );
}

function EventContentWrapper({ children, alignItems }) {
  const { isPhone } = useMedia();

  return (
    <Stack
      sx={{
        width: isPhone ? 150 : 420,
        padding: isPhone ? "4px" : "8px",
        justifyContent: "center",
        alignItems,
        gap: isPhone ? "4px" : "16px",
      }}
    >
      {children}
    </Stack>
  );
}

function EventDecs({ children, justifyContent }) {
  const theme = useTheme();
  const { isPhone } = useMedia();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent,
        gap: "8px",
        alignSelf: "stretch",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: theme.palette.primary.main,
          fontFamily: bellissima.style.fontFamily,
          fontSize: isPhone ? 20 : 32,
          lineHeight: isPhone ? "30px" : "40px",
          letterSpacing: "normal",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export function TimelineSession() {
  const theme = useTheme();
  const { isPhone } = useMedia();
  const isHomeBoy = nha === "trai";

  return (
    <Stack
      sx={{ padding: isPhone ? "16px 0 24px" : "64px 0 154px" }}
      alignItems="center"
      gap={isPhone ? "8px" : "32px"}
      alignSelf="stretch"
      position="relative"
    >
      {!isPhone && (
        <TimelineFlower sx={{ position: "absolute", top: 587, left: 0 }} />
      )}
      <Typography
        variant="headline1"
        color={theme.palette.primary.dark}
        textAlign="center"
      >
        {isHomeBoy ? "LỄ THÀNH HÔN" : "LỄ VU QUY"}
      </Typography>
      <Typography
        variant="display"
        color={theme.palette.primary.dark}
        textAlign="center"
      >
        Ngày mình nên vợ nên chồng
      </Typography>
      <Stack alignItems="center">
        <Box
          height={isPhone ? 84 : 140}
          sx={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
        >
          <EventIcon src="/images/record.png" alignItems="flex-end" />
          <VerticalDivider />
          <EventContentWrapper alignItems="flex-start">
            <Stack
              alignItems="flex-start"
              justifyContent="flex-start"
              gap={isPhone ? "4px" : "8px"}
            >
              <Typography
                variant="title"
                textAlign="left"
                color={theme.palette.neutral.dark}
              >
                {isHomeBoy ? "09:00 SÁNG" : "07:00 SÁNG"}
              </Typography>
              <Typography
                variant="headline2"
                textAlign="left"
                color={theme.palette.neutral.dark}
              >
                {isHomeBoy ? "ĐÓN KHÁCH" : "LÀM LỄ"}
              </Typography>
            </Stack>
            <EventDecs justifyContent="flex-start">
              Sự hiện diện quý giá
            </EventDecs>
          </EventContentWrapper>
        </Box>
        <Box
          height={isPhone ? 84 : 140}
          sx={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
        >
          <EventContentWrapper alignItems="flex-end">
            <Stack
              alignItems="flex-end"
              justifyContent="flex-end"
              gap={isPhone ? "4px" : "8px"}
            >
              <Typography
                variant="title"
                textAlign="right"
                color={theme.palette.neutral.dark}
              >
                {isHomeBoy ? "09:30 SÁNG" : "07:30 SÁNG"}
              </Typography>
              <Typography
                variant="headline2"
                textAlign="right"
                color={theme.palette.neutral.dark}
              >
                {isHomeBoy ? "LÀM LỄ" : "ĐƯA DÂU"}
              </Typography>
            </Stack>
            <EventDecs justifyContent="flex-end">
              Giây phút thiêng liêng
            </EventDecs>
          </EventContentWrapper>
          <VerticalDivider />
          <EventIcon src="/images/rings.png" />
        </Box>
        <Box
          height={isPhone ? 84 : 140}
          sx={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
        >
          <EventIcon src="/images/champagne.png" alignItems="flex-end" />
          <VerticalDivider />
          <EventContentWrapper alignItems="flex-start">
            <Stack
              alignItems="flex-start"
              justifyContent="flex-start"
              gap={isPhone ? "4px" : "8px"}
            >
              <Typography
                variant="title"
                textAlign="left"
                color={theme.palette.neutral.dark}
              >
                {isHomeBoy ? "10:30 SÁNG" : "09:30 SÁNG"}
              </Typography>
              <Typography
                variant="headline2"
                textAlign="left"
                color={theme.palette.neutral.dark}
              >
                {isHomeBoy ? "NHẬP TIỆC" : "LỄ THÀNH HÔN"}
              </Typography>
            </Stack>
            <EventDecs justifyContent="flex-start">
              Thưởng thức ẩm thực
            </EventDecs>
          </EventContentWrapper>
        </Box>
        <Box
          height={isPhone ? 84 : 140}
          sx={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
        >
          <EventContentWrapper alignItems="flex-end">
            <Stack
              alignItems="flex-end"
              justifyContent="flex-end"
              gap={isPhone ? "4px" : "8px"}
            >
              <Typography
                variant="title"
                textAlign="right"
                color={theme.palette.neutral.dark}
              >
                {isHomeBoy ? "12:00 SÁNG" : "10:30 SÁNG"}
              </Typography>
              <Typography
                variant="headline2"
                textAlign="right"
                color={theme.palette.neutral.dark}
              >
                {isHomeBoy ? "GIAO LƯU VĂN NGHỆ" : "NHẬP TIỆC"}
              </Typography>
            </Stack>
            <EventDecs justifyContent="flex-end">Niềm vui bất tận</EventDecs>
          </EventContentWrapper>
          <VerticalDivider disableVertical />
          <EventIcon src="/images/party.png" />
        </Box>
      </Stack>
      {!isPhone && (
        <TimelineFlower
          sx={{
            position: "absolute",
            top: 232,
            right: 0,
            transform: "rotateY(180deg)",
          }}
        />
      )}
    </Stack>
  );
}
