import { appHostname, nha } from "@/configs/app";
import { Box, Typography, useTheme } from "@mui/material";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await (await fetch(`${appHostname}/api/users/${id}`)).json();

  return {
    props: {
      user: response.data.user,
    }
  };
};

export default function Invitation({ user }) {
  const theme = useTheme();
  const nhaTrai = nha === 'trai';

  return (
    <Box width={1327} height={1030} sx={{ position: 'relative' }}>
      <Box
        width='100%'
        height='100%'
        sx={{ background: `url("${nhaTrai ? "/images/thiep-moi-nha-trai.png" : "/images/thiep-moi-nha-gai.png"}"), lightgray 50% / cover no-repeat` }}
      ></Box>
      <Typography
        sx={{ color: theme.palette.primary.main, textAlign: 'right', position:"absolute", top: 240, left: '50%', transform: "translateX(-50%)" }}
        variant="display"
      >{user.username}</Typography>
    </Box>
  )
}