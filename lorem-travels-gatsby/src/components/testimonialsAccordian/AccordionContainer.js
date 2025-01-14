import { Typography } from "@material-ui/core"
import React from "react"
import AccordionTemplate from "./AccordionTemplate"
import { makeStyles, createMuiTheme } from "@material-ui/core/styles"
import { testimonialsData } from "../data/testimonialsData"

const theme = createMuiTheme({})

const useStyles = makeStyles({
  heading: {
    paddingTop: "120px",
    paddingBottom: "20px",
    textAlign: "center",
    color: "#000",
    fontWeight: 1000,
    fontFamily: "Merriweather",
    textDecoration: "underline",
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
})

function AccordionContainer() {
  const classes = useStyles()
  return (
    <article id="testimonials" aria-label="Our Testimonials" role="contentinfo">
      <Typography variant="h3" className={classes.heading}>
        Our Testimonials
      </Typography>
      {testimonialsData.map(({ id, title, details }) => {
        return <AccordionTemplate key={id} title={title} details={details} />
      })}
    </article>
  )
}

export default AccordionContainer
