import Image from "next/image";
import { Box } from "@mui/material";

import { useMedia } from "@/providers/MediaProvider";
import endSessionPhoneImage from "../../public/images/end-session-phone.png";
import endSessionImage from "../../public/images/end-session.png";

export function Footer() {
  const { isPhone } = useMedia();

  return (
    <Box position="relative" width="100%" height={isPhone ? 780 : 500}>
      <Image
        src={isPhone ? endSessionPhoneImage : endSessionImage}
        alt="end session image"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
