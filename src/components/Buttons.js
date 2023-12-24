import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useMemo } from "react";

export function NavButton({ text, onClick }) {
  const theme = useTheme();

  return (
    <Stack height={40} gap={8} onClick={onClick} sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          display: "flex",
          padding: "10px 12px",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          alignSelf: "stretch",
        }}
      >
        <Typography
          variant="label"
          sx={{ color: theme.palette.primary.main, textAlign: "center" }}
        >
          {text}
        </Typography>
      </Box>
    </Stack>
  );
}

export function Button({
  text,
  onClick,
  type = "filled",
  disable = false,
  icon = false,
  width = "100%",
}) {
  const theme = useTheme();

  const boxSx = useMemo(() => {
    switch (type) {
      case "filled":
        return disable
          ? {
              background: theme.palette.neutral.midLight,
            }
          : {
              background: theme.palette.primary.main,
              "&:hover": {
                boxShadow:
                  "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
              },
            };
      case "outlined":
        return {
          border: `1px solid ${
            disable
              ? theme.palette.neutral.main
              : theme.palette.neutral.midLight
          }`,
        };
      case "text":
        return disable
          ? {}
          : {
              "&:hover": { background: theme.palette.stateLayer.primary8 },
              "&:Mui-focusVisible": {
                background: theme.palette.stateLayer.primary12,
              },
            };
      default:
        return disable
          ? theme.palette.neutral.midLight
          : theme.palette.primary.main;
    }
  }, [type, disable, theme]);

  const layerSx = useMemo(() => {
    switch (type) {
      case "filled":
        return disable
          ? {
              background: theme.palette.stateLayer.onSurface,
            }
          : {
              "&:hover": { background: theme.palette.stateLayer.onPrimary8 },
              "&.Mui-focusVisible": {
                background: theme.palette.stateLayer.onPrimary12,
              },
            };
      case "outlined":
        return disable
          ? {}
          : {
              "&:hover": { background: theme.palette.stateLayer.primary8 },
              "&.Mui-focusVisible": {
                background: theme.palette.stateLayer.primary12,
              },
            };
      case "text":
        return {};
      default:
        return disable
          ? {
              background: theme.palette.stateLayer.onSurface,
            }
          : {
              "&:hover": { background: theme.palette.stateLayer.onPrimary8 },
              "&.Mui-focusVisible": {
                background: theme.palette.stateLayer.onPrimary12,
              },
            };
    }
  }, [type, disable, theme]);

  const iconSrc = useMemo(() => {
    switch (type) {
      case "filled":
        return disable ? "/icons/plus-black.svg" : "/icons/plus-white.svg";
      case "outlined":
        return disable ? "/icons/plus-black.svg" : "/icons/plus-blue.svg";
      case "text":
        return disable ? "/icons/plus-black.svg" : "/icons/plus-blue.svg";
      default:
        return disable ? "/icons/plus-black.svg" : "/icons/plus-white.svg";
    }
  }, [type, disable]);

  const textColor = useMemo(() => {
    switch (type) {
      case "filled":
        return disable
          ? theme.palette.neutral.main
          : theme.palette.neutral.light;
      case "outlined":
        return disable
          ? theme.palette.neutral.main
          : theme.palette.primary.main;
      case "text":
        return disable
          ? theme.palette.neutral.main
          : theme.palette.primary.main;
      default:
        return disable
          ? theme.palette.neutral.main
          : theme.palette.neutral.light;
    }
  }, [type, disable, theme]);

  return (
    <Stack
      onClick={onClick}
      width="fit-content"
      height={40}
      gap={8}
      borderRadius="100px"
      justifyContent="center"
      alignItems="center"
      sx={{ cursor: "pointer", ...boxSx }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "10px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          borderRadius: "100px",
          width,
          ...layerSx,
        }}
      >
        {icon && (
          <Image src={iconSrc} width={24} height={24} alt="icons button" />
        )}
        <Typography
          variant="label"
          sx={{ color: textColor, textAlign: "center" }}
        >
          {text}
        </Typography>
      </Box>
    </Stack>
  );
}
