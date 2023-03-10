import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    google: true;
    facebook: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    lineThrough: true;
    cardTitle: true;
    "macro-h6": true
  }
}

export default createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }, 
        margin:0
      `
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "google" },
          style: {
            minWidth: "210px",
            padding: "12px 16px 12px 42px",
            margin: 10,
            boxShadow:
              "0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "12px 50%",
            textTransform: "none",
            lineHeight: "normal",
            backgroundImage:
              "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)",
          },
        },
        {
          props: { variant: "facebook" },
          style: {
            minWidth: "210px",
            padding: "12px 16px 12px 42px",
            margin: 10,
            boxShadow:
              "0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "12px 50%",
            textTransform: "none",
            lineHeight: "normal",
            backgroundImage: 'url("facebook.png")',
            backgroundSize: "20px",
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h5" },
          style: {
            paddingTop: 15,
            paddingBottom: 15,
          },
        },
        {
          props: { variant: "h6" },
          style: {
            paddingBottom: 20,
            paddingTop: 20,
            color: "#5f6368",
            fontSize: "1.3rem",
          },
        },
        {
          props: { variant: "macro-h6" },
          style: {
            padding: 0,
            color: "#5f6368",
            fontSize: "1.2rem",
            paddingBottom: "15px"
          },
        },
        {
          props: { variant: "lineThrough" },
          style: {
            overflow: "hidden",
            textAlign: "center",
            color: "#999",
            "&:before, &:after": {
              backgroundColor: "#eee",
              content: "' '",
              display: "inline-block",
              height: "1px",
              position: "relative",
              verticalAlign: "middle",
              width: "50%",
            },
            "&:before": {
              right: "0.5em",
              marginLeft: "-50%",
            },
            "&:after": {
              left: "0.5em",
              marginRight: "-50%",
            },
          },
        },
        {
          props: { variant: "cardTitle" },
          style: {
            margin: 0,
            fontWeight: "600",
            fontSize: "0.9rem",
            lineHeight: "1.334",
            letterSpacing: "0em",
            textAlign: "center",
            marginBottom: "0.35em",
            paddingTop: "15px",
          },
        },
      ],
    },
  },
});
