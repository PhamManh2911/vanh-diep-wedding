import IconImg from "@/components/IconImg";
import { appHostname } from "@/configs/app";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { createContext, useContext, useRef } from "react";
import { CountDown } from "@/components/CountDown";
import { useSearchParams } from "next/navigation";
import { EventSession } from "@/components/Event";
import { CoupleSession } from "@/components/Couple";
import { TimelineSession } from "@/components/Timeline";
import { AlbumSession } from "@/components/Album";
import { MungCuoiSession } from "@/components/MungCuoi";
import { InvitationSession } from "@/components/Invitation";

const UserContext = createContext();

const MediaContext = createContext();

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

  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScrollToView = (dom) => {
    dom.scrollIntoView({ behavior: 'smooth' });
  }

  const eventRef = useRef();
  const coupleRef = useRef();
  const albumRef = useRef();
  const mungCuoiRef = useRef();

  return (
    <UserContext.Provider value={{ user }}>
      <MediaContext.Provider value={{ isPhone }}>
        <Stack>
          {/* <Box sx={{ background: `url("/images/left-decoration.png")`, position: 'absolute', top: '21px', width: '20vw', height: '55vh' }}></Box>
          <Box sx={{ background: `url("/images/right-decoration.png")`, position: 'absolute', right: "0px", top: '40px', width: '20vw', height: '55vh' }}></Box> */}
          <InvitationSession
            username={username}
            clickEvent={() => handleScrollToView(eventRef.current)}
            clickCouple={() => handleScrollToView(coupleRef.current)}
            clickAlbum={() => handleScrollToView(albumRef.current)}
            clickMungCuoi={() => handleScrollToView(mungCuoiRef.current)}
          />
          <CountDown />
          <EventSession ref={eventRef} />
          <CoupleSession ref={coupleRef} />
          <TimelineSession />
          <AlbumSession ref={albumRef} />
          <MungCuoiSession ref={mungCuoiRef} />
          <IconImg width='100%' src={isPhone ? "/images/end-session-phone.png" : "/images/end-session.png"} />
        </Stack>
      </MediaContext.Provider>
    </UserContext.Provider>
  );
}
