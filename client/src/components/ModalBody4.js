import React, { useState } from 'react'

import { config } from '../config'
import DemoButton from './DemoButton'
import DialogImageCarousel from './DialogImageCarousel'

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

const useStyles = makeStyles((theme) => ({
  modalBodyContainer: {
    backgroundColor: '#fff',
  },
  projectTitleContainer: {
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: 0,
    }
  },
  // Left Column
  projectDescriptionContainer: {
    padding: theme.spacing(1.5),
    boxSizing: 'border-box',
  },
  projectSubTitle: {
    fontWeight: 600,
  },
  projectDescriptionTypography: {
    marginBottom: theme.spacing(1.2)
  },
  imageGridItem: {
    height: '550px'
  },
  imageContainer: {
    width: '100%',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column', // needs to switch to row if & > img has height: 100%
    justifyContent: 'center',
    alignItems: 'center',
    '& > img': {
      height: '100%',
      maxWidth: '100%',
      borderRadius: '10px',
      objectFit: 'contain',
      position: 'relative',
      top: 0,
      transition: 'top ease 0.5s'
    },
    '& > img:hover': {
      top: '-5px',
      cursor: 'pointer',
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
    top: 0,
    right: 0,
  }
}))

const elevation = 3

const boxRowPadding = 1

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

export default function ModalBody4({ open, handleClose, config }) {
  const classes = useStyles()
  const theme = useTheme()

  const [openDIC, setOpenDIC] = useState(false)

  const handleClickDIC = () => {
    setOpenDIC(true)
  }

  const handleCloseDIC = () => {
    setOpenDIC(false)
  }

  return (
    <Dialog
      open={open}
      // fullWidth={true}
      onClose={handleClose}
      flexDirection="column"
      maxWidth={theme.breakpoints.values['lg']}
      TransitionComponent={Transition}
      className={classes.dialog}
    >
      <Box
        height="90vh"
        maxWidth="90vw"
        // maxWidth={theme.breakpoints.values['lg']}
        display="flex"
        flexDirection="column"
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
        <DialogImageCarousel open={openDIC} handleClose={handleCloseDIC} config={config} />
        
        {/* ROW 1 */}
        <Box
          p={boxRowPadding}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box className={classes.projectTitleContainer}>
                <Typography display="block" variant="h2" align="center" className={classes.projectTitleContainer}>
                  {config.hero.title}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* ROW 2 */}
        <Box
          p={boxRowPadding}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper elevation={elevation} className={`${classes.unitContainer} ${classes.projectDescriptionContainer}`}>
                {config.dialog.projectDescription.map((line) => (
                  <Typography variant="body1" className={classes.projectDescriptionTypography}>
                    {line}  
                  </Typography>
                ))}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} className={classes.imageGridItem}>
              <Paper elevation={elevation} className={`${classes.unitContainer} ${classes.imageContainer}`}>
                <img
                  src={config.hero.image.src}
                  alt={config.hero.image.alt}
                  onClick={handleClickDIC}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* ROW 3 */}
        <Box
          p={boxRowPadding}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Paper elevation={elevation} className={`${classes.unitContainer}`}>
                <Typography variant="h5" gutterBottom className={classes.projectSubTitle}>
                  Front-End
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  flexWrap="wrap"
                  height="100px"
                >
                  {config.dialog.frontEnd.map((line) => (
                    <Typography variant="body1">
                      {line}  
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper elevation={elevation} className={`${classes.unitContainer}`}>
                <Typography variant="h5" gutterBottom className={classes.projectSubTitle}>
                  Back-End
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  flexWrap="wrap"
                  height="100px"
                >
                  {config.dialog.backEnd.map((line) => (
                    <Typography variant="body1">
                      {line}  
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={elevation} className={`${classes.unitContainer} ${classes.linksPaper}`}>
                <Typography variant="h5" gutterBottom className={classes.projectSubTitle}>
                  Links
                </Typography>
                <Box
                  flexGrow={1}
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <a target="_blank" rel="noreferrer" href={config.links.github} className={classes.iconLink} >
                    <GitHubIcon fontSize="large" />
                  </a>
                  <DemoButton href={config.links.demo} />
                  <Button
                    variant="outlined"
                    color="primary"
                    size='large'
                    onClick={handleClickDIC}
                  >
                    View Images
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

      </Box> {/* modalBodyContainer */}
    </Dialog>
  )
} 