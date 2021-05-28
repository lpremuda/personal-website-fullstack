import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

export default function ImageItem3() {
  const theme = useTheme()
  
  const useStyles = makeStyles({
    imageORIG: {
      // minHeight: '350px',
      // width: '100px',
      // height: '100px',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      [theme.breakpoints.down('xs')]: {
        minHeight: '250px'
        // width: '100%',
      },
      // backgroundImage: 'url(https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
      backgroundImage: 'url(react-firebase-log-in.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    imageContainer: {
      height: '100%',
      width: '100%',
      padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column', // needs to switch to row if & > img has height: 100%
      justifyContent: 'center',
      alignItems: 'center',
      '& > img': {
        width: '100%',
        borderRadius: '10px',
      },
    },
    // image: {
    //   maxWidth: '100%',
    //   height: '100%',
    //   display: 'block',
    //   objectFit: 'cover',
    // },
  })
  
  const classes = useStyles()

  return (
    <div className={classes.imageContainer}>
        {/* <Image
          src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          // className={classes.cardMedia}
          aspectRatio={(2/1)}
          cover
          /> */}
        <img
          // src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          src={"images/react-firebase-log-in.jpg"}
          alt='ImageItem3.js'
          className={classes.image}
          />
    </div>
  )
}