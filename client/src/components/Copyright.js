import { Typography, Link, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../Theme/Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    flexDirection: "column",
    top: "94vh",
    minHeight: "104vh",
    textAlign: "center",
    width: "100vw",
  },

  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[800]
        : theme.palette.grey[800],
  },
  text: {
    color: "#ffffff",
  },
}));
export default function Copyright() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Container
          component="main"
          className={classes.main}
          maxWidth="sm"
        ></Container>
        <footer className={classes.footer}>
          <Typography variant="body2" className={classes.text}>
            {"Made with ❤️ by "}
            <Link
              color="inherit"
              href="https://www.linkedin.com/in/chirag-jaju-3a2b01205/"
            >
              Chirag Jaju
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </footer>
      </div>
    </ThemeProvider>
  );
}
