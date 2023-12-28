import Image from "next/image";
import { Box } from "@mui/material";

import { useMedia } from "@/providers/MediaProvider";

export function AlbumFlower() {
  const { isPhone } = useMedia();
  const dimension = isPhone ? 32 : 85;

  return (
    <Box>
      <Image
        src="/images/floral-3.png"
        alt="floral 3"
        width={dimension}
        height={dimension}
        style={{ transform: "rotateY(0deg)", rotate: "-135deg" }}
      />
      <Image
        src="/images/floral-3.png"
        alt="floral 3"
        width={dimension}
        height={dimension}
        style={{ transform: "rotateY(180deg)", rotate: "135deg" }}
      />
    </Box>
  );
}
