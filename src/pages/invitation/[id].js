import { appHostname, nha } from "@/configs/app";
import { Box, Typography, useTheme } from "@mui/material";
import { bellissima } from "../../../public/fonts";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await (await fetch(`${appHostname}/api/users/${id}`)).json();

  return {
    props: {
      user: response.data.user,
    },
  };
}

export default function Invitation({ user }) {
  const theme = useTheme();
  const nhaTrai = nha === "trai";

  return (
    <Box width={2654} height={2060} sx={{ position: "relative" }}>
      <Box
        width="100%"
        height="100%"
        sx={{
          background: `url("${
            nhaTrai
              ? "/images/thiep-moi-nha-trai.webp"
              : "/images/thiep-moi-nha-gai.webp"
          }"), lightgray 50% / cover no-repeat`,
        }}
      ></Box>
      <Typography
        sx={{
          color: theme.palette.primary.main,
          textAlign: "right",
          position: "absolute",
          top: 480,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: bellissima.style.fontFamily,
          fontSize: "114px",
          fontWeight: "400",
          lineHeight: "128px",
          letterSpacing: "normal",
        }}
      >
        {user.username}
      </Typography>
    </Box>
  );
}
