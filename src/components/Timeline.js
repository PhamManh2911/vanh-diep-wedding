import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import IconImg from "./IconImg";
import Image from "next/image";
import { useMedia } from "@/pages/[id]";

function VerticalDivider({ disableVertical }) {
  const theme = useTheme();
  const { isPhone } = useMedia();

  return (
    <Stack sx={{ height: 254, alignItems: 'center', gap: '-2px' }}>
      <Image src="/icons/ellipse.svg" alt="ellipse" width={isPhone ? 8 : 16} height={isPhone ? 8 : 16} />
      <Box sx={{
        width: isPhone ? '1px' : '4px',
        height: isPhone ? '168px' : '240px',
        flexShrink: 0,
        background: theme.palette.neutral.midLight,
        visibility: disableVertical ? 'hidden' : 'visible',
      }}></Box>
    </Stack>
  );
}

function EventIcon({ src, justifyContent }) {
  const { isPhone } = useMedia();

  return (
    <IconImg
      src={src}
      sx={{ display: 'flex', width: isPhone ? 150 : 420, padding: isPhone ? '4px' : '8px', justifyContent, alignItems: 'center', gap: '8px' }}
      imageSx={{ width: isPhone ? 60 : 120, height: isPhone ? 60 : 120 }}
    />
  );
}

function EventContentWrapper({ children, alignItems }) {
  const { isPhone } = useMedia();

  return (
    <Stack sx={{
      width: isPhone ? 150 : 420,
      padding: isPhone ? '4px' : '8px',
      justifyContent: 'center',
      alignItems,
      gap: isPhone ? '4px' : '16px',
    }}>
      {children}
    </Stack>
  );
}

function EventDecs({ children, justifyContent, textAlign }) {
  const theme = useTheme();
  const { isPhone } = useMedia();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent, gap: '8px', alignSelf: 'stretch' }}>
      <Typography sx={{
        color: theme.palette.primary.main,
        textAlign,
        fontFamily: 'Bellissima',
        fontSize: isPhone ? 24 : 32,
        lineHeight: isPhone ? '30px' : '40px',
      }}>
        {children}
      </Typography>
    </Box>
  );
}

function EventMessage({ children, alignItems, textAlign }) {
  const theme = useTheme();

  return (
    <Stack sx={{ justifyContent: 'center', alignItems, gap: '8px', alignSelf: 'stretch' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
        <Typography variant="body" color={theme.palette.neutral.dark} sx={{ width: 276, textAlign }}>
          {children}
        </Typography>
      </Box>
    </Stack>
  );
}

export function TimelineSession() {
  const theme = useTheme();
  const { isPhone } = useMedia();

  return (
    <Stack
      sx={{ padding: isPhone ? '16px 0 32px' : '64px 0 0', margin: 'auto' }}
      alignItems='center'
      gap={isPhone ? '8px' : '32px'}
      alignSelf='stretch'
    >
      <Typography variant="headline1" color={theme.palette.primary.dark} textAlign="center" >LỄ THÀNH HÔN</Typography>
      <Typography variant="display" color={theme.palette.primary.dark} textAlign='center'>Ngày mình nên vợ nên chồng</Typography>
      <Stack alignItems='center'>
        <Box height={isPhone ? 174 : 254} sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }} >
          <EventIcon src="/icons/record.svg" justifyContent="flex-end" />
          <VerticalDivider />
          <EventContentWrapper alignItems="flex-start">
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '8px', flexDirection: isPhone ? 'column' : 'row' }}>
              <Typography variant="headline2" textAlign='left' color={theme.palette.neutral.dark}>09:00 SÁNG</Typography>
              {isPhone ? null : (<Typography variant="headline2" textAlign='center' color={theme.palette.neutral.dark}>:</Typography>)}
              <Typography variant="headline2" textAlign='left' color={theme.palette.neutral.dark}>ĐÓN KHÁCH</Typography>
            </Box>
            <EventDecs justifyContent="flex-start" textAlign='left'>Sự hiện diện quý giá</EventDecs>
            <EventMessage alignItems="flex-start" textAlign='left'>
              Gia đình chúng tôi rất hân hạnh được đón tiếp quý khách trong một ngày trọng đại như thế này! 
            </EventMessage>
          </EventContentWrapper>
        </Box>
        <Box height={isPhone ? 174 : 254} sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }} >
          <EventContentWrapper alignItems="flex-end">
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', gap: '8px', flexDirection: isPhone ? 'column' : 'row' }}>
              <Typography variant="headline2" textAlign='right' color={theme.palette.neutral.dark}>09:30 SÁNG</Typography>
              {isPhone ? null : (<Typography variant="headline2" textAlign='center' color={theme.palette.neutral.dark}>:</Typography>)}
              <Typography variant="headline2" textAlign='right' color={theme.palette.neutral.dark}>LÀM LỄ</Typography>
            </Box>
            <EventDecs justifyContent="flex-end" textAlign='right'>Giây phút thiêng liêng</EventDecs>
            <EventMessage alignItems="flex-end" textAlign='right'>
              Việt Anh & Ngọc Diệp chính thức nên vợ nên chồng, cảm ơn quý khách hiện diện trong khoảnh khắc một đời! 
            </EventMessage>
          </EventContentWrapper>
          <VerticalDivider />
          <EventIcon src="/icons/rings.svg" justifyContent="flex-start" />
        </Box>
        <Box height={isPhone ? 174 : 254} sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }} >
          <EventIcon src="/icons/champagne.svg" justifyContent="flex-end" />
          <VerticalDivider />
          <EventContentWrapper alignItems="flex-start">
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '8px', flexDirection: isPhone ? 'column' : 'row' }}>
              <Typography variant="headline2" textAlign='left' color={theme.palette.neutral.dark}>10:30 SÁNG</Typography>
              {isPhone ? null : (<Typography variant="headline2" textAlign='center' color={theme.palette.neutral.dark}>:</Typography>)}
              <Typography variant="headline2" textAlign='left' color={theme.palette.neutral.dark}>NHẬP TIỆC</Typography>
            </Box>
            <EventDecs justifyContent="flex-start" textAlign='left'>Thưởng thức ẩm thực</EventDecs>
            <EventMessage alignItems="flex-start" textAlign='left'>
              Gia đình kính mời quý khách dùng bữa, nếm trọn hương vị cỗ cưới miền Bắc đặc trưng.
            </EventMessage>
          </EventContentWrapper>
        </Box>
        <Box height={isPhone ? 174 : 254} sx={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }} >
          <EventContentWrapper alignItems="flex-end">
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', gap: '8px', flexDirection: isPhone ? 'column' : 'row' }}>
              <Typography variant="headline2" textAlign='right' color={theme.palette.neutral.dark}>12:00 SÁNG</Typography>
              {isPhone ? null : (<Typography variant="headline2" textAlign='center' color={theme.palette.neutral.dark}>:</Typography>)}
              <Typography variant="headline2" textAlign='right' color={theme.palette.neutral.dark}>GIAO LƯU VĂN NGHỆ</Typography>
            </Box>
            <EventDecs justifyContent="flex-end" textAlign='left'>Niềm vui bất tận</EventDecs>
            <EventMessage alignItems="flex-end" textAlign='right'>
              Kính mời quý khách cùng gia đình giao lưu văn nghệ và tham gia vào tiết mục đón hoa cưới may mắn. 
            </EventMessage>
          </EventContentWrapper>
          <VerticalDivider disableVertical />
          <EventIcon src="/icons/party.svg" justifyContent="flex-start" />
        </Box>
      </Stack>
    </Stack>
  );
};