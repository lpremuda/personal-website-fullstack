import React from 'react'
import Image from 'material-ui-image'
import { Box, Card, CardActions, CardActionArea, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    height: '75%',
    width: '200px',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMedia: {
    // height: '90%',
    // width: '90%',
    // height: '100px',
    // width: '100px',
    // padding: '20px',
    // flexGrow: 1,
  },
})

export default function ImageItem2() {
  const classes = useStyles()

  return (
      // <Box className={classes.card}>
          <Image
            src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className={classes.cardMedia}
            aspectRatio={(2/1)}
            />
      // </Box>
  )
}