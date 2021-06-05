import React from 'react'

import { config } from '../config'
import DemoButton from './DemoButton'

import Carousel from 'react-material-ui-carousel'

import { makeStyles, darken, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import Zoom from '@material-ui/core/Zoom'

import CancelIcon from '@material-ui/icons/Cancel'
import GitHubIcon from '@material-ui/icons/GitHub'
import { ListItemSecondaryAction } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modalBodyContainer: {
    backgroundColor: '#fff',
    overflow: 'visible',
    // height: '200vh',
  },
  projectTitleContainer: {
    margin: `${theme.spacing(2)}px 0`,
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: 0,
    }
  },
  gridContainer: {
    height: '100%',
    padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`
  },
  // Left Column
  projectDescriptionContainer: {
    // flex: '1 0 60%',
    padding: theme.spacing(1.5),
    boxSizing: 'border-box',
  },
  projectSubTitle: {
    fontWeight: 600,
  },
  projectDescriptionTypography: {
    marginBottom: theme.spacing(1.2)
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
      // width: '100%',
      maxWidth: '100%',
      borderRadius: '10px',
      objectFit: 'cover',
    },
  },  
  unitContainer: {
    height: '100%',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
  linksPaper: {
    display: 'flex',
    flexDirection: 'column',
  },
  // iconLink copied from Footer
  iconLink: {
    color: 'inherit',
    '&:hover': {
      color: darken(theme.palette.primary.contrastText, config.Footer.link.darkenValue)
    }
  },
  buttonLink: {
    textDecoration: 'none',
  },
  closeButton: {
    position: 'absolute',
    // padding: 0,
    top: 0,
    right: 0,
  },
  carouselBox: {
    height: '300px',
    width: '400px',
  }
}))

const elevation = 3

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function DialogImageCarousel({ open, handleClose, config }) {
  const classes = useStyles()
  const theme = useTheme()
  const imageFiles = config.dialog.imageFiles

  return (
    <Dialog
      open={open}
      // fullWidth={true}
      onClose={handleClose}
      flexDirection="column"
      maxWidth={theme.breakpoints.values['lg']}
      TransitionComponent={Transition}
    >
      <Box
        height="90vh"
        maxWidth="90vw"
        // maxWidth={theme.breakpoints.values['lg']}
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        borderRadius={10}
        boxSizing="border-box"
        p={1}
        bgColor={theme.palette.background.default}
        className={classes.modalBodyContainer}
      >
        <IconButton
          color="inherit"
          size="medium"
          onClick={handleClose}
          className={classes.closeButton}
          aria-label="menu">
            <CancelIcon fontSize="large" />
        </IconButton>
        {/* <Box> */}
          {/* <Carousel /> */}
          {/* <img src="images/YourLibrary/YourLibrary-Index.jpg" alt="image" /> */}
        {/* </Box> */}
        <Carousel
          autoPlay={false}
        >
          {
            imageFiles.map((imageFile,i) => (
              <img key={i} src={imageFile} alt="image" />
            ))
          }
        </Carousel>
      </Box>
    </Dialog>
  )
} 