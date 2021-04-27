import React from "react"
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"
import { makeStyles, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({})

const useStyles = makeStyles({
  footerText: {
    fontFamily: "Poppins",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
})

function Footer() {
  const classes = useStyles()
  return (
    <AppBar position="static" style={{ backgroundColor: "#FD951D" }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            className={classes.footerText}
          >
            &copy; 2021, Lorem Travels -
            <a href="https://github.com/AdityaBhattacharya1">
              Made by Aditya Bhattacharya
            </a>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Footer