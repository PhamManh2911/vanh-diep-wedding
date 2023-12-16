import { Box, CircularProgress, InputAdornment, OutlinedInput, Stack, Typography, useTheme } from "@mui/material";

import { appHostname, nha } from "@/configs/app";
import { Button } from "@/components/Buttons";
import { useState } from "react";
import IconImg from "@/components/IconImg";
import axios from "axios";

export default function AdminPage() {
  const theme = useTheme();
  const nhaTrai = nha === 'trai';

  const [imageUrl, setImageUrl] = useState('');
  const [userName, setUsername] = useState('');
  const [form, setForm] = useState(false);
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const createUser = async () => {
    if (!userName) return;
    setLoading(true);
    const response = await axios.post(`${appHostname}/api/users`, { userName });

    setLoading(false);
    const user = response.data.data.user;

    setImageUrl(`${appHostname}/api/invitation/${user.id}`);
    setUrl(`${appHostname}/${user.id}?name=${userName}&form=${form}`);
  }

  const hanldeKeyDown = async (e) => {
    if (e.key !== 'Enter') return;

    await createUser();
  }
  
  const handleCopy = async () => {
    setCopied(true);
    await navigator.clipboard.writeText(url);
    setTimeout(() => setCopied(false), 1000);
  }

  return (
    <Box width='100%' minHeight='100vh' sx={{ background: `${theme.palette.primary.midLight}`, display: 'flex' }}>
      <Stack width='40%' padding='40px' alignItems='flex-start' gap='40px' sx={{ borderRadius: '0px 24px 24px 0', background: `${theme.palette.primary.light}` }}>
        <Typography sx={{ color: theme.palette.neutral.dark, textAlign: 'center', fontFamily: 'Sans Serif', fontSize: '32px', fontWeight: '700', lineHeight: '72px' }}>{nhaTrai ? 'THIỆP NHÀ TRAI' : 'THIỆP NHÀ GÁI'}</Typography>
        <Stack alignItems='flex-start' gap='32px'>
          <Typography sx={{ color: theme.palette.neutral.dark, fontFamily: 'Sans Serif', fontSize: '24px', fontWeight: 700, lineHeight: '24px' }}>Tên khách mời</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px', alignSelf: 'stretch' }}>
            <IconImg src="/icons/person.svg" width={60} height={60} />
            <OutlinedInput
              value={userName}
              onChange={e => setUsername(e.target.value)}
              placeholder="Nhập tên khách mời..."
              sx={{ borderRadius: '40px', display: 'flex', height: 70, padding: '10px 24px', alignItems: 'center', gap: '8px', border: '1.5px solid #979C9E', width: 500 }}
              onKeyDown={hanldeKeyDown}
              endAdornment={<InputAdornment position="end" sx={{ cursor: 'pointer' }} onClick={() => setUsername('')}>clear</InputAdornment>}
            />
          </Box>
          <Typography sx={{ color: theme.palette.neutral.dark, fontFamily: 'Sans Serif', fontSize: '24px', fontWeight: 700, lineHeight: '24px' }}>Có cần form xác nhận tham gia không?</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <IconImg src={form ? "/icons/rectangle-checkbox-check.svg" : "/icons/rectangle-checkbox.svg"} width={60} height={60} onClick={() => setForm(prev => !prev)} sx={{ cursor: 'pointer' }} />
            <Typography sx={{ color: theme.palette.neutral.dark, fontFamily: 'Sans Serif', fontSize: '24px', fontWeight: 400, lineHeight: '24px' }}>Có</Typography>
          </Box>
        </Stack>
        <Button type="filled" onClick={createUser} text='Tạo thiệp mời' disable={loading} />
      </Stack>
      <Stack width='100%' height='100%' padding='40px' alignItems='flex-start' gap='40px' sx={{ background: `${theme.palette.primary.midLight}` }}>
        <Stack justifyContent='center' alignItems='center' width='100%'>
          <IconImg src="/icons/vnd-white.svg" width={90} height={104} />
        </Stack>
        <Stack padding='0 32px' alignItems='flex-start' gap='32px'>
          <Typography sx={{ color: theme.palette.neutral.light, fontFamily: 'Sans Serif', fontSize: '24px', fontWeight: 700, lineHeight: '24px' }}>KẾT QUẢ</Typography>
          <Stack padding='32px 0' alignItems='flex-start' gap='32px'>
            <Typography sx={{ color: theme.palette.neutral.light, fontFamily: 'Sans Serif', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>Website</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px', alignSelf: 'stretch' }}>
              <OutlinedInput
                multiline
                disabled
                sx={{ height: 104, width: 700, padding: '10px 32px', borderRadius: '48px', border: '1.5px solid #979C9E', background: 'white'}}
                value={url}
              />
              <IconImg src={copied ? "/icons/copy-success.svg" : "/icons/copy.svg"} width={80} height={80} imageSx={{ width: 40, height: 40 }} sx={{ backgroundColor: 'white', borderRadius: '50%', cursor: 'pointer' }} onClick={handleCopy} />
            </Box>
            <Typography sx={{ color: theme.palette.neutral.light, fontFamily: 'Sans Serif', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>Ảnh thiệp mời</Typography>
            {imageUrl ? (
              <IconImg src={imageUrl} width='100%' height='auto' />
            ) : (
              <Stack justifyContent='center' alignItems='center' width='100%' height='500px' sx={{ background: '#D9D9D9' }}>
                {loading && (<CircularProgress />)}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}