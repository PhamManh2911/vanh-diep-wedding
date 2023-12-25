import {
  Box,
  CircularProgress,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";

import { appHostname, nha } from "@/configs/app";
import { Button } from "@/components/Buttons";
import { sansserif } from "../../../public/fonts";

function InvitationImage({ src, sx = {}, imageSx, ...props }) {
  if (sx && sx.width && !sx.height) sx.height = "auto";
  if (sx && sx.height && !sx.width) sx.width = "auto";
  // const [copied, setCopied] = useState(false);
  // const [downloaded, setDownloaded] = useState(false);

  // const blobData = useMemo(async () => {
  //   const response = await axios(src);
  //   return await response.blob();
  // }, [src]);

  // const handleDownloadImage = () => {
  //   setDownloaded(true);
  //   const url = window.URL.createObjectURL(blobData);
  //   const a = document.createElement('a');

  //   a.style.display = 'none';
  //   a.href = src;
  //   a.download = 'thiep_cuoi'
  //   document.body.appendChild(a);
  //   a.click();
  //   window.URL.revokeObjectURL(url);

  //   setTimeout(() => {
  //     setDownloaded(false);
  //   }, 1000);
  // }

  // const handleCopyImage = async () => {
  //   setCopied(true);
  //   const data = [new ClipboardItem({ [blobData.type]: blobData })];

  //   await navigator.clipboard.write(data);

  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 1000);
  // }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        ...sx,
      }}
      {...props}
    >
      <Image
        src={src}
        alt="invitation image"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          ...imageSx,
        }}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/ONHPQAJLQNkv3eBgwAAAABJRU5ErkJggg=="
      />
    </Box>
  );
}

export default function AdminPage() {
  const theme = useTheme();
  const nhaTrai = nha === "trai";

  const [imageUrl, setImageUrl] = useState("");
  const [userName, setUsername] = useState("");
  const [form, setForm] = useState(false);
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const createUser = async () => {
    if (!userName) return;
    setLoading(true);
    const response = await axios.post(`${appHostname}/api/users`, { userName });
    const user = response.data.data.user;

    setImageUrl(`${appHostname}/api/invitation/${user.id}?removeCache=true`);
    const queryParams = {
      name: userName,
      form,
    };
    const searchParams = new URLSearchParams(queryParams);

    setUrl(`${appHostname}/${user.id}?${searchParams.toString()}`);
    setLoading(false);
  };

  const hanldeKeyDown = async (e) => {
    if (e.key !== "Enter") return;

    await createUser();
  };

  const handleCopy = async () => {
    setCopied(true);
    await navigator.clipboard.writeText(url);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Image src="/icons/vnd.svg" width={90} height={104} alt="icons vnd" />
      <Box
        sx={{ display: "flex", width: "100%", height: "calc(100vh - 104px)" }}
      >
        <Stack
          alignItems="flex-end"
          height="100%"
          width="45%"
          padding="24px"
          sx={{
            background: theme.palette.primary.light,
            borderRadius: "0px 24px 24px 0",
          }}
        >
          <Stack alignItems="flex-start" gap="24px">
            <Typography
              variant="headline1"
              sx={{ color: theme.palette.neutral.dark }}
            >
              {nhaTrai ? "THIỆP NHÀ TRAI" : "THIỆP NHÀ GÁI"}
            </Typography>
            <Stack alignItems="flex-start" gap="24px" padding="24px 0">
              <Typography
                variant="title"
                sx={{ color: theme.palette.neutral.dark }}
              >
                Tên khách mời
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "32px",
                  alignSelf: "stretch",
                }}
              >
                <Image
                  src="/icons/person.svg"
                  width={24}
                  height={24}
                  alt="icons person"
                />
                <OutlinedInput
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nhập tên khách mời..."
                  sx={{
                    borderRadius: "48px",
                    display: "flex",
                    height: 60,
                    padding: "10px 24px",
                    alignItems: "center",
                    gap: "8px",
                    border: "1.5px solid #979C9E",
                    width: 350,
                  }}
                  onKeyDown={hanldeKeyDown}
                  endAdornment={
                    <InputAdornment
                      position="end"
                      sx={{ cursor: "pointer" }}
                      onClick={() => setUsername("")}
                    >
                      clear
                    </InputAdornment>
                  }
                />
              </Box>
              <Typography
                variant="title"
                sx={{ textAlign: "left", color: theme.palette.neutral.dark }}
              >
                Có cần form xác nhận tham gia không?
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Image
                  src={
                    form
                      ? "/icons/rectangle-checkbox-check.svg"
                      : "/icons/rectangle-checkbox.svg"
                  }
                  width={24}
                  height={24}
                  onClick={() => setForm((prev) => !prev)}
                  style={{ cursor: "pointer" }}
                  alt="icons checkbox"
                />
                <Typography
                  sx={{
                    color: theme.palette.neutral.dark,
                    fontFamily: sansserif.style.fontFamily,
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  Có
                </Typography>
              </Box>
            </Stack>
            <Button
              type="filled"
              onClick={createUser}
              text="Tạo thiệp mời"
              disable={loading}
            />
          </Stack>
        </Stack>
        <Stack alignItems="flex-start" padding="24px" gap="24px">
          <Typography variant="headline1" color={theme.palette.neutral.dark}>
            KẾT QUẢ
          </Typography>
          <Stack alignItems="24px" padding="24px 0" gap="24px">
            <Typography
              variant="title"
              textAlign="left"
              color={theme.palette.neutral.dark}
            >
              Website
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                height: "44px",
              }}
            >
              <OutlinedInput
                multiline
                disabled
                sx={{ borderRadius: "48px", height: "40px", width: 500 }}
                value={url}
              />
              <Button
                type="outlined"
                disable={copied}
                onClick={handleCopy}
                text={copied ? "Copied" : "Copy"}
              />
            </Box>
            <Typography
              textAlign="left"
              variant="title"
              color={theme.palette.neutral.dark}
            >
              Ảnh thiệp mời
            </Typography>
            {imageUrl ? (
              <InvitationImage src={imageUrl} width={612} height={476} />
            ) : (
              <Stack
                justifyContent="center"
                alignItems="center"
                width="612px"
                height="476px"
                sx={{ background: "#D9D9D9" }}
              >
                {loading && <CircularProgress />}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
