import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    overflow: 'scroll',
    display: 'flex',
    // height: '200vh',
  },
  modalBodyContainer: {
    backgroundColor: '#fff',
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
      width: '100%',
      borderRadius: '10px',
    },
  },  
  blankEndContainer: {
    // flex: '1 0 70%',
    // minHeight: '20%',
    padding: theme.spacing(1.5),
  },
  unitContainer: {
    height: '100%',
    padding: theme.spacing(1.5),
    boxSizing: 'border-box',
  },
  // bottomGridItem: {
  //   height: '200px',
  // },
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
  const theme = useTheme()

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modalContainer}
      flexDirection="column"
    >
      <Box
        // flexGrow={1}
        minHeight="90vh"
        width="90vw"
        maxWidth={theme.breakpoints.values['lg']}
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        borderRadius={10}
        boxSizing="border-box"
        p={2}
        // mx="auto"
        // my={theme.spacing(1)}
        bgColor={theme.palette.background.default}
        className={classes.modalBodyContainer}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.projectTitleContainer}>
              <Typography display="block" variant="h2" align="center" className={classes.projectTitleContainer}>
                React Sign-In App with Firebase
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Box className={classes.projectDescriptionContainer}> */}
                <Paper elevation={elevation} className={`${classes.unitContainer} ${classes.projectDescriptionContainer}`}>
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
              {/* </Box> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={elevation} className={`${classes.unitContainer} ${classes.blankEndContainer}`}>
              <Box className={classes.imageContainer}>
                <img
                // src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                src={"images/react-firebase-log-in.jpg"}
                alt='ImageItem3.js'
                className={classes.image}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.bottomGridItem}>
            {/* <Box className={classes.blankEndContainer}> */}
              <Paper elevation={elevation} className={`${classes.unitContainer} ${classes.blankEndContainer}`}>
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
            {/* </Box> */}
          </Grid>
          <Grid item xs={6} sm={3}>
            {/* <Box className={classes.blankEndContainer}> */}
              <Paper elevation={elevation} className={`${classes.unitContainer} ${classes.blankEndContainer}`}>
                <Typography variant="h5" gutterBottom className={classes.projectSubTitle}>
                  Back-End
                </Typography>
                <Typography variant="body1">
                  Firebase
                </Typography>
              </Paper>
            {/* </Box> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Box className={classes.linksContainer}> */}
              {/* <Box className={classes.unitContainer}> */}
                <Paper height="400px" elevation={elevation} className={`${classes.unitContainer} ${classes.blankEndContainer}`}>
                  <Typography variant="h5" gutterBottom className={classes.projectSubTitle}>
                    Links
                  </Typography>
                </Paper>
              {/* </Box> */}
            {/* </Box> */}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
} 