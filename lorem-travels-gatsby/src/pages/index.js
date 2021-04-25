import React from "react"
import { Typography, Button } from "@material-ui/core"
import Navbar from "../components/nav/Navbar"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"
import SectionContainer from "../components/homeDesc/SectionContainer"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FD951D",
    },
  },
})

const useStyles = makeStyles({
  heading: {
    padding: "150px 0px 0px 80px",
    fontSize: "5rem",
    fontWeight: 700,
    fontFamily: "Merriweather",
  },
  intro: {
    paddingLeft: "80px",
    color: "#BEABA4",
  },
  heroBtn: {
    margin: "50px 80px",
    padding: "20px 45px",
    color: "#fff",
    borderRadius: "13px",
  },
})

export default function Home() {
  const classes = useStyles()
  return (
    <>
      <Navbar />
      <Typography
        variant="h1"
        gutterBottom
        align="left"
        className={classes.heading}
      >
        Welcome to <br /> Lorem Travels
      </Typography>
      <Typography variant="h6" className={classes.intro}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
        Perferendis veniam nulla autem sit, in necessitatibus <br /> reiciendis
        nostrum doloribus ipsa iste?
      </Typography>
      <ThemeProvider theme={theme}>
        <Button
          className={classes.heroBtn}
          variant="contained"
          color="primary"
          size="large"
          // Add click event here
          onClick={() => {}}
        >
          <Typography style={{ fontSize: 12 }}>Learn more</Typography>
        </Button>
      </ThemeProvider>

      {/* TODO: make this responsive by adding media queries */}
      {/* Note to self: it was a horror dealing with this plugin. If media queries don't work, use gatsby-image plugin instead. */}
      <StaticImage
        src="../images/house-img.webp"
        alt=""
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          position: "absolute",
          top: "10%",
          right: "0%",
          zIndex: -1,
          opacity: 0.7,
        }}
      />
      <SectionContainer />
    </>
  )
}