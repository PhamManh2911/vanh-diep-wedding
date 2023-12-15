import { Carousel } from "@/components/Carousel";
import IconImg from "@/components/IconImg";
import { NavButton } from "@/components/Buttons";
import { appHostname } from "@/configs/app";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { createContext, useContext, useRef } from "react";
import { CountDown } from "@/components/CountDown";
import { useSearchParams } from "next/navigation";
import { EventSession } from "@/components/Event";
import { CoupleSession } from "@/components/Couple";
import { TimelineSession } from "@/components/Timeline";
import { AlbumSession } from "@/components/Album";

const UserContext = createContext();

const NhaContext = createContext();

const MediaContext = createContext();

export function useNha() {
  return useContext(NhaContext);
}

export function useUser() {
  return useContext(UserContext);
}

export function useMedia() {
  return useContext(MediaContext);
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await (await fetch(`${appHostname}/api/users/${id}`)).json();

  return {
    props: { user: response.data.user },
  };
}

export default function Wedding({ user }) {
  const { username } = user;
  const searchParams = useSearchParams();
  const nhaTrai = searchParams.get("nha") === "trai";

  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScrollToView = (dom) => {
    dom.scrollIntoView({ behavior: 'smooth' });
  }

  const eventRef = useRef();
  const coupleRef = useRef();
  const albumRef = useRef();

  return (
    <UserContext.Provider value={{ user }}>
      <NhaContext.Provider value={{ nhaTrai }}>
        <MediaContext.Provider value={{ isPhone }}>
          <Stack>
            {/* <Box sx={{ background: `url("/images/left-decoration.png")`, position: 'absolute', top: '21px', width: '20vw', height: '55vh' }}></Box>
            <Box sx={{ background: `url("/images/right-decoration.png")`, position: 'absolute', right: "0px", top: '40px', width: '20vw', height: '55vh' }}></Box> */}
            <InvitationSession
              username={username}
              clickEvent={() => handleScrollToView(eventRef.current)}
              clickCouple={() => handleScrollToView(coupleRef.current)}
              clickAlbum={() => handleScrollToView(albumRef.current)}
            />
            <CountDown />
            <EventSession ref={eventRef} />
            <CoupleSession ref={coupleRef} />
            <TimelineSession />
            <AlbumSession ref={albumRef} />
          </Stack>
        </MediaContext.Provider>
      </NhaContext.Provider>
    </UserContext.Provider>
  );
}

function InvitationSession({ username, clickEvent, clickCouple, clickMungCuoi, clickAlbum }) {
  const theme = useTheme();

  return (
    <>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        gap='40px'
        height='104px'
      >
        <NavButton text='Sự kiện chính' onClick={clickEvent} />
        <NavButton text='Cặp đôi' onClick={clickCouple} />
        <IconImg src='/icons/vnd.svg' sx={{ width: '72px', hieght: '72px' }} />
        <NavButton text='Album cưới' onClick={clickAlbum} />
        <NavButton text='Mừng cưới' onClick={clickMungCuoi} />
      </Stack>
      <Stack
        gap='8px'
        alignItems='center'
      >
        <Stack alignItems='center' gap='8px'>
          <Typography sx={{
            color: theme.palette.primary.dark,
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '32px'
          }}>TRÂN TRỌNG KÍNH MỜI</Typography>
          <Typography sx={{
            color: theme.palette.primary.main,
            textAlign: 'center',
            fontFamily: 'Bellissima',
            fontSize: '36px',
            fontWeight: '400',
            lineHeight: '44px',
          }}>{username}</Typography>
          <Typography sx={{
            color: theme.palette.primary.dark,
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '32px',
          }}>TỚI DỰ LỄ THÀNH HÔN</Typography>
        </Stack>
        <Carousel />
      </Stack>
    </>
  );
};