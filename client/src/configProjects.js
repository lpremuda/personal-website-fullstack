export const configProjects = {
  reactSignIn: {
    hero: {
      title: "React Sign-In App with Firebase",
      description: "React-based sign-in app with React Bootstrap on front end and Firebase Authentication API on back end",
      image: {
        src: "images/react-firebase-log-in.jpg",
        alt: "react-firebase-log-in.jpg"
      }
    },
    dialog: {
      projectDescription: [
        "React-based sign-in app. User is able to Sign Up, Log In, Recover Password, Change Username, Change Password, and Sign Out.",
        "React Bootstrap used to accelerate development to make a simple and concise UI/UX layout.",
        "Firebase Authentication API used to simplify user authentication. Context used to pass user information and Firebase authentication functions. Prevents users that are not signed in from getting to the dashboard page.",
        "Deployed to Heroku",
      ],
      frontEnd: [
        "React",
        "React Bootstrap",
        "HTML5",
        "CSS3",
      ],
      backEnd: [
        "Firebase"
      ],
      imageFiles: [
        "images/YourLibrary/YourLibrary-Index.jpg",
        "images/YourLibrary/YourLibrary-Book_New.jpg",
        "images/YourLibrary/YourLibrary-Book_Show.jpg",
        "images/YourLibrary/YourLibrary-Author_New.jpg",
        "images/YourLibrary/YourLibrary-Author_Show.jpg",        
      ],
    },
    links: {
      github: "https://github.com/lpremuda/react-firebase-auth-app",
      demo: "https://react-firebase-auth-app.herokuapp.com/login"
    }
  },
  me_nLibrary: {
    hero: {
      title: "Full-Stack MEN Library App",
      description: "MongoDB, Express, and Node working together to build full-stack RESTful following the MVC design pattern",
      image: {
        src: "images/react-firebase-log-in.jpg", //FIX
        alt: "react-firebase-log-in.jpg" //FIX
      }
    },
    dialog: {
      projectDescription: [
        "Full-stack MEN app with EJS Javascript templating for rendering views instead of React (MERN) or Angular (MEAN). User is able to perform CRUD actions on authors and books.",
        "Node running Express to route incoming requests, perform database queries, and return appropriate responses.",
        "RESTful API for creating, reading, updating, and deleting books and authors per user input.",
        "MongoDB using Mongoose.js to create Author and Book schema and models, as well as database queries. Database deployed with MongoDB Atlas.",
        "EJS Embedded Javascript templating to dynamically create HTML files on server side.",
        "Deployed to Heroku",
      ],
      frontEnd: [
        "EJS",
        "HTML5",
        "CSS3",
      ],
      backEnd: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose.js",
      ],
      imageFiles: [
        "images/YourLibrary/YourLibrary-Index.jpg",
        "images/YourLibrary/YourLibrary-Book_New.jpg",
        "images/YourLibrary/YourLibrary-Book_Show.jpg",
        "images/YourLibrary/YourLibrary-Author_New.jpg",
        "images/YourLibrary/YourLibrary-Author_Show.jpg",        
      ],
    },
    links: {
      github: "https://github.com/lpremuda/YourLibrary",
      demo: "https://your-library.herokuapp.com/"
    }
  },
  personalWebsite: {
    hero: {
      title: "LUCAS.PREMUDA Portfolio Website",
      description: "Full-stack React-based, responsive portfolio website with Material UI on front end and Node/Express on back end",
      image: {
        src: "images/react-firebase-log-in.jpg", //FIX
        alt: "react-firebase-log-in.jpg" //FIX
      }
    },
    dialog: {
      projectDescription: [
        "React-based sign-in app. User is able to Sign Up, Log In, Recover Password, Change Username, Change Password, and Sign Out.",
        "Heroku Node.js buildpack starts Express server and initiates create-react-app build command, which creates static files to serve.",
        "Express serves static files and creates route for a contact form submission to initiate a Nodemailer email to be sent.",
        "Nodemailer module using Sendinblue SMTP server to send website owner an email with users' name, email address, and message when the contact form is submitted.",
        "Deployed to Heroku",
      ],
      frontEnd: [
        "React",
        "Material UI",
        "HTML5",
        "CSS3",
      ],
      backEnd: [
        "Node.js",
        "Express.js",
        "Nodemailer"
      ],
      imageFiles: [
        "images/YourLibrary/YourLibrary-Index.jpg",
        "images/YourLibrary/YourLibrary-Book_New.jpg",
        "images/YourLibrary/YourLibrary-Book_Show.jpg",
        "images/YourLibrary/YourLibrary-Author_New.jpg",
        "images/YourLibrary/YourLibrary-Author_Show.jpg",        
      ],
    },
    links: {
      github: "https://github.com/lpremuda/react-firebase-auth-app",
      demo: "https://react-firebase-auth-app.herokuapp.com/login"
    }
  },
} 