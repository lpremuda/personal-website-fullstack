import React from 'react'

import Carousel from 'react-material-ui-carousel'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Zoom from '@material-ui/core/Zoom'

import blueGrey from '@material-ui/core/colors/blueGrey'
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles((theme) => ({
  dialog: {
    // width: '100%',
  },
  carousel: {
    width: '100%',
  },
  modalBodyContainer: {
    // backgroundColor: '#fff',
    overflow: 'visible',
    // height: '200vh',
  },
  closeButton: {
    position: 'absolute',
    // padding: 0,
    top: 0,
    right: 0,
    zIndex: 10000,
  },
  backgroundImageDiv: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  imgContainer: {
    height: '100%',
    '& > img': {
      maxWidth: '100%',
      maxHeight: '100%',
    }
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function DialogImageCarousel({ open, handleClose, configProject }) {
  const classes = useStyles()
  const theme = useTheme()
  const imageFilesNoURL = configProject.dialog.imageFilesNoURL
  const alts = configProject.dialog.alts
  const grayCancelBtn = configProject.dialog.grayCancelBtn

  return (
    <Dialog
      open={open} 
      flexDirection="column"
      maxWidth={theme.breakpoints.values['lg']}
      className={classes.dialog}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        // borderRadius={10}
        boxSizing="border-box"
        bgcolor={theme.palette.primary.dark}
        className={classes.modalBodyContainer}
      >
        <IconButton
          color="inherit"
          size="medium"
          onClick={handleClose}
          className={classes.closeButton}
          aria-label="menu">
            <CancelIcon
              style={grayCancelBtn ? { color: blueGrey[400] } : { color: 'inherit' } }
              fontSize="large"
            />
        </IconButton>
        <Carousel
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          animation="slide"
          className={classes.carousel}
          indicatorContainerProps={{
            style: {
              position: 'absolute',
              top: 0
            }
          }}
        >
          {
            imageFilesNoURL.map((imageFile,i) => (
              
              <Box
                height="90vh"
                width="85vw"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                key={i}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.imgContainer}
                >
                  <img key={i} src={imageFile} alt={alts[i]} />
                </Box>
              </Box>
            ))
          }
        </Carousel>
      </Box>
    </Dialog>
  )
} 