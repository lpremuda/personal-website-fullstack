import React from 'react'
import Image from 'material-ui-image'
import { Box, Card, CardActions, CardActionArea, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMedia: {
    // height: '90%',
    // width: '90%',
    // height: '100%',
    // width: '100%',
    // padding: '20px',
  },
})

export default function ImageItem() {
  const classes = useStyles()

  return (
      <Card className={classes.card}>
          <CardMedia
            image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            title="Contemplative Reptile"
            className={classes.cardMedia}
            />
      </Card>
  )
}