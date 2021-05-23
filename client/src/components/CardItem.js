import React from 'react'
import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    // maxWidth: '100%',
    // height: '100%',
    // height: '350px',
    // width: '475px',
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
})

export default function CardItem() {

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            React useContext
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Box ml={2}>
            <Typography variant="subtitle2" component="p">
              Guy Clemons
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              May 14, 2020
            </Typography>
          </Box>
        </Box>
        <Box>
          <BookmarkBorderIcon />
        </Box>
      </CardActions>
    </Card>
  )
}