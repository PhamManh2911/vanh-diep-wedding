import Image from "next/image";
import { Box } from "@mui/material";

import { Button } from "../Buttons";

export function DesktopNav({ clickEvent, clickCouple, clickAlbum, clickMungCuoi }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          height: 104,
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2000,
          backgroundColor: "white",
        }}
      >
        <Button type="text" text="Sự kiện chính" onClick={clickEvent} />
        <Button type="text" text="Cặp đôi" onClick={clickCouple} />
        <Image
          src="/icons/vnd.svg"
          width={72}
          height={72}
          alt="vnd desktop"
        />
        <Button type="text" text="Album cưới" onClick={clickAlbum} />
        <Button type="text" text="Mừng cưới" onClick={clickMungCuoi} />
      </Box>
      <Box height={104} width="100%"></Box>
    </>
  );
}