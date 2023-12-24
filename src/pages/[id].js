import { createContext, useContext, useRef } from "react";
import Image from "next/image";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";

import { appHostname } from "@/configs/app";
import { CountDown } from "@/components/CountDown";
import { EventSession } from "@/components/Event";
import { CoupleSession } from "@/components/Couple";
import { TimelineSession } from "@/components/Timeline";
import { AlbumSession } from "@/components/Album";
import { MungCuoiSession } from "@/components/MungCuoi";
import { InvitationSession } from "@/components/Invitation";
import { Form } from "@/components/Form";
import endSessionPhone from "@/../public/images/end-session-phone.png";
import endSession from "@/../public/images/end-session.png";

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

  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScrollToView = (dom) => {
    dom.scrollIntoView({ behavior: "smooth" });
  };

  const eventRef = useRef();
  const coupleRef = useRef();
  const albumRef = useRef();
  const mungCuoiRef = useRef();

  return (
    <UserContext.Provider value={{ user }}>
      <MediaContext.Provider value={{ isPhone }}>
        <Stack>
          <Form />
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
          <Box position="relative" width="100%" height={isPhone ? 780 : 500}>
            <Image
              src={isPhone ? endSessionPhone : endSession}
              alt="end session image"
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Stack>
      </MediaContext.Provider>
    </UserContext.Provider>
  );
}
