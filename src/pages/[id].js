import { useRef } from "react";
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
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Layout/NavBar";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await (await fetch(`${appHostname}/api/users/${id}`)).json();

  return {
    props: { user: response.data.user },
  };
}

export default function Wedding({ user }) {
  const { username } = user;

  const handleScrollToView = (dom) =>
    dom.scrollIntoView({ behavior: "smooth" });

  const eventRef = useRef();
  const coupleRef = useRef();
  const albumRef = useRef();
  const mungCuoiRef = useRef();

  return (
    <Stack>
      <NavBar
        clickEvent={() => handleScrollToView(eventRef.current)}
        clickCouple={() => handleScrollToView(coupleRef.current)}
        clickAlbum={() => handleScrollToView(albumRef.current)}
        clickMungCuoi={() => handleScrollToView(mungCuoiRef.current)}
      />
      <Form user={user} />
      <InvitationSession username={username} />
      <CountDown />
      <EventSession ref={eventRef} />
      <CoupleSession ref={coupleRef} />
      <TimelineSession />
      <AlbumSession ref={albumRef} />
      <MungCuoiSession ref={mungCuoiRef} />
      <Footer />
    </Stack>
  );
}
