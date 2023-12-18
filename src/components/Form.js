import { Box, Dialog, Stack, Typography, useTheme } from "@mui/material";
import IconImg from "./IconImg";
import { useSearchParams } from "next/navigation";
import { Button } from "./Buttons";
import { useMedia, useUser } from "@/pages/[id]";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { nha } from "@/configs/app";

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
            <IconImg
              src="/icons/logo-chat.svg"
              sx={{ width: 44, height: 44 }}
            />
            <Stack alignItems="center" gap="2px">
              <Typography variant="label" color="#202325">
                {nhaTrai ? "Việt Anh & Ngọc Diệp" : "Ngọc Diệp & Việt Anh"}
              </Typography>
            </Stack>
          </Box>
        </Box>
        <IconImg
          src="/icons/minus.svg"
          sx={{
            width: 32,
            height: 32,
            cursor: "pointer",
            borderRadius: "50%",
            backgroundColor: "#F5F5F5",
            "&:hover": { backgroundColor: theme.palette.neutral.midLight },
          }}
          onClick={close}
        />
      </Box>
    </Stack>
  );
}

function FormBody() {
  const theme = useTheme();

  const { user } = useUser();
  const { isPhone } = useMedia();
  const nhaTrai = nha === "trai";

  const [record, setRecord] = useState(null);
  const [join, setJoin] = useState(true);
  const [day, setDay] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = useCallback(async () => {
    if (join && day.length === 0) {
      setError(true);
    } else {
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
    }
  }, [join, day, record, user.id, nhaTrai]);

  const fetchFormData = useCallback(async () => {
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
  }, [user.id, nhaTrai]);

  useEffect(() => {
    setDay([]);
  }, [join]);

  useEffect(() => {
    setError(false);
  }, [join, day]);

  useEffect(() => {
    fetchFormData();
  }, [fetchFormData]);

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
            {`Xin chào ${user.username}!`}
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
          <IconImg
            src={join ? "/icons/circle-check.svg" : "/icons/circle.svg"}
            sx={{ cursor: "pointer" }}
            onClick={() => setJoin(true)}
          />
          <Stack alignItems="flex-start" gap="2px">
            <Typography variant="body" color="#202325">
              Tôi sẽ tham gia
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconImg
            src={join ? "/icons/circle.svg" : "/icons/circle-check.svg"}
            sx={{ cursor: "pointer" }}
            onClick={() => setJoin(false)}
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
              <IconImg
                sx={{ cursor: "pointer" }}
                src={
                  day.includes("31/12/2023")
                    ? "/icons/rectangle-checkbox-check.svg"
                    : "/icons/rectangle-checkbox.svg"
                }
                onClick={() =>
                  setDay((prevDay) =>
                    prevDay.includes("31/12/2023")
                      ? prevDay.filter((day) => day !== "31/12/2023")
                      : [...prevDay, "31/12/2023"]
                  )
                }
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
              <IconImg
                sx={{ cursor: "pointer" }}
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

export function Form() {
  const { user } = useUser();
  const theme = useTheme();
  const { isPhone } = useMedia();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(
    isPhone ? { left: 220, top: 500 } : { left: 850, top: 680 }
  );
  const form = searchParams.get("form");

  // const handleDrag = (event) => {
  //   event.preventDefault();
  //   const { clientX, clientY } = event;

  //   if (!clientX || !clientY) return;
  //   setPos({ left: clientX, top: clientY });
  // };

  useEffect(() => {
    setPos(isPhone ? { right: 10, bottom: 140 } : { right: 20, bottom: 60 });
  }, [isPhone]);

  return form === "true" ? (
    <>
      {isPhone && (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{ sx: {  borderRadius: "20px", border: "1px solid #F5F5F5", width: 328 } }}
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
      )}
      <Box
        sx={{ position: "fixed", ...pos, zIndex: 1005 }}
      >
        {!isPhone && open && (
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "20px",
              border: "1px solid #F5F5F5",
              background: theme.palette.neutral.light,
              width: 375,
              ...(isPhone
                ? {
                    top: "50vh",
                    left: "50vw",
                    transform: "translate(-50%, -50%)",
                  }
                : {
                    position: "absolute",
                    transform: "translate(30px, -100%)",
                  }),
            }}
          >
            <FormHeader close={() => setOpen(false)} />
            <FormBody user={user} />
          </Box>
        )}
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
          <IconImg
            width={isPhone ? 40 : 60}
            height={isPhone ? 40 : 60}
            src="/icons/chatbot.svg"
            onClick={() => setOpen((prev) => !prev)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
    </>
  ) : null;
}
