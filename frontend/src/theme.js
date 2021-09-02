import { createTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButton: {
      root: {
        marginTop: 20,

        "&:not(:last-child)": {
          marginRight: 15,
        },

        "&:hover $startIcon": {
          transform: "rotate(360deg)",
        },
      },
      startIcon: {
        transition: "all 0.3s",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "::-webkit-scrollbar": {
          width: "10px",
          "&-track": {
            background: "#f1f1f1",
          },
          "&-thumb": {
            background: "#888",
          },
          "&-thumb:hover": {
            background: "#555",
          },
        },
      },
    },
  },

  props: {
    MuiContainer: {
      component: Box,
      p: 3,
    },
    MuiTypography: {
      display: "block",
    },
    MuiPaper: {
      component: Box,
      p: 2,
      variant: "outlined",
    },
  },
});

export default theme;
