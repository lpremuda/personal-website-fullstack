import React, { useEffect } from 'react'
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import { makeStyles } from '@material-ui/core/styles'
import heroImage from '../../images/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import GridItem from '../GridItem'
import CardItem5 from '../CardItem5'
import ImageItem3 from '../ImageItem3'
import CardItem from '../CardItem'
import { CallReceived } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  // mainContainer: {
  //   position: 'absolute',
  //   top: 0,
  // },
  heroMainContainer: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    fontSize: '4rem',
    color: '#fff',
    position: 'relative',
  },
  heroBoxContainer: {
    position: 'absolute',
    top: '128px',
    height: 'calc(100% - 128px)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroBoxSubContainer: {
    height: '90%',
    width: '90%',

    border: '2px solid red',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heroBoxSub2Container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: '2px solid orange',
  },
  heroGridContainer: {
    height: '100%',
    // width: '100%',
    boxSizing: 'border-box',
    border: '2px solid yellow',
  },
  heroGridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '200px',
    border: '2px solid blue',
  },
  gridItemDiv: {
    backgroundColor: 'purple',
    flex: '1 1 20px',
    height: '50px',
    // width: '50px',
  },



  projectsContainer: {
    display: 'flex',
    justifyContent: 'center',
    // [theme.breakpoints.up('lg')]: {
    //   margin: 'auto',
      // backgroundColor: 'red',
    // },
    maxWidth: theme.breakpoints.values['lg'],
    // margin: 'auto',
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 'auto'
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default function Home({ enableShowNavProjects }) {
  const classes = useStyles()

  useEffect(enableShowNavProjects, [])

  return (
    <>
      <div className={classes.heroMainContainer}>
        <Box className={classes.heroBoxContainer}>
          <Box className={classes.heroBoxSubContainer}>
            <Box className={classes.heroBoxSub2Container}>
              {/* <span>Welcome to Website</span> */}
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
                spacing={4}>
                <Grid item xs={6} children={<div className={classes.gridItemDiv} />} className={classes.heroGridItem} />
                <Grid item xs={6} children={<div className={classes.gridItemDiv} />} className={classes.heroGridItem} />
                <Grid item xs={6} children={<div className={classes.gridItemDiv} />} className={classes.heroGridItem} />
                <Grid item xs={6} children={<div className={classes.gridItemDiv} />} className={classes.heroGridItem} />
              </Grid>
            </Box>
          </Box>
        </Box>
      </div>
        <Box mt={2} mx="auto" className={classes.projectsContainer}>
          <Grid container spacing={2}>
            <GridItem id="project1" position="0">
              <CardItem5 />
            </GridItem>
            <GridItem position="1">
              <ImageItem3 />
            </GridItem>
            <GridItem position="2">
              <ImageItem3 />
            </GridItem>
            <GridItem id="project2" position="3">
              <CardItem5 />
            </GridItem>
            <GridItem id="project3" position="4">
              <CardItem5 />
            </GridItem>
            <GridItem position="5">
              <ImageItem3 />
            </GridItem>
            <GridItem position="6">
              <ImageItem3 />
            </GridItem>
            <GridItem id="project4" position="7">
              <CardItem5 />
            </GridItem>
          </Grid>
        </Box>

        <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React useContext
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React Router
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React useContext
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React useContext
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
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
            </Grid>
        </Grid>
    </>
  )
}