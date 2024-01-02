import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { nha } from "@/configs/app";
import { bellissima } from "../../public/fonts";

const phoneImages = [
  "/images/image-phone1.png",
  "/images/image-phone2.png",
  "/images/image-phone3.png",
];

const genProps = (absPos) => {
  const relPos = absPos === 2 ? -1 : absPos === -2 ? 1 : absPos;

  return {
    transform: `translateX(${339 * relPos}px)`,
    zIndex: 0,
  };
};

const genCommonStyle = (theme) => ({
  borderRadius: "8px",
  position: "absolute",
  top: "50%",
  left: "50%",
  translate: "-50% -50%",
  zIndex: 1,
  transition: theme.transitions.create(["all"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

export function SlideCarousel() {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);
  const nhaTrai = nha === "trai";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      padding="16px 0"
      gap="8px"
      width="100%"
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          height: 180,
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,  -50%)",
            color: theme.palette.neutral.light,
            textAlign: "center",
            textShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
            fontFamily: bellissima.style.fontFamily,
            fontSize: "26px",
            fontWeight: "400",
            lineHeight: "64px",
            zIndex: 1001,
            letterSpacing: "normal",
          }}
        >
          {nhaTrai ? "Việt Anh &  Ngọc Diệp" : "Ngọc Diệp &  Việt Anh"}
        </Typography>
        {phoneImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            style={{ ...genCommonStyle(theme), ...genProps(index - current) }}
            width={327}
            height={180}
            alt="slide carousel"
            priority
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: 327,
          height: 16,
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {[0, 1, 2].map((index) => (
          <Image
            key={index}
            onClick={() => setCurrent(index)}
            src={index === current ? "/icons/dot-active.svg" : "/icons/dot.svg"}
            style={{ cursor: "pointer" }}
            width={index === current ? 12 : 8}
            height={index === current ? 12 : 8}
            alt="dot"
          />
        ))}
      </Box>
    </Stack>
  );
}
