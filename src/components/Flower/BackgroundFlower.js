import Image from "next/image";
import { Box } from "@mui/material";

export function BackgroundFlowerMobile({ sx }) {
  return (
    <Box width={88} height={73} position="absolute" sx={sx}>
      <Image
        src="/images/floral-3.png"
        width={47}
        height={47}
        alt="floral 3"
        style={{ position: "absolute", left: 0, top: -3, rotate: "-90deg" }}
      />
      <Image
        src="/images/floral-5.png"
        width={67}
        height={67}
        alt="floral 5"
        style={{
          position: "absolute",
          right: 0,
          top: 15,
          transform: "rotateY(180deg)",
        }}
      />
      <Image
        src="/images/floral-1.png"
        width={58}
        height={58}
        alt="floral 1"
        style={{
          position: "absolute",
          right: 0,
          top: -11,
          rotate: "-90deg",
          transform: "rotateY(180deg)",
        }}
      />
    </Box>
  );
}

export function BackgroundFlower({ sx }) {
  return (
    <Box width={280} height={232} position="absolute" sx={sx}>
      <Image
        src="/images/floral-3.png"
        width={150}
        height={150}
        alt="floral 3"
        style={{ position: "absolute", left: 0, top: -10, rotate: "-90deg" }}
      />
      <Image
        src="/images/floral-5.png"
        width={213}
        height={213}
        alt="floral 5"
        style={{
          position: "absolute",
          right: 0,
          top: 46,
          transform: "rotateY(180deg)",
        }}
      />
      <Image
        src="/images/floral-1.png"
        width={185}
        height={185}
        alt="floral 1"
        style={{
          position: "absolute",
          right: 0,
          top: -36,
          rotate: "-90deg",
          transform: "rotateY(180deg)",
        }}
      />
    </Box>
  );
}
