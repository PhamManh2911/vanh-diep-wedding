import { uuid } from "uuidv4";
import { forwardRef, useState } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import { useMedia } from "@/providers/MediaProvider";
import { Button } from "./Buttons";
import { AlbumFlower } from "./Flower/AlbumFlower";

const desktopAlbum = [
  {
    src: "/images/TIT09997_avrmxe.jpg",
    height: 240,
  },
  {
    src: "/images/TIT09927_xonnih.jpg",
    height: 240,
  },
  {
    src: "/images/TIT09874_xl5vwh.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00909_rmgqfn.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00859_dozggr.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00984_alk1va.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00885_yxyrw6.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00842_bqrfr1.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00839_vnyvps.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00579_mpeata.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00763_jas3dj.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00773_fpc5xj.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00753_swfmd3.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00691_ujxo3j.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00751_d8tzhk.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00750_y1h4cm.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00533_tzie73.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00598_g99rdq.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00643_qr3aus.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00660_khsooj.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00638_d3s9ue.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00458_p0ylti.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00419_uniz4l.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00412_hmkdju.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00442_herurc.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00417_xsloh5.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00358_h5spiq.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00323_vsqx2v.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00295_xbsyg1.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00252_n26wq9.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00221_rkfj2n.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00238_kbggd4.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00165_uhog6u.jpg",
    height: 240,
  },
  {
    src: "/images/TIT00096_jbkue8.jpg",
    height: 240,
  },
];

export const AlbumSession = forwardRef(function AlbumSession(_, ref) {
  const theme = useTheme();
  const { isPhone } = useMedia();
  const [expand, setExpand] = useState(false);

  const imagesAlbum = desktopAlbum;

  return (
    <Box
      width="100vw"
      height={expand ? "fit-content" : "1035px"}
      ref={ref}
      position="relative"
      sx={{
        overflow: "hidden",
        transition: theme.transitions.create(["all"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <Stack
        width="100%"
        minHeight="100%"
        padding={isPhone ? "0px 16px 24px 16px" : "0px 82px 64px 82px"}
        alignItems="center"
        gap={isPhone ? "8px" : "32px"}
        flexShrink={0}
        sx={{ background: theme.palette.neutral.light, zIndex: 1000 }}
      >
        <Typography
          variant="headline1"
          color={theme.palette.primary.dark}
          textAlign="center"
        >
          ALBUM ẢNH CƯỚI
        </Typography>
        <AlbumFlower />
        <Typography
          variant="display"
          color={theme.palette.primary.dark}
          textAlign="center"
        >
          Ngày tình về chung đôi
        </Typography>
        <div id="photos">
          {imagesAlbum.map((images) => (
            <Image
              key={uuid()}
              src={images.src}
              height={images.height}
              alt="image"
              width={isPhone ? 146 : 236}
            />
          ))}
        </div>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-flex",
          height: "100%",
          width: "100%",
          padding: "32px 0",
          margin: "auto",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "8px",
          flexShrink: 0,
          background: expand
            ? null
            : "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 67.31%, #FFF 97.17%)",
          zIndex: 1001,
        }}
      >
        <Button
          onClick={() => setExpand((prev) => !prev)}
          text={expand ? "Thu nhỏ" : "Xem thêm"}
        />
      </Box>
    </Box>
  );
});
