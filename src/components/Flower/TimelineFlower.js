import Image from "next/image";
import { Box } from "@mui/material";

export function TimelineFlower({ sx }) {
  return (
    <Box position="relative" width={408} height={382} sx={sx}>
      <Image
        src="/images/floral-3.png"
        alt="floral 3"
        width={207}
        height={207}
        style={{
          position: "absolute",
          top: 0,
          left: 146,
          transform: "rotateY(180deg)",
          rotate: "85deg",
        }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={218}
        height={218}
        style={{
          position: "absolute",
          top: 145,
          left: 170,
          transform: "rotateY(180deg)",
          rotate: "85deg",
        }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={218}
        height={218}
        style={{ position: "absolute", top: 122, left: 0, rotate: "85deg" }}
      />
    </Box>
  );
}
