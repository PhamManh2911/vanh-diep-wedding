import { Box, Stack, Typography, useTheme } from "@mui/material";
import IconImg from "./IconImg";
import { forwardRef } from "react";
import { Button } from "./Buttons";
import { useMedia } from "@/pages/[id]";
import { nha } from "@/configs/app";

export const EventSession = forwardRef(function EventSession(_, ref) {
  const theme = useTheme();
  const { isPhone } = useMedia();
  const nhaTrai = nha === 'trai';

  return (
    <Stack ref={ref} padding={isPhone ? '16px 0' : '32px 0'} alignItems='center' justifyContent='center' gap={isPhone ? '8px' : '32px'}>
      <Typography variant="headline1" color={theme.palette.neutral.dark} textAlign='center'>SỰ KIỆN CHÍNH</Typography>
      <Typography variant="display" color={theme.palette.neutral.dark} textAlign="center">Save The Date</Typography>
      <Box sx={{ display: 'flex', padding: isPhone ? '0' : '0px 32px', justifyContent: 'center', alignItems: 'center', gap: isPhone ? '16px' : '32px', flexDirection: isPhone ? 'column' : 'row' }}>
        <Stack padding='8px' justifyContent="center" alignItems='center' gap='16px' width={isPhone ? 202 : 253}>
          <Typography variant="headline2" color={theme.palette.primary.midDark} textAlign="center">TIỆC CƯỚI</Typography>
          <Stack justifyContent='center' alignItems='flex-start' gap="8px">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconImg src="/icons/clock.svg" width={24} height={24} />
              <Typography variant="body" color='#000' textAlign={isPhone ? 'left' : 'center'}>{nhaTrai ? "16:00 Chiều" : '16:00 Chiều'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: isPhone ? 'center' : 'flex-start', gap: '8px' }}>
              <IconImg src="/icons/calendar.svg" width={24} height={24} />
              <Typography variant="body" color='#000' textAlign={isPhone ? 'left' : 'center'}>
                Chủ Nhật, 31/12/2023 (19 tháng 11 Âm Lịch)
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: isPhone ? 'center' : 'flex-start', gap: '8px' }}>
              <IconImg src="/icons/location.svg" width={24} height={24} />
              <Typography variant="body" color='#000' textAlign={isPhone ? 'left' : 'center'}>
                {nhaTrai ? 'HỘI TRƯỜNG THPT LƯƠNG TÀI, LƯƠNG TÀI, BẮC NINH' : 'PHÚC BỒI, QUỲNH HƯNG, QUỲNH PHỤ, THÁI BÌNH'}
              </Typography>
            </Box>
          </Stack>
          <Button text='Xem địa điểm' />
        </Stack>
        <Stack width={isPhone ? 240 : 360} height={isPhone ? 240 : 360} justifyContent='flex-end' alignItems='center' sx={{ borderRadius: "50%", background: `url(${isPhone ? "/images/event-phone.png" : "/images/event.png"}), lightgray -170.412px -351.331px / 174.577% 261.833% no-repeat` }}>
          {isPhone ? (
            <IconImg src="/icons/event-deco-phone.svg" width={289} height={187} sx={{ top: '70px', position: 'relative' }} />
          ) : (
            <IconImg src="/icons/event-deco.svg" width={428} height={270} sx={{ top: '100px', position: 'relative' }} />
          )}
        </Stack>
        <Stack padding='8px' justifyContent="center" alignItems='center' gap='16px' width={isPhone ? 202 : 253} sx={{ marginTop: '20px' }}>
          <Typography variant="headline2" color={theme.palette.primary.midDark} textAlign="center">{nhaTrai ? 'LỄ THÀNH HÔN' : 'LỄ VU QUY'}</Typography>
          <Stack justifyContent='center' alignItems='flex-start' gap="8px">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconImg src="/icons/clock.svg" width={24} height={24} />
              <Typography variant="body" color='#000' textAlign={isPhone ? 'left' : 'center'}>{nhaTrai ? '9:30 Sáng' : '07:00 Sáng'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: isPhone ? 'center' : 'flex-start', gap: '8px' }}>
              <IconImg src="/icons/calendar.svg" width={24} height={24} />
              <Typography variant="body" color='#000' textAlign={isPhone ? 'left' : 'center'}>
                Thứ Hai, 01/01/2024 (20 tháng 11 Âm Lịch)
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: isPhone ? 'center' : 'flex-start', gap: '8px' }}>
              <IconImg src="/icons/location.svg" width={24} height={24} />
              <Typography variant="body" color='#000' textAlign={isPhone ? 'left' : 'center'}>
                {nhaTrai ? "HỘI TRƯỜNG THPT LƯƠNG TÀI, LƯƠNG TÀI, BẮC NINH" : 'PHÚC BỒI, QUỲNH HƯNG, QUỲNH PHỤ, THÁI BÌNH'}
              </Typography>
            </Box>
          </Stack>
          <Button text='Xem địa điểm' />
        </Stack>
      </Box>
    </Stack>
  );
})