import { Box, Stack, Typography, useTheme } from "@mui/material";
import { forwardRef } from "react";

export const CoupleSession = forwardRef(function Couple(_, ref) {
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      height='100vh'
      alignSelf='stretch'
      sx={{
        background: `linear-gradient(180deg, rgba(247, 250, 255, 0.00) 0%, rgba(247, 250, 255, 0.00) 10.66%, rgba(247, 250, 255, 0.00) 35.92%), linear-gradient(180deg, rgba(247, 250, 255, 0.20) 0%, rgba(247, 250, 255, 0.00) 28.33%), linear-gradient(180deg, rgba(255, 255, 255, 0.20) 8.85%, rgba(247, 250, 255, 0.00) 36.46%), linear-gradient(180deg, rgba(255, 255, 255, 0.20) 4.2%, rgba(247, 250, 255, 0.00) 36.68%), url("/images/couple.jpg") 50% / cover no-repeat`,
        boxShadow: '10px 10px 100px 0px #F7FAFF inset',
        position: 'relative',
      }}
    >
      <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '16px', position: 'absolute', top: '8%', left: '50%', transform: 'translateX(-50%)' }}>
        <Typography variant="headline1" color={theme.palette.neutral.dark} textAlign='center'>CÔ DÂU & CHÚ RỂ</Typography>
      </Box>
      <Box sx={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'flex-start', gap: '18vw' }}>
        <Box sx={{ display: 'flex', width: '38vw', height: '78vh', justifyContent: 'center', alignItems: 'center', borderRadius: '480px', background: `radial-gradient(50% 50% at 50% 50%, #F7FAFF 0%, rgba(247, 250, 255, 0.75) 32.29%, rgba(247, 250, 255, 0.40) 63.54%, rgba(247, 250, 255, 0.00) 100%)` }}>
          <Stack justifyContent='center' alignItems='center' alignSelf='stretch' flex='1 0 0'>
            <Box sx={{ display: 'flex', height: 72, padding: '12px 4px 12px 16px', justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
                <Stack width={236} justifyContent='center' alignItems='center' gap='4px'>
                  <Typography variant="headline1" alignSelf='stretch' color={theme.palette.neutral.dark} textAlign='center'>NHÀ TRAI</Typography>
                  <Typography variant="label" color={theme.palette.neutral.dark}>Tân Dân, Thị trấn Thứa, Lương Tài, Bắc Ninh</Typography>
                </Stack>
              </Box>
            </Box>
            <Stack padding='8px 64px' justifyContent='center' alignItems='center' gap='8px' alignSelf='stretch'>
              <Stack justifyContent='center' alignItems='center' gap='4px' alignSelf='stretch'>
                <Typography variant="title" color={theme.palette.neutral.dark}>Chú rể</Typography>
                <Typography variant="display" color={theme.palette.neutral.dark}>Nguyễn Việt Anh</Typography>
              </Stack>
              <Typography sx={{
                color: theme.palette.neutral.dark,
                textAlign: 'center',
                fontFamily: 'Bellissima',
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '32px',
                alignSelf: 'stretch',
              }}>“Chúng mình hứa sẽ giữ lòng thuỷ chung, khi thịnh vượng cũng như lúc gian nan...”</Typography>
              <Typography variant="body" sx={{ color: theme.palette.neutral.dark, textAlign: 'center', alignSelf: 'stretch' }}>
                Ông NGUYỄN VĂN TUẤN{"\n"}
                Bà PHẠM THỊ HỒNG
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', width: '38vw', height: '78vh', justifyContent: 'center', alignItems: 'center', borderRadius: '480px', background: `radial-gradient(50% 50% at 50% 50%, #F7FAFF 0%, rgba(247, 250, 255, 0.75) 32.29%, rgba(247, 250, 255, 0.40) 63.54%, rgba(247, 250, 255, 0.00) 100%)` }}>
          <Stack justifyContent='center' alignItems='center' alignSelf='stretch' flex='1 0 0'>
            <Box sx={{ display: 'flex', height: 72, padding: '12px 4px 12px 16px', justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
                <Stack width={236} justifyContent='center' alignItems='center' gap='4px'>
                  <Typography variant="headline1" alignSelf='stretch' color={theme.palette.neutral.dark} textAlign='center'>NHÀ GÁI</Typography>
                  <Typography variant="label" color={theme.palette.neutral.dark}>Phúc Bồi, Quỳnh Hưng, Quỳnh Phụ, Thái Bình</Typography>
                </Stack>
              </Box>
            </Box>
            <Stack padding='8px 64px' justifyContent='center' alignItems='center' gap='8px' alignSelf='stretch'>
              <Stack justifyContent='center' alignItems='center' gap='4px' alignSelf='stretch'>
                <Typography variant="title" color={theme.palette.neutral.dark}>Cô dâu</Typography>
                <Typography variant="display" color={theme.palette.neutral.dark}>Vũ Ngọc Diệp</Typography>
              </Stack>
              <Typography sx={{
                color: theme.palette.neutral.dark,
                textAlign: 'center',
                fontFamily: 'Bellissima',
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '32px',
                alignSelf: 'stretch',
              }}>“... khi bệnh hoạn cũng như lúc khoẻ mạnh, để yêu thương và tôn trọng nhau suốt đời.”</Typography>
              <Typography variant="body" sx={{ color: theme.palette.neutral.dark, textAlign: 'center', alignSelf: 'stretch' }}>
                Ông VŨ ĐĂNG HOÁN{"\n"}
                Bà VŨ THỊ LAN HƯƠNG
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
});