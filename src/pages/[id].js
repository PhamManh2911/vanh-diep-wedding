import { createContext, useContext, useRef } from "react";
import { Stack } from "@mui/material";

import { appHostname } from "@/configs/app";
import { CountDown } from "@/components/CountDown";
import { EventSession } from "@/components/Event";
import { CoupleSession } from "@/components/Couple";
import { TimelineSession } from "@/components/Timeline";
import { AlbumSession } from "@/components/Album";
import { MungCuoiSession } from "@/components/MungCuoi";
import { InvitationSession } from "@/components/Invitation";
import { Form } from "@/components/Form";
import { MediaProvider } from "@/providers/MediaProvider";
import { Footer } from "@/components/Footer";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
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

  const handleScrollToView = (dom) => {
    return () => dom.scrollIntoView({ behavior: "smooth" });
  };

  const eventRef = useRef();
  const coupleRef = useRef();
  const albumRef = useRef();
  const mungCuoiRef = useRef();

  return (
    <UserContext.Provider value={{ user }}>
      <MediaProvider>
        <Stack>
          <Form />
          <InvitationSession
            username={username}
            clickEvent={handleScrollToView(eventRef.current)}
            clickCouple={handleScrollToView(coupleRef.current)}
            clickAlbum={handleScrollToView(albumRef.current)}
            clickMungCuoi={handleScrollToView(mungCuoiRef.current)}
          />
          <CountDown />
          <EventSession ref={eventRef} />
          <CoupleSession ref={coupleRef} />
          <TimelineSession />
          <AlbumSession ref={albumRef} />
          <MungCuoiSession ref={mungCuoiRef} />
          <Footer />
        </Stack>
      </MediaProvider>
    </UserContext.Provider>
  );
}
