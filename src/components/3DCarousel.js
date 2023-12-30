import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Stack, Typography, useTheme } from "@mui/material";

import { nha } from "@/configs/app";
import { bellissima } from "../../public/fonts";

const zIndex = 1000;
const opacity = 1;
const width = 800;
const height = 464;

const genCommonSx = (theme) => ({
  position: "absolute",
  width,
  height,
  top: "50%",
  left: "50%",
  translate: "-50% -50%",
  borderRadius: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex,
  opacity,
  transition: theme.transitions.create(["all"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: "hidden",
});

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
];

const genTransitionProps = (index) => {
  const pos = Math.abs(index);

  return {
    zIndex: zIndex - pos,
    transform: `scale(${(4 / 5) ** pos}, ${(4 / 5) ** pos}) translateX(${
      280 * index
    }px)`,
    opacity: opacity - 0.05 * pos,
  };
};

const recenterIndex = (pos) => {
  if (pos === 4) return -1;
  if (pos === 3) return -2;
  if (pos === -4) return 1;
  if (pos === -3) return 2;
  return pos;
};

export function ThreeDCarousel() {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);
  const nhaTrai = nha === "trai";

  const handleNext = () => {
    setCurrent((prevCurrent) => (prevCurrent === 4 ? 0 : prevCurrent + 1));
  };

  const handlePrev = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? 4 : prevCurrent - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === 4 ? 0 : prevCurrent + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <Stack
      padding="8px 64px"
      alignItems="center"
      gap="24px"
      width={1430}
      height={560}
    >
      <Box width={1300} height={460} position="relative">
        <Typography
          sx={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
            zIndex: 1001,
            color: theme.palette.primary.light,
            textAlign: "center",
            textShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)",
            fontFamily: bellissima.style.fontFamily,
            fontSize: 80,
            lineHeight: "64px",
            letterSpacing: "3.2px",
          }}
        >
          {nhaTrai ? "Việt Anh &  Ngọc Diệp" : "Ngọc Diệp &  Việt Anh"}
        </Typography>
        {images.map((image, index) => (
          <Box
            key={image}
            style={{
              ...genCommonSx(theme),
              ...genTransitionProps(recenterIndex(index - current)),
            }}
            onClick={index === current ? null : () => setCurrent(index)}
          >
            {index === current && (
              <>
                <Box
                  sx={{
                    height: "100%",
                    width: "40%",
                    position: "absolute",
                    left: "0%",
                    cursor: "pointer",
                    zIndex: 1,
                  }}
                  onClick={handlePrev}
                ></Box>
                <Box
                  sx={{
                    height: "100%",
                    width: "40%",
                    position: "absolute",
                    left: "60%",
                    cursor: "pointer",
                    zIndex: 1,
                  }}
                  onClick={handleNext}
                ></Box>
              </>
            )}
            <Image
              src={image}
              alt="carousel"
              priority
              quality={100}
              fill
              sizes="100vw"
              placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/ONHPQAJLQNkv3eBgwAAAABJRU5ErkJggg=="
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "8px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "8px",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={handlePrev}
        >
          <Image
            src="/icons/chevron-left.svg"
            width={24}
            height={24}
            alt="chevron left"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "8px",
            alignItems: "center",
            gap: "10px",
            width: "120px",
          }}
        >
          {[0, 1, 2, 3, 4].map((value) => (
            <Image
              key={value}
              onClick={() => setCurrent(value)}
              style={{ cursor: "pointer" }}
              src={
                value === current ? "/icons/dot-active.svg" : "/icons/dot.svg"
              }
              width={value === current ? 16 : 12}
              height={value === current ? 16 : 12}
              alt="dot"
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "8px",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={handleNext}
        >
          <Image
            src="/icons/chevron-right.svg"
            width={24}
            height={24}
            alt="chevron right"
          />
        </Box>
      </Box>
    </Stack>
  );
}
