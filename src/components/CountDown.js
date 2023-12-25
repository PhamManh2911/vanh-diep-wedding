import moment from "moment-timezone";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { nha } from "@/configs/app";
import { useMedia } from "@/providers/MediaProvider";
import { Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { sansserif } from "../../public/fonts";

export function CountDown() {
  const theme = useTheme();
  const nhaTrai = nha === "trai";
  const { isPhone } = useMedia();

  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  const marriedDay = useMemo(
    () => moment(nhaTrai ? "2024-01-01 09:00:00" : "2024-01-01 07:00:00"),
    [nhaTrai]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDays(marriedDay.diff(moment(), "days"));
      setHours(marriedDay.diff(moment(), "hours") % 24);
      setMinutes(marriedDay.diff(moment(), "minutes") % 60);
      setSeconds(marriedDay.diff(moment(), "seconds") % 60);
    }, [1000]);

    return () => clearInterval(interval);
  }, [marriedDay]);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {isPhone ? (
        <Image
          src="/icons/countdown-deco-left-phone.svg"
          width={64}
          height={64}
          alt="countdown deco left phone"
        />
      ) : (
        <Image
          src="/icons/countdown-deco-left.svg"
          width={160}
          height={160}
          alt="countdown deco left"
        />
      )}
      <Stack
        padding={isPhone ? "0" : "16px 0px"}
        alignItems="center"
        gap={isPhone ? "8px" : "16px"}
      >
        <Typography variant="headline1" color={theme.palette.neutral.dark}>
          ĐẾM NGƯỢC NGÀY CHUNG ĐÔI
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: isPhone ? "0" : "16px",
          }}
        >
          <Stack
            padding={isPhone ? "0px 8px" : "0px 24px"}
            justifyContent="center"
            alignItems="center"
            sx={{
              borderRadius: "24px",
              background: theme.palette.neutral.light,
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontFamily: sansserif.style.fontFamily,
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "32px",
              }}
            >
              {days}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontFamily: sansserif.style.fontFamily,
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "28px",
              }}
            >
              NGÀY
            </Typography>
          </Stack>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontFamily: sansserif.style.fontFamily,
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "32px",
            }}
          >
            :
          </Typography>
          <Stack
            padding={isPhone ? "0px 8px" : "0px 24px"}
            justifyContent="center"
            alignItems="center"
            sx={{
              borderRadius: "24px",
              background: theme.palette.neutral.light,
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontFamily: sansserif.style.fontFamily,
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "32px",
              }}
            >
              {hours}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontFamily: sansserif.style.fontFamily,
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "28px",
              }}
            >
              GIỜ
            </Typography>
          </Stack>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontFamily: sansserif.style.fontFamily,
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "32px",
            }}
          >
            :
          </Typography>
          <Stack
            padding={isPhone ? "0px 8px" : "0px 24px"}
            justifyContent="center"
            alignItems="center"
            sx={{
              borderRadius: "24px",
              background: theme.palette.neutral.light,
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontFamily: sansserif.style.fontFamily,
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "32px",
              }}
            >
              {minutes}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontFamily: sansserif.style.fontFamily,
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "28px",
              }}
            >
              PHÚT
            </Typography>
          </Stack>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontFamily: sansserif.style.fontFamily,
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "32px",
            }}
          >
            :
          </Typography>
          <Stack
            padding={isPhone ? "0px 8px" : "0px 24px"}
            justifyContent="center"
            alignItems="center"
            sx={{
              borderRadius: "24px",
              background: theme.palette.neutral.light,
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontFamily: sansserif.style.fontFamily,
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "32px",
              }}
            >
              {seconds}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontFamily: sansserif.style.fontFamily,
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "28px",
              }}
            >
              GIÂY
            </Typography>
          </Stack>
        </Box>
      </Stack>
      {isPhone ? (
        <Image
          src="/icons/countdown-deco-right-phone.svg"
          width={64}
          height={64}
          alt="countdown deco right phone"
        />
      ) : (
        <Image
          src="/icons/countdown-deco-right.svg"
          width={160}
          height={160}
          alt="countdown deco right"
        />
      )}
    </Box>
  );
}
