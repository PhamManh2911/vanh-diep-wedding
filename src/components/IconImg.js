import React, { useEffect, useRef, useState } from "react";
import { Box, Skeleton, styled } from "@mui/material";

const IconImage = styled("img")({
  display: "flex",
  height: "inherit",
  width: "inherit",
});

export default function IconImg({ src, sx = {}, imageSx, ...props }) {
  if (sx && sx.width && !sx.height) sx.height = "auto";
  if (sx && sx.height && !sx.width) sx.width = "auto";
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    if (imageRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      {...props}
    >
      <IconImage
        src={src}
        sx={{ display: loaded ? "block" : "none", ...imageSx }}
        ref={imageRef}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <Skeleton
          variant="rectangular"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...sx,
          }}
          {...props}
        />
      )}
    </Box>
  );
}
