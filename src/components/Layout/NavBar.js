import { useMedia } from "@/providers/MediaProvider";
import { MobileNav } from "../Navigation/MobileNav";
import { DesktopNav } from "../Navigation/DesktopNav";

export function NavBar({ clickEvent, clickCouple, clickAlbum, clickMungCuoi }) {
  const { isPhone } = useMedia();
  const Nav = isPhone ? MobileNav : DesktopNav;

  return (
    <Nav
      clickEvent={clickEvent}
      clickCouple={clickCouple}
      clickAlbum={clickAlbum}
      clickMungCuoi={clickMungCuoi}
    />
  );
}
