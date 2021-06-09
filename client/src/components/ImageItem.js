import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'

export default function ImageItem({ config }) {
  const theme = useTheme()
  
  const useStyles = makeStyles({
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
        maxWidth: '100%',
        maxHeight: '100%',
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
        <img
          // src={config.hero.image.src}
          // alt={config.hero.image.alt}
          src={config.dialog.imageFilesNoURL[0]}
          className={classes.image}
          />
    </div>
  )
}