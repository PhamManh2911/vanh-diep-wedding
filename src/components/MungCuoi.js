import { forwardRef, useState } from "react";
import Image from "next/image";
import { Box, Dialog, Stack, Typography, useTheme } from "@mui/material";

import { nha } from "@/configs/app";
import { Button } from "./Buttons";
import { useMedia } from "@/pages/[id]";

export const MungCuoiSession = forwardRef(function MungCuoiSession({}, ref) {
  const theme = useTheme();
  const { isPhone } = useMedia();
  const nhaTrai = nha === "trai";

  const [copied, setCopied] = useState(false);
  const [openCrypto, setOpenCrypto] = useState(false);
  const [copiedCrypto, setCopiedCrypto] = useState(false);

  const bankNumber = nhaTrai ? "690301199" : "0301000373587";
  const cryptoNumber = "0x83cfd7215e58a9403f4193662e616659aa20c79b";

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
  };

  return (
    <Stack ref={ref} padding="32px 0 0" gap={isPhone ? "16px" : "64px"}>
      <Stack gap={isPhone ? "8px" : "16px"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/hom-cuoi-flower-left.png"
            width={isPhone ? 24 : 80}
            height={isPhone ? 24 : 80}
            alt="hom cuoi deco left"
          />
          <Typography
            variant="headline1"
            sx={{ color: theme.palette.primary.dark }}
          >
            HÒM MỪNG CƯỚI
          </Typography>
          <Image
            src="/images/hom-cuoi-flower-right.png"
            width={isPhone ? 24 : 80}
            height={isPhone ? 24 : 80}
            alt="hom cuoi deco right"
          />
        </Box>
        <Typography variant="body" color={theme.palette.primary.dark}>
          Nếu gia đình không có hân hạnh được tiếp đón quý khách, quý khách có
          thể gửi quà tại địa chỉ dưới đây.
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: isPhone ? 0 : "32px",
        }}
      >
        {isPhone ? (
          <Image
            width={63}
            height={140}
            style={{ alignItems: "flex-start" }}
            src="/icons/bank-deco-left-phone.svg"
            alt="bank deco left phone"
          />
        ) : (
          <Image
            width={356}
            height={216}
            src="/icons/bank-deco-left.svg"
            alt="bank deco left phone"
          />
        )}
        <Stack
          gap={isPhone ? 0 : "32px"}
          paddingBottom={isPhone ? "8px" : "32px"}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: isPhone ? 0 : "32px",
              flexDirection: isPhone ? "column" : "row",
            }}
          >
            <Image
              src={nhaTrai ? "/images/qr-groom.png" : "/images/qr-bride.png"}
              width={226}
              height={224}
              alt="qr"
            />
            <Stack
              padding={isPhone ? "16px 32px" : "32px 0"}
              gap={isPhone ? "16px" : "32px"}
            >
              <Stack
                justifyContent="center"
                alignItems="center"
                width={isPhone ? 173 : 106}
                height={24}
              >
                <Image
                  width={106}
                  height={24}
                  alt="bank"
                  src={
                    nhaTrai
                      ? "/images/bank-groom.png"
                      : "/images/bank-bride.png"
                  }
                />
              </Stack>
              <Stack gap={isPhone ? "8px" : "16px"} alignItems="flex-start">
                <Typography variant="title" color="black">
                  {nhaTrai ? (
                    <span>NGUYEN VIET ANH</span>
                  ) : (
                    <span>VU NGOC DIEP</span>
                  )}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <Typography variant="title">{bankNumber}</Typography>
                  <Button
                    width={80}
                    text={copied ? "Copied" : "Copy"}
                    disable={copied}
                    type="outlined"
                    onClick={handleCopy}
                  />
                </Box>
              </Stack>
            </Stack>
          </Box>
          {nhaTrai && (
            <>
              <Stack padding="10px 12px">
                <Typography
                  sx={{ cursor: "pointer" }}
                  onClick={() => setOpenCrypto(true)}
                  variant="label"
                  color={theme.palette.primary.main}
                >
                  Or send us gift via Crypto
                </Typography>
              </Stack>
              <Dialog
                open={openCrypto}
                PaperProps={{
                  sx: { borderRadius: "20px", border: "1px solid #F5F5F5" },
                }}
                onClose={() => setOpenCrypto(false)}
              >
                <Stack justifyContent="center" alignItems="center">
                  <Box
                    onClick={() => setOpenCrypto(false)}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "100%",
                      padding: "16px",
                    }}
                  >
                    <Stack
                      justifyContent="center"
                      alignItems="center"
                      width={32}
                      height={32}
                      sx={{
                        backgroundColor: "#F5F5F5",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src="/icons/close.svg"
                        width={24}
                        height={24}
                        alt="close dialog"
                      />
                    </Stack>
                  </Box>
                  <Stack
                    padding="0 32px 32px"
                    gap="20px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Stack
                      justifyContent="center"
                      alignItems="center"
                      width={isPhone ? 270 : 400}
                      height={isPhone ? 270 : 400}
                      sx={{
                        borderRadius: "24px",
                        border: `${isPhone ? 8 : 12}px solid ${
                          theme.palette.primary.main
                        }`,
                      }}
                    >
                      <Image
                        src="/images/crypto-groom.png"
                        width={isPhone ? 240 : 360}
                        height={isPhone ? 240 : 360}
                        alt="crypto"
                      />
                    </Stack>
                    <Stack
                      gap="16px"
                      justifyContent="center"
                      alignItems="center"
                      padding="16px"
                    >
                      <Typography variant="title" color="black">
                        Scan address to send wedding gift to us
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          padding: "8px 16px",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderRadius: "56px",
                          background: theme.palette.primary.light,
                          width: "100%",
                        }}
                      >
                        <Typography variant="title" color="black">
                          0x83cfd7215e5...c79b
                        </Typography>
                        <Button
                          type="outlined"
                          onClick={handleCopyCrypto}
                          text={copiedCrypto ? "Copied" : " Copy "}
                          disable={copiedCrypto}
                        />
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Dialog>
            </>
          )}
        </Stack>
        {isPhone ? (
          <Image
            width={63}
            height={140}
            style={{ alignItems: "flex-start" }}
            src="/icons/bank-deco-right-phone.svg"
            alt="bank deco right phone"
          />
        ) : (
          <Image
            width={356}
            height={216}
            src="/icons/bank-deco-right.svg"
            alt="bank deco right phone"
          />
        )}
      </Box>
    </Stack>
  );
});
