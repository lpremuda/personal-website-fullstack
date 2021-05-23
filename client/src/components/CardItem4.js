import React from 'react'
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccordionItem from './AccordionItem'

// const theme = useTheme()

export default function CardItem4() {

  const theme = useTheme()

  const useStyles = makeStyles({
    cardItemContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    card: {
      flexGrow: 1,
      display: 'flex',

    },
    cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between"
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    media: {
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
    },
    cardSection: {
      minHeight: '350px',
      // width: '50%',
      [theme.breakpoints.down('xs')]: {
        minHeight: '250px',
        // width: '100%',
      },
    },
    accordionHeading: {

    }
  })

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <div className={`${classes.content} ${classes.cardSection}`}>
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
      </div>
    </Card>
  )
}