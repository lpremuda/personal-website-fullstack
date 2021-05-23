import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccordionItem from './AccordionItem'

// const theme = useTheme()

export default function CardItem5() {

  const theme = useTheme()

  const useStyles = makeStyles({
    card: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between"
    },
    cardSection: {
      // minHeight: '350px',
      // [theme.breakpoints.down('xs')]: {
      //   minHeight: '250px',
      // },
    },
    accordionHeading: {

    }
  })

  const classes = useStyles()

  return (
    <Card className={`${classes.card} ${classes.cardSection}`}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            React Sign-In App with Firebase Authentication
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        {/* <Button>
          Learn More
        </Button>
        <Button>
          Demo
        </Button>
        <Box>
          <BookmarkBorderIcon />
        </Box> */}
        
      </CardActions>
      <AccordionItem />
    </Card>
  )
}