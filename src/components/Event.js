import { Box, Stack, Typography, useTheme } from "@mui/material";
import IconImg from "./IconImg";
import { forwardRef } from "react";
import { Button } from "./Buttons";

export const EventSession = forwardRef(function EventSession(_, ref) {
  const theme = useTheme();

  return (
    <Stack ref={ref} padding='32px 280px 128px' alignItems='center' gap='32px'>
      <Typography variant="headline1" color={theme.palette.neutral.dark} textAlign='center'>SỰ KIỆN CHÍNH</Typography>
      <Typography variant="display" color={theme.palette.neutral.dark} textAlign="center">Save The Date</Typography>
      <Box sx={{ display: 'flex', padding: '0px 32px', justifyContent: 'center', alignItems: 'center', gap: '64px' }}>
        <Stack padding='8px' justifyContent="center" alignItems='center' gap='16px'>
          <Typography variant="headline2" color={theme.palette.primary.midDark} textAlign="center">TIỆC CƯỚI</Typography>
          <Stack justifyContent='center' alignItems='flex-start' gap="8px">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconImg src="/icons/clock.svg" width={24} height={24} />
              <Typography variant="body" color='#000' textAlign='center'>16:00 Chiều</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <IconImg src="/icons/calendar.svg" width={24} height={24} />
              <Typography variant="body" color='#000' textAlign='center'>
                Chủ Nhật, 31/12/2023{"\n"}
                (19 tháng 11 Âm Lịch)
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <IconImg src="/icons/location.svg" width={24} height={24} />
              <Typography variant="body" color='#000'>
                HỘI TRƯỜNG THPT LƯƠNG TÀI, {"\n"}
                LƯƠNG TÀI, BẮC NINH
              </Typography>
            </Box>
          </Stack>
          <Button text='Xem địa điểm' />
        </Stack>
        <Box width={360} height={360} sx={{ borderRadius: "50%", background: `url(/images/event.png), lightgray -170.412px -351.331px / 174.577% 261.833% no-repeat` }}></Box>
        <Stack padding='8px' justifyContent="center" alignItems='center' gap='16px'>
          <Typography variant="headline2" color={theme.palette.primary.midDark} textAlign="center">LỄ THÀNH HÔN</Typography>
          <Stack justifyContent='center' alignItems='flex-start' gap="8px">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconImg src="/icons/clock.svg" width={24} height={24} />
              <Typography variant="body" color='#000' textAlign='center'>9:30 Sáng</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <IconImg src="/icons/calendar.svg" width={24} height={24} />
              <Typography variant="body" color='#000' textAlign='center'>
                Thứ Hai, 01/01/2024{"\n"}
                (20 tháng 11 Âm Lịch)
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <IconImg src="/icons/location.svg" width={24} height={24} />
              <Typography variant="body" color='#000'>
                HỘI TRƯỜNG THPT LƯƠNG TÀI, {"\n"}
                LƯƠNG TÀI, BẮC NINH
              </Typography>
            </Box>
          </Stack>
          <Button text='Xem địa điểm' />
        </Stack>
      </Box>
    </Stack>
  );
})