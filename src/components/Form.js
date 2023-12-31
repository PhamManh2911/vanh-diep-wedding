import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  Dialog,
  Stack,
  Typography,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { useSearchParams } from "next/navigation";

import { Button } from "./Buttons";
import { nha } from "@/configs/app";
import { useMedia } from "@/providers/MediaProvider";

function FormHeader({ close }) {
  const theme = useTheme();
  const nhaTrai = nha === "trai";
  const { isPhone } = useMedia();

  return (
    <Stack
      width="100%"
      padding={isPhone ? "8px 24px" : "13px 24px"}
      justifyContent="center"
      alignItems="center"
      borderBottom="1px solid #F5F5F5"
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src="/icons/logo-chat.svg"
              width={44}
              height={44}
              alt="logo chat"
            />
            <Stack alignItems="center" gap="2px">
              <Typography variant="label" color="#202325">
                {nhaTrai ? "Việt Anh & Ngọc Diệp" : "Ngọc Diệp & Việt Anh"}
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Image
          src="/icons/minus.svg"
          width={32}
          height={32}
          alt="minus"
          onClick={close}
          style={{
            cursor: "pointer",
            borderRadius: "50%",
            backgroundColor: "#F5F5F5",
            "&:hover": { backgroundColor: theme.palette.neutral.midLight },
          }}
        />
      </Box>
    </Stack>
  );
}

function FormBody({ user }) {
  const theme = useTheme();

  const { isPhone } = useMedia();
  const nhaTrai = nha === "trai";

  const [record, setRecord] = useState(null);
  const [join, setJoin] = useState(true);
  const [day, setDay] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async () => {
    if (join && day.length === 0) setError(true);
    else {
      setLoading(true);
      if (user) {
        const payload = { join };

        payload["31/12/2023"] = day.includes("31/12/2023");
        payload["01/01/2024"] = day.includes("01/01/2024");
        const {
          data: { data },
        } = record
          ? await axios.put(
              `${location.origin}/api/invitees/${user.id}`,
              payload,
              { params: { nha_trai: nhaTrai } }
            )
          : await axios.post(
              `${location.origin}/api/invitees`,
              { ...payload, uid: user.id },
              { params: { nha_trai: nhaTrai } }
            );

        setRecord(data.record);
      } else {
        await new Promise((resolve, _) => {
          setTimeout(
            () => resolve("Mock update user record successfully"),
            1000
          );
        });
        setRecord({});
      }
      setLoading(false);
    }
  }, [join, day, record, user, nhaTrai]);

  useEffect(() => {
    setDay([]);
  }, [join]);

  useEffect(() => {
    setError(false);
  }, [join, day]);

  useEffect(() => {
    const fetchFormData = async () => {
      setLoading(true);
      if (user) {
        const {
          data: {
            data: { record },
          },
        } = await axios(`${location.origin}/api/invitees/${user.id}`, {
          params: { nha_trai: nhaTrai },
        });

        setRecord(record);
        setJoin(record?.join);
        setDay(() => {
          const days = [];

          if (record?.["31/12/2023"]) days.push("31/12/2023");
          if (record?.["01/01/2024"]) days.push("01/01/2024");
          return days;
        });
      } else {
        await new Promise((resolve, _) => {
          setTimeout(() => resolve("Mock get data successfully"), 500);
        });
      }
      setLoading(false);
    };

    fetchFormData();
  }, [nhaTrai, user]);

  if (loading)
    return (
      <Stack
        width="100%"
        height={300}
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Stack>
    );

  if (record)
    return (
      <Stack
        alignItems="center"
        padding={isPhone ? "8px 16px" : "16px 32px"}
        gap={isPhone ? "8px" : "32px"}
        height={444}
      >
        <Typography textAlign="left" color="#202325" variant="title">{`Cảm ơn ${
          user?.username ?? "Bạn"
        }!`}</Typography>
        <Image
          src="/icons/thankyou.svg"
          width={128}
          height={85}
          alt="thankyou"
        />
        <Typography textAlign="right" color="#202325" variant="title">
          Hẹn gặp lại!
        </Typography>
      </Stack>
    );

  return (
    <Stack
      alignItems="center"
      gap={isPhone ? "16px" : "32px"}
      padding={isPhone ? "8px 24px 32px" : "16px 24px 32px"}
      width="100%"
    >
      <Stack alignItems="flex-start" gap="16px" width="100%">
        <Stack alignItems="flex-start" gap="2px">
          <Typography variant="title" color="#202325" textAlign="left">
            {`Xin chào ${user?.username ?? "Bạn"}!`}
          </Typography>
        </Stack>
        <Stack alignItems="flex-start" gap="2px">
          <Typography variant="body" color="#202325" textAlign="left">
            Vui lòng xác nhận khả năng tham dự để gia đình tiếp đón chu đáo!
          </Typography>
        </Stack>
        <Stack alignItems="flex-start" gap="2px">
          <Typography variant="label" color="#202325">
            Khả năng tham dự:
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image
            src={join ? "/icons/circle-check.svg" : "/icons/circle.svg"}
            width={24}
            height={24}
            alt="check"
            style={{ cursor: "pointer" }}
            onClick={() => setJoin(true)}
          />
          <Stack alignItems="flex-start" gap="2px">
            <Typography variant="body" color="#202325">
              Tôi sẽ tham gia
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image
            src={join ? "/icons/circle.svg" : "/icons/circle-check.svg"}
            onClick={() => setJoin(false)}
            style={{ cursor: "pointer" }}
            width={24}
            height={24}
            alt="uncheck"
          />
          <Stack alignItems="flex-start" gap="2px">
            <Typography variant="body" color="#202325">
              Rất tiếc, tôi không tham gia được
            </Typography>
          </Stack>
        </Box>
        {join && (
          <>
            <Stack alignItems="flex-start" gap="2px">
              <Typography variant="label" color="#202325">
                Ngày tham dự:
              </Typography>
            </Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Image
                src={
                  day.includes("31/12/2023")
                    ? "/icons/rectangle-checkbox-check.svg"
                    : "/icons/rectangle-checkbox.svg"
                }
                width={24}
                height={24}
                onClick={() =>
                  setDay((prevDay) =>
                    prevDay.includes("31/12/2023")
                      ? prevDay.filter((day) => day !== "31/12/2023")
                      : [...prevDay, "31/12/2023"]
                  )
                }
                style={{ cursor: "pointer" }}
                alt="select"
              />
              <Stack alignItems="flex-start" gap="2px">
                <Typography variant="body" color="#202325">
                  {nhaTrai
                    ? "Tiệc cưới, 15:00 chiều 31/12/2023"
                    : "Tiệc cưới, 16:00 chiều 31/12/2023"}
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Image
                style={{ cursor: "pointer" }}
                src={
                  day.includes("01/01/2024")
                    ? "/icons/rectangle-checkbox-check.svg"
                    : "/icons/rectangle-checkbox.svg"
                }
                onClick={() =>
                  setDay((prevDay) =>
                    prevDay.includes("01/01/2024")
                      ? prevDay.filter((day) => day !== "01/01/2024")
                      : [...prevDay, "01/01/2024"]
                  )
                }
                width={24}
                height={24}
                alt="unselect"
              />
              <Stack alignItems="flex-start" gap="2px">
                <Typography variant="body" color="#202325">
                  {nhaTrai
                    ? "Lễ thành hôn, 09:00 sáng 01/01/2024"
                    : "Lễ vu quy, 07:00 sáng 01/01/2024"}
                </Typography>
              </Stack>
            </Box>
          </>
        )}
        {error && (
          <Typography variant="label" sx={{ color: theme.palette.error.main }}>
            Chưa chọn ngày tham gia
          </Typography>
        )}
      </Stack>
      <Button text="Xác nhận" type="filled" onClick={handleSubmit} />
    </Stack>
  );
}

function FormDialog({ user, open, setOpen, pos }) {
  const { isPhone } = useMedia();
  const theme = useTheme();

  return isPhone ? (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          borderRadius: "20px",
          border: "1px solid #F5F5F5",
          width: 328,
        },
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormHeader close={() => setOpen(false)} />
        <FormBody user={user} />
      </Box>
    </Dialog>
  ) : (
    <Box
      sx={{
        display: open ? "inline-flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "20px",
        border: "1px solid #F5F5F5",
        background: theme.palette.neutral.light,
        width: 375,
        position: "fixed",
        ...pos,
        zIndex: 1005,
        transform: "translate(-24px, -90px)",
      }}
    >
      <FormHeader close={() => setOpen(false)} />
      <FormBody user={user} />
    </Box>
  );
}

export function Form({ user }) {
  const theme = useTheme();
  const { isPhone } = useMedia();
  const [open, setOpen] = useState(false);

  const pos = useMemo(
    () => (isPhone ? { right: 10, bottom: 30 } : { right: 20, bottom: 60 }),
    [isPhone]
  );

  // const handleDrag = (event) => {
  //   event.preventDefault();
  //   const { clientX, clientY } = event;

  //   if (!clientX || !clientY) return;
  //   setPos({ left: clientX, top: clientY });
  // };
  if (user?.record_id) return null;

  return (
    <>
      <FormDialog user={user} open={open} setOpen={setOpen} pos={pos} />
      <Box sx={{ position: "fixed", ...pos, zIndex: 1005 }}>
        <Box
          sx={{
            display: "flex",
            padding: "16px 24px",
            gap: "16px",
            width: 440,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            padding={isPhone ? "0px 8px 4px 8px" : "8px 16px"}
            borderRadius="24px"
            border={`1px solid ${theme.palette.neutral.midLight}`}
            sx={{ background: `${theme.palette.neutral.light}` }}
          >
            <Typography variant="body" color={theme.palette.neutral.dark}>
              Xác nhận khả năng tham dự
            </Typography>
          </Box>
          <Image
            width={isPhone ? 40 : 60}
            height={isPhone ? 40 : 60}
            src="/icons/chatbot.svg"
            onClick={() => setOpen((prev) => !prev)}
            style={{ cursor: "pointer" }}
            alt="chatbot"
          />
        </Box>
      </Box>
    </>
  );
}
