import { uuid } from "uuidv4";
import { forwardRef, useState } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";

import { useMedia } from "@/pages/[id]";
import { Button } from "./Buttons";
import IconImg from "./IconImg";

const desktopAlbum = [
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897813/TIT09997_avrmxe.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897813/TIT09927_xonnih.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897812/TIT09874_xl5vwh.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897811/TIT00909_rmgqfn.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897811/TIT00859_dozggr.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897811/TIT00984_alk1va.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897809/TIT00885_yxyrw6.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897809/TIT00842_bqrfr1.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897807/TIT00839_vnyvps.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897806/TIT00579_mpeata.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897807/TIT00763_jas3dj.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897805/TIT00773_fpc5xj.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897804/TIT00753_swfmd3.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897803/TIT00691_ujxo3j.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897803/TIT00751_d8tzhk.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897802/TIT00750_y1h4cm.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897801/TIT00533_tzie73.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897800/TIT00598_g99rdq.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897800/TIT00643_qr3aus.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897800/TIT00660_khsooj.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897798/TIT00638_d3s9ue.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897794/TIT00458_p0ylti.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897770/TIT00419_uniz4l.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897768/TIT00412_hmkdju.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897767/TIT00442_herurc.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897766/TIT00417_xsloh5.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897763/TIT00358_h5spiq.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897763/TIT00323_vsqx2v.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897761/TIT00295_xbsyg1.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897761/TIT00252_n26wq9.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897760/TIT00221_rkfj2n.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897759/TIT00238_kbggd4.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897758/TIT00165_uhog6u.jpg",
    height: 240,
  },
  {
    src: "https://res.cloudinary.com/dsangszai/image/upload/v1702897758/TIT00096_jbkue8.jpg",
    height: 240,
  },
];

export const AlbumSession = forwardRef(function AlbumSession(_, ref) {
  const theme = useTheme();
  const { isPhone } = useMedia();
  const [expand, setExpand] = useState(false);

  const imagesAlbum = desktopAlbum;
  const imageWidth = isPhone ? 146 : 236;

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
        {isPhone ? (
          <IconImg src="/icons/album-deco-phone.svg" />
        ) : (
          <IconImg src="/icons/album-deco.svg" />
        )}
        <Typography
          variant="display"
          color={theme.palette.primary.dark}
          textAlign="center"
        >
          Ngày tình về chung đôi
        </Typography>
        <div id="photos">
          {imagesAlbum.map((images) => (
            <img key={uuid()} src={images.src} />
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
