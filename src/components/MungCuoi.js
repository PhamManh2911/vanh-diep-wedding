import { forwardRef, useState } from "react";
import { Box, Dialog, Stack, Typography, useTheme } from "@mui/material";

import IconImg from "./IconImg";
import { nha } from "@/configs/app";
import { Button } from "./Buttons";
import { useMedia } from "@/pages/[id]";

export const MungCuoiSession = forwardRef(function MungCuoiSession({}, ref) {
  const theme = useTheme();
  const { isPhone } = useMedia();
  const nhaTrai = nha === 'trai';

  const [copied, setCopied] = useState(false);
  const [openCrypto, setOpenCrypto] = useState(false);
  const [copiedCrypto, setCopiedCrypto] = useState(false);

  const bankNumber = nhaTrai ? '690301199' : '690301199';
  const cryptoNumber = '0x83cfd7215e5...c79b';

  const handleCopy = async () => {
    setCopied(true);

    await navigator.clipboard.writeText(bankNumber);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleCopyCrypto = async () => {
    setCopiedCrypto(true);

    await navigator.clipboard.writeText(cryptoNumber);
    setTimeout(() => {
      setCopiedCrypto(false);
    }, 1000);
  }

  return (
    <Stack ref={ref} padding='32px 0 0' gap={isPhone ? '16px' : '64px'}>
      <Stack gap={isPhone ? '8px' : '16px'}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconImg sx={{ width: isPhone ? 24 : 80, height: isPhone ? 24 : 80 }} src="/images/hom-cuoi-flower-left.png" />
          <Typography variant="headline1" sx={{ color: theme.palette.primary.dark }}>HÒM MỪNG CƯỚI</Typography>
          <IconImg sx={{ width: isPhone ? 24 : 80, height: isPhone ? 24 : 80 }} src="/images/hom-cuoi-flower-right.png" />
        </Box>
        <Typography variant="body" color={theme.palette.primary.dark}>Nếu gia đình không có hân hạnh được tiếp đón quý khách, quý khách có thể gửi quà tại địa chỉ dưới đây.</Typography>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isPhone ? 0 : '32px' }}>
        {isPhone ? (
          <IconImg sx={{ width: 63, height: 140, alignItems: 'flex-start' }} src="/icons/bank-deco-left-phone.svg" imageSx={{ width: 63, height: 104 }} />
        ) : (
          <IconImg sx={{ width: 356, height: 216 }} src="/icons/bank-deco-left.svg" />
        )}
        <Stack gap={isPhone ? 0 : "32px"}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isPhone ? 0 :'32px', flexDirection: isPhone ? 'column' : 'row' }}>
            <IconImg src={nhaTrai ? "/images/qr-groom.png" : "/image/qr-bride.png"} sx={{ width: 226, height: 224, borderRadius: '8px', border: `12px solid ${theme.palette.primary.main}` }} />
            <Stack padding={isPhone ? '16px 32px' : '32px 0'} gap={isPhone ? '16px' : '32px'}>
              <IconImg src={nhaTrai ? "/images/bank-groom.png" : "/images/bank-bride.png"} sx={{ width: isPhone ? 173 : 106, height: 24 }} imageSx={{ width: 106, height: 24 }} />
              <Stack gap={isPhone ? '8px' : '16px'} alignItems='flex-start'>
                <Typography variant="title" color='black'>
                  {nhaTrai ? 'NGUYEN VIET ANH' : '690301199'}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
                  <Typography variant='title'>{bankNumber}</Typography>
                  <Button width={80} text={copied ? 'Copied' : 'Copy'} disable={copied} type="outlined" onClick={handleCopy} />
                </Box>
              </Stack>
            </Stack>
          </Box>
          {nhaTrai && (
            <>
              <Stack padding='10px 12px'>
                <Typography sx={{ cursor: 'pointer' }} onClick={() => setOpenCrypto(true)} variant="label" color={theme.palette.primary.main}>Or send us gift via Crypto</Typography>
              </Stack>
              <Dialog open={openCrypto} PaperProps={{ sx: { borderRadius: '20px', border: '1px solid #F5F5F5' } }} onClose={() => setOpenCrypto(false)}>
                <Stack justifyContent='center' alignItems='center' >
                  <Box onClick={() => setOpenCrypto(false)} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', padding: '16px' }}>
                    <IconImg src="/icons/close.svg" sx={{ width: 32, height: 32, backgroundColor: '#F5F5F5', borderRadius: '50%', cursor: 'pointer' }} imageSx={{ width: 24, height: 24 }} />
                  </Box>
                  <Stack padding='0 32px 32px' gap='20px' justifyContent='center' alignItems='center'>
                    {isPhone ? (
                      <IconImg src="/images/crypto-groom.png" sx={{ width: 270, height: 270, borderRadius: '24px', border: `8px solid ${theme.palette.primary.main}` }} imageSx={{ width: 240, height: 240 }} />
                    ) : (
                      <IconImg src="/images/crypto-groom.png" sx={{ width: 400, height: 400, borderRadius: '24px', border: `12px solid ${theme.palette.primary.main}` }} imageSx={{ width: 360, height: 360 }} />
                    )}
                    <Stack gap='16px' justifyContent='center' alignItems='center' padding='16px'>
                      <Typography variant="title" color='black'>Scan address to send wedding gift to us</Typography>
                      <Box sx={{ display: 'flex', padding: '8px 16px', justifyContent: 'space-between', alignItems: 'center', borderRadius: '56px', background: theme.palette.primary.light, width: '100%' }}>
                        <Typography variant="title" color='black'>0x83cfd7215e5...c79b</Typography>
                        <Button type="outlined" onClick={handleCopyCrypto} text={copiedCrypto ? 'Copied' : ' Copy '} disable={copiedCrypto} />
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Dialog>
            </>
          )}
        </Stack>
        {isPhone ? (
          <IconImg sx={{ width: 63, height: 140, alignItems: 'flex-start' }} src="/icons/bank-deco-right-phone.svg" imageSx={{ width: 63, height: 104 }} />
        ) : (
          <IconImg sx={{ width: 356, height: 216 }} src="/icons/bank-deco-right.svg" />
        )}
      </Box>
    </Stack>
  );
})