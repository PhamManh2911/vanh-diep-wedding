import { forwardRef } from "react";
import Image from "next/image";
import { Box, Stack, Typography, useTheme } from "@mui/material";

import { Button } from "./Buttons";
import { useMedia } from "@/providers/MediaProvider";
import { nha } from "@/configs/app";

export const EventSession = forwardRef(function EventSession(_, ref) {
  const theme = useTheme();
  const { isPhone } = useMedia();
  const nhaTrai = nha === "trai";
  const handleDirectMap = () => {
    const link = nhaTrai
      ? "https://maps.app.goo.gl/RgeiZyurMFx6y9JA6?g_st=ic"
      : "https://maps.app.goo.gl/zRJGL7FLHF8JfVu1A?g_st=ic";
    return window.open(link, "_blank");
  };
  return (
    <Stack
      ref={ref}
      padding={isPhone ? "16px 0" : "32px 0 64px"}
      alignItems="center"
      justifyContent="center"
      gap={isPhone ? "8px" : "32px"}
    >
      <Typography
        variant="headline1"
        color={theme.palette.neutral.dark}
        textAlign="center"
      >
        SỰ KIỆN CHÍNH
      </Typography>
      <Typography
        variant="display"
        color={theme.palette.neutral.dark}
        textAlign="center"
      >
        Save The Date
      </Typography>
      <Box
        sx={{
          display: "flex",
          padding: isPhone ? "0" : "0px 32px",
          justifyContent: "center",
          alignItems: "center",
          gap: isPhone ? "16px" : "32px",
          flexDirection: isPhone ? "column" : "row",
        }}
      >
        <Stack
          padding="8px"
          justifyContent="center"
          alignItems="center"
          gap="16px"
          width={isPhone ? 202 : 253}
        >
          <Typography
            variant="headline2"
            color={theme.palette.primary.midDark}
            textAlign="center"
          >
            TIỆC CƯỚI
          </Typography>
          <Stack justifyContent="center" alignItems="flex-start" gap="8px">
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image
                src="/icons/clock.svg"
                width={24}
                height={24}
                alt="clock"
              />
              <Typography
                variant="body"
                color="#000"
                textAlign={isPhone ? "left" : "center"}
              >
                {nhaTrai ? "15:00 Chiều" : "16:00 Chiều"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: isPhone ? "center" : "flex-start",
                gap: "8px",
              }}
            >
              <Image
                src="/icons/calendar.svg"
                width={24}
                height={24}
                alt="calendar"
              />
              <Typography variant="body" color="#000" textAlign={"left"}>
                Chủ Nhật, 31/12/2023
                <br />
                (19 tháng 11 Âm Lịch)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: isPhone ? "center" : "flex-start",
                gap: "8px",
              }}
            >
              <Image
                src="/icons/location.svg"
                width={24}
                height={24}
                alt="location"
              />
              <Typography variant="body" color="#000" textAlign={"left"}>
                {nhaTrai
                  ? "HỘI TRƯỜNG THPT LƯƠNG TÀI, LƯƠNG TÀI, BẮC NINH"
                  : "PHÚC BỒI, QUỲNH HƯNG, QUỲNH PHỤ, THÁI BÌNH"}
              </Typography>
            </Box>
          </Stack>
          <Button text="Xem địa điểm" onClick={handleDirectMap} />
        </Stack>
        <Box
          width={isPhone ? 240 : 360}
          height={isPhone ? 240 : 360}
          position="relative"
        >
          <Image
            alt="event image"
            src="/images/event.webp"
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/ONHPQAJLQNkv3eBgwAAAABJRU5ErkJggg=="
            quality={100}
            fill
            sizes="100vw"
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          {isPhone ? (
            <>
              <Image
                src="/images/floral-1.png"
                alt="floral 1"
                width={159}
                height={161}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: "55%",
                  left: "-9%",
                  rotate: "-80deg",
                  transform: "rotateY(180deg)",
                }}
              />
              <Image
                src="/images/floral-3.png"
                alt="floral 1"
                width={159}
                height={161}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: "55%",
                  right: "-9%",
                  rotate: "100deg",
                  transform: "rotateY(180deg)",
                }}
              />
            </>
          ) : (
            <>
              <Image
                src="/images/floral-1.png"
                alt="floral 1"
                width={236}
                height={238}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: "55%",
                  left: "-9%",
                  rotate: "-80deg",
                  transform: "rotateY(180deg)",
                }}
              />
              <Image
                src="/images/floral-3.png"
                alt="floral 1"
                width={236}
                height={238}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  top: "55%",
                  right: "-9%",
                  rotate: "100deg",
                  transform: "rotateY(180deg)",
                }}
              />
            </>
          )}
        </Box>
        <Stack
          padding="8px"
          justifyContent="center"
          alignItems="center"
          gap="16px"
          width={isPhone ? 202 : 253}
          sx={{ marginTop: "20px" }}
        >
          <Typography
            variant="headline2"
            color={theme.palette.primary.midDark}
            textAlign="center"
          >
            {nhaTrai ? "LỄ THÀNH HÔN" : "LỄ VU QUY"}
          </Typography>
          <Stack justifyContent="center" alignItems="flex-start" gap="8px">
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image
                src="/icons/clock.svg"
                width={24}
                height={24}
                alt="clock"
              />
              <Typography
                variant="body"
                color="#000"
                textAlign={isPhone ? "left" : "center"}
              >
                {nhaTrai ? "9:30 Sáng" : "07:00 Sáng"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: isPhone ? "center" : "flex-start",
                gap: "8px",
              }}
            >
              <Image
                src="/icons/calendar.svg"
                width={24}
                height={24}
                alt="calendar"
              />
              <Typography variant="body" color="#000" textAlign={"left"}>
                Thứ Hai, 01/01/2024
                <br />
                (20 tháng 11 Âm Lịch)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: isPhone ? "center" : "flex-start",
                gap: "8px",
              }}
            >
              <Image
                src="/icons/location.svg"
                width={24}
                height={24}
                alt="location"
              />
              <Typography variant="body" color="#000" textAlign={"left"}>
                {nhaTrai
                  ? "HỘI TRƯỜNG THPT LƯƠNG TÀI, LƯƠNG TÀI, BẮC NINH"
                  : "PHÚC BỒI, QUỲNH HƯNG, QUỲNH PHỤ, THÁI BÌNH"}
              </Typography>
            </Box>
          </Stack>
          <Button text="Xem địa điểm" onClick={handleDirectMap} />
        </Stack>
      </Box>
    </Stack>
  );
});
