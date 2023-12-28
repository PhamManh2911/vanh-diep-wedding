import { forwardRef, useState } from "react";
import Image from "next/image";
import { Box, Stack, Typography, useTheme } from "@mui/material";

import { nha } from "@/configs/app";
import { useMedia } from "@/providers/MediaProvider";
import NextIcon from "./Icons/NextIcon";
import PrevIcon from "./Icons/PrevIcon";
import { bellissima } from "../../public/fonts";

export const CoupleSession = forwardRef(function Couple(_, ref) {
  const theme = useTheme();
  const { isPhone } = useMedia();
  const nhaTrai = nha === "trai";
  const [state, setState] = useState(nhaTrai);
  const handleClick = () => {
    setState((prev) => !prev);
  };
  return isPhone ? (
    <Stack
      position="relative"
      height={780}
      width="100%"
      ref={ref}
      padding="32px 0"
    >
      <Typography
        variant="headline1"
        color={theme.palette.neutral.dark}
        textAlign="center"
        zIndex={2}
      >
        CÔ DÂU & CHÚ RỂ
      </Typography>
      <Image
        src="/images/couple-bride.png"
        alt="couple bride"
        quality={100}
        fill
        sizes="100vw"
        placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/ONHPQAJLQNkv3eBgwAAAABJRU5ErkJggg=="
        style={{
          objectFit: "cover",
          transition: theme.transitions.create(["all"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          transform: state ? "translateX(-100%)" : "",
        }}
      />
      <Image
        src="/images/couple-groom.png"
        alt="couple bride"
        quality={100}
        fill
        sizes="100vw"
        placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/ONHPQAJLQNkv3eBgwAAAABJRU5ErkJggg=="
        style={{
          objectFit: "cover",
          transition: theme.transitions.create(["all"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          transform: state ? "" : "translateX(100%)",
        }}
      />
      {state ? (
        <button
          onClick={handleClick}
          style={{
            width: "30px",
            height: "30px",
            margin: "auto 0px",
            border: "none",
            background: "transparent",
            zIndex: 1,
          }}
        >
          <PrevIcon />
        </button>
      ) : (
        <button
          onClick={handleClick}
          style={{
            width: "30px",
            height: "30px",
            margin: "auto 90%",
            border: "none",
            background: "transparent",
            zIndex: 1,
          }}
        >
          <NextIcon />
        </button>
      )}
    </Stack>
  ) : (
    <Box
      ref={ref}
      height={632}
      alignSelf="stretch"
      sx={{
        boxShadow: "10px 10px 100px 0px #F7FAFF inset",
        position: "relative",
      }}
    >
      <Image
        alt="couple"
        src="/images/couple.jpeg"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/ONHPQAJLQNkv3eBgwAAAABJRU5ErkJggg=="
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography
          variant="headline1"
          color={theme.palette.neutral.dark}
          textAlign="center"
        >
          CÔ DÂU & CHÚ RỂ
        </Typography>
      </Box>
      <Box
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "256px",
          padding: "30px",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "480px",
            background: `radial-gradient(50% 50% at 50% 50%, #F7FAFF 0%, rgba(247, 250, 255, 0.75) 32.29%, rgba(247, 250, 255, 0.40) 63.54%, rgba(247, 250, 255, 0.00) 100%)`,
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            alignSelf="stretch"
            flex="1 0 0"
            height="100%"
          >
            <Box
              sx={{
                display: "flex",
                height: 72,
                padding: "12px 4px 12px 16px",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Stack
                  width={236}
                  justifyContent="center"
                  alignItems="center"
                  gap="4px"
                >
                  <Typography
                    variant="headline1"
                    alignSelf="stretch"
                    color={theme.palette.neutral.dark}
                    textAlign="center"
                  >
                    NHÀ TRAI
                  </Typography>
                  <Typography
                    variant="label"
                    color={theme.palette.neutral.dark}
                  >
                    Tân Dân, Thị trấn Thứa, Lương Tài, Bắc Ninh
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Stack
              padding="8px 64px"
              justifyContent="center"
              alignItems="center"
              gap="8px"
              alignSelf="stretch"
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                gap="4px"
                alignSelf="stretch"
              >
                <Typography variant="title" color={theme.palette.neutral.dark}>
                  Chú rể
                </Typography>
                <Typography
                  variant="display"
                  color={theme.palette.neutral.dark}
                >
                  Nguyễn Việt Anh
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: theme.palette.neutral.dark,
                  textAlign: "center",
                  fontFamily: bellissima.style.fontFamily,
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  alignSelf: "stretch",
                }}
              >
                “Chúng mình hứa sẽ giữ lòng thuỷ chung, khi thịnh vượng cũng như
                lúc gian nan...”
              </Typography>
              <Typography
                variant="body"
                sx={{
                  color: theme.palette.neutral.dark,
                  textAlign: "center",
                  alignSelf: "stretch",
                }}
              >
                Ông NGUYỄN VĂN TUẤN <br />
                Bà PHẠM THỊ HỒNG
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "480px",
            background: `radial-gradient(50% 50% at 50% 50%, #F7FAFF 0%, rgba(247, 250, 255, 0.75) 32.29%, rgba(247, 250, 255, 0.40) 63.54%, rgba(247, 250, 255, 0.00) 100%)`,
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            alignSelf="stretch"
            flex="1 0 0"
            height="100%"
          >
            <Box
              sx={{
                display: "flex",
                height: 72,
                padding: "12px 4px 12px 16px",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Stack
                  width={236}
                  justifyContent="center"
                  alignItems="center"
                  gap="4px"
                >
                  <Typography
                    variant="headline1"
                    alignSelf="stretch"
                    color={theme.palette.neutral.dark}
                    textAlign="center"
                  >
                    NHÀ GÁI
                  </Typography>
                  <Typography
                    variant="label"
                    color={theme.palette.neutral.dark}
                  >
                    Phúc Bồi, Quỳnh Hưng, Quỳnh Phụ, Thái Bình
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Stack
              padding="8px 64px"
              justifyContent="center"
              alignItems="center"
              gap="8px"
              alignSelf="stretch"
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                gap="4px"
                alignSelf="stretch"
              >
                <Typography variant="title" color={theme.palette.neutral.dark}>
                  Cô dâu
                </Typography>
                <Typography
                  variant="display"
                  color={theme.palette.neutral.dark}
                >
                  Vũ Ngọc Diệp
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: theme.palette.neutral.dark,
                  textAlign: "center",
                  fontFamily: bellissima.style.fontFamily,
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  alignSelf: "stretch",
                }}
              >
                “... khi ốm đau cũng như lúc khoẻ mạnh, để yêu thương và tôn
                trọng nhau suốt đời.”
              </Typography>
              <Typography
                variant="body"
                sx={{
                  color: theme.palette.neutral.dark,
                  textAlign: "center",
                  alignSelf: "stretch",
                }}
              >
                Ông VŨ ĐĂNG HOÁN <br />
                Bà VŨ THỊ LAN HƯƠNG
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
});
