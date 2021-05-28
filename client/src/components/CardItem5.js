import React from 'react'

import AccordionItem from './AccordionItem'

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
}))

export default function CardItem5() {
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
        <Button>
          Learn More
        </Button>
        <Button>
          Demo
        </Button>
        <Box>
          <BookmarkBorderIcon />
        </Box>
        
      </CardActions>
      <AccordionItem />
    </Card>
  )
}