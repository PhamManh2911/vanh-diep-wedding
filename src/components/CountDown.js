import { useNha } from "@/pages/[id]";
import { Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment-timezone";
import { useEffect, useMemo, useState } from "react";

export function CountDown() {
  const theme = useTheme();
  const { nhaTrai } = useNha();

  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  const marriedDay = useMemo(() => moment(nhaTrai ? "2024-01-01 09:00:00" : "2024-01-01 07:00:00"), [nhaTrai]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDays(marriedDay.diff(moment(), 'days'));
      setHours(marriedDay.diff(moment(), 'hours') % 24);
      setMinutes(marriedDay.diff(moment(), 'minutes') % 60);
      setSeconds(marriedDay.diff(moment(), 'seconds') % 60);
    }, [1000]);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack padding='16px 0px' alignItems="center" gap='16px'>
      <Typography variant="headline1" color={theme.palette.neutral.dark}>
        ĐẾM NGƯỢC NGÀY CHUNG ĐÔI
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <Stack padding='0px 24px' justifyContent="center" alignItems="center" sx={{ borderRadius: "24px", background: theme.palette.neutral.light }}>
          <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "40px", fontWeight: "700", lineHeight: "70px" }}>{days}</Typography>
          <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "16px", fontWeight: "600", lineHeight: "28px" }}>NGÀY</Typography>
        </Stack>
        <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "40px", fontWeight: "700", lineHeight: "70px" }}>:</Typography>
        <Stack padding='0px 24px' justifyContent="center" alignItems="center" sx={{ borderRadius: "24px", background: theme.palette.neutral.light }}>
          <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "40px", fontWeight: "700", lineHeight: "70px" }}>{hours}</Typography>
          <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "16px", fontWeight: "600", lineHeight: "28px" }}>GIỜ</Typography>
        </Stack>
        <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "40px", fontWeight: "700", lineHeight: "70px" }}>:</Typography>
        <Stack padding='0px 24px' justifyContent="center" alignItems="center" sx={{ borderRadius: "24px", background: theme.palette.neutral.light }}>
          <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "40px", fontWeight: "700", lineHeight: "70px" }}>{minutes}</Typography>
          <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "16px", fontWeight: "600", lineHeight: "28px" }}>PHÚT</Typography>
        </Stack>
        <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "40px", fontWeight: "700", lineHeight: "70px" }}>:</Typography>
        <Stack padding='0px 24px' justifyContent="center" alignItems="center" sx={{ borderRadius: "24px", background: theme.palette.neutral.light }}>
          <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "40px", fontWeight: "700", lineHeight: "70px" }}>{seconds}</Typography>
          <Typography sx={{ color: theme.palette.primary.main, fontFamily: "Sans Serif", fontSize: "16px", fontWeight: "600", lineHeight: "28px" }}>GIÂY</Typography>
        </Stack>
      </Box>
    </Stack>
  );
}