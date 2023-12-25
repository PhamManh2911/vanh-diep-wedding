import { useRef } from "react";
import Head from "next/head";
import { Stack } from "@mui/material";

import { MediaProvider } from "@/providers/MediaProvider";
import { InvitationSession } from "@/components/Invitation";
import { CountDown } from "@/components/CountDown";
import { EventSession } from "@/components/Event";
import { CoupleSession } from "@/components/Couple";
import { TimelineSession } from "@/components/Timeline";
import { AlbumSession } from "@/components/Album";
import { MungCuoiSession } from "@/components/MungCuoi";
import { Footer } from "@/components/Footer";

export default function Home() {
  const handleScrollToView = (dom) => {
    return () => dom.scrollIntoView({ behavior: "smooth" });
  };

  const eventRef = useRef();
  const coupleRef = useRef();
  const albumRef = useRef();
  const mungCuoiRef = useRef();

  return (
    <>
      <Head>
        <title>Viet Anh & Ngoc Diep Wedding</title>
      </Head>
      <MediaProvider>
        <Stack>
          <InvitationSession
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
    </>
  );
}
