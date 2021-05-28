import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    display: 'flex',
  },
  modalBodyContainer: {
    height: '90vh', // probably need to change this to minHeight for mobile mode
    width: '90vw',
    maxWidth: theme.breakpoints.values['lg'],
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
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
    flex: '1 0 60%',
    padding: theme.spacing(1.5),
    boxSizing: 'border-box',
  },
  projectSubTitle: {
    fontWeight: 600,
  },
  projectDescriptionTypography: {
    marginBottom: theme.spacing(1.2)
  },
  skillsContainer: {
    flex: '1 0 40%',
    display: 'flex',
    flexDirection: 'row',
  },
  blankEndContainer: {
    flex: '1 0 40%',
    padding: theme.spacing(1.5),
  },
  unitContainer: {
    height: '100%',
    padding: theme.spacing(1.5),
    boxSizing: 'border-box',
  },
  // Right Column
  mediaContainer: {
    flex: '1 0 60%',
    backgroundColor: 'orange',
  },
  linksContainer: {
    flex: '1 0 40%'
  },
}))

const elevation = 3

export default function ModalBody({ open, handleClose }) {
  const classes = useStyles()

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modalContainer}
    >
      <div className={classes.modalBodyContainer}>
        <div className={classes.projectTitleContainer}>
          <Typography display="block" variant="h2" align="center" className={classes.projectTitleContainer}>
            React Sign-In App with Firebase
          </Typography>
        </div>
        <Grid container className={classes.gridContainer} >
          <Grid item xs={12} sm={7} container direction="column">
            <Box className={classes.projectDescriptionContainer}>
              <Paper elevation={elevation} className={classes.unitContainer}>
                <Typography variant="h4" gutterBottom className={classes.projectSubTitle}>
                  Project Description
                </Typography>
                <Typography variant="body1" className={classes.projectDescriptionTypography}>
                  React-based sign-in app. User is able to Sign Up, Log In, Recover Password, Change Username, Change Password, and Sign Out.
                </Typography>
                <Typography variant="body1" className={classes.projectDescriptionTypography}>
                  React Bootstrap used to accelerate development to make a simple and concise UI/UX layout.  
                </Typography>
                <Typography variant="body1" className={classes.projectDescriptionTypography}>
                  Firebase Authentication API used to simplify user authentication. Context used to
                  pass user information and Firebase authentication functions. Prevents users that are not
                  signed in from getting to the dashboard page.
                </Typography>
                <Typography variant="body1" className={classes.projectDescriptionTypography}>
                  Deployed to Heroku  
                </Typography>
              </Paper>
            </Box>
            <Box className={classes.skillsContainer}>
              <Box className={classes.blankEndContainer}>
                <Paper elevation={elevation} className={classes.unitContainer}>
                  <Typography variant="h5" gutterBottom className={classes.projectSubTitle}>
                    Front-End
                  </Typography>
                  <Typography variant="body1">
                    React
                  </Typography>
                  <Typography variant="body1">
                    React Bootstrap
                  </Typography>
                  <Typography variant="body1">
                    HTML5
                  </Typography>
                </Paper>
              </Box>
              <Box className={classes.blankEndContainer}>
                <Paper elevation={elevation} className={classes.unitContainer}>
                  <Typography variant="h5" gutterBottom className={classes.projectSubTitle}>
                    Back-End
                  </Typography>
                  <Typography variant="body1">
                    Firebase
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} container direction="column">
            <Box className={classes.mediaContainer}>
              <Box className={classes.unitContainer}>
                mediaContainer
              </Box>
            </Box>
            <Box className={classes.linksContainer}>
              <Box className={classes.unitContainer}>
                <Paper elevation={elevation} className={classes.unitContainer}>
                  <Typography variant="h5" gutterBottom className={classes.projectSubTitle}>
                    Links
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Modal>
  )
} 