import Image from "next/image";
import { Box } from "@mui/material";

export function MungCuoiFlowerMobile({ transform }) {
  return (
    <Box width={63} height={104} position="relative" sx={{ transform }}>
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={55}
        height={55}
        style={{
          position: "absolute",
          top: 0,
          left: 17,
          rotate: "-5deg",
          transform: "rotateY(180deg)",
        }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={55}
        height={55}
        style={{ position: "absolute", top: 43, left: 11, rotate: "-5deg" }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={46}
        height={46}
        style={{ position: "absolute", top: 52, left: -5, rotate: "-10deg" }}
      />
    </Box>
  );
}

export function MungCuoiFlower({ transform }) {
  return (
    <Box width={356} height={216} position="relative" sx={{ transform }}>
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={112}
        height={112}
        style={{ position: "absolute", top: 0, left: 145, rotate: "5deg" }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={112}
        height={112}
        style={{
          position: "absolute",
          top: 87,
          left: 157,
          rotate: "5deg",
          transform: "rotateY(180deg)",
        }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={96}
        height={96}
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          rotate: "-5deg",
          transform: "rotateY(180deg)",
        }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={96}
        height={96}
        style={{ position: "absolute", top: 105, left: 20, rotate: "-5deg" }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={80}
        height={80}
        style={{
          position: "absolute",
          top: 120,
          left: 80,
          rotate: "-5deg",
          transform: "rotateY(180deg)",
        }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={80}
        height={80}
        style={{ position: "absolute", top: 120, left: -15, rotate: "-10deg" }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={80}
        height={80}
        style={{
          position: "absolute",
          top: 120,
          left: 270,
          rotate: "15deg",
          transform: "rotateY(180deg)",
        }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={140}
        height={140}
        style={{ position: "absolute", top: 60, left: 80 }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={80}
        height={80}
        style={{
          position: "absolute",
          top: 40,
          left: 230,
          transform: "rotateY(180deg)",
        }}
      />
      <Image
        src="/images/floral-1.png"
        alt="floral 1"
        width={110}
        height={110}
        style={{
          position: "absolute",
          top: 90,
          left: 220,
          rotate: "15deg",
          transform: "rotateY(180deg)",
        }}
      />
    </Box>
  );
}
