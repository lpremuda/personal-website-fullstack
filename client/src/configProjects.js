export const configProjects = [
  // React Sign-In
  {
    hero: {
      title: "React Sign-In App with Firebase",
      description: "React-based sign-in app with React Bootstrap on front end and Firebase Authentication API on back end",
      image: {
        src: "images/ReactSignIn/ReactSignIn-SignUp_Successful.jpg",
        alt: "ReactSignIn-SignUp_Successful.jpg"
      },
      backgroundColor: "#fff",
      hideButtons: false,
      hideDemoButton: false
    },
    dialog: {
      projectDescription: [
        "React-based sign-in app. User can Sign Up, Log In, Recover Password, Change Username, Change Password, and Sign Out.",
        "React Bootstrap used to accelerate development to make a simple and concise UI/UX layout.",
        "Firebase Authentication API used to simplify user authentication. Context used to pass user information and Firebase authentication functions. Prevents users that are not signed in from getting to the dashboard page.",
        "Deployed to Heroku using third-party create-react-app buildpack.",
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
        "url(images/ReactSignIn/ReactSignIn-SignUp_Successful.jpg)",
        "url(images/ReactSignIn/ReactSignIn-Login.jpg)",
        "url(images/ReactSignIn/ReactSignIn-Dashboard.jpg)",
        "url(images/ReactSignIn/ReactSignIn-UpdateProfile_Error.jpg)",
        "url(images/ReactSignIn/ReactSignIn-UpdateProfile_Successful.jpg)",
        "url(images/ReactSignIn/ReactSignIn-PasswordReset.jpg)",   
        "url(images/ReactSignIn/ReactSignIn-Login_Error.jpg)",         
      ],
      imageFilesNoURL: [
        "images/ReactSignIn/ReactSignIn-SignUp_Successful.jpg",
        "images/ReactSignIn/ReactSignIn-Login.jpg",
        "images/ReactSignIn/ReactSignIn-Dashboard.jpg",
        "images/ReactSignIn/ReactSignIn-UpdateProfile_Error.jpg",
        "images/ReactSignIn/ReactSignIn-UpdateProfile_Successful.jpg",
        "images/ReactSignIn/ReactSignIn-PasswordReset.jpg",   
        "images/ReactSignIn/ReactSignIn-Login_Error.jpg",             
      ],
      alts: [
        "ReactSignIn-SignUp_Successful.jpg",
        "ReactSignIn-Login.jpg",
        "ReactSignIn-Dashboard.jpg",
        "ReactSignIn-UpdateProfile_Error.jpg",
        "ReactSignIn-UpdateProfile_Successful.jpg",
        "ReactSignIn-PasswordReset.jpg",   
        "ReactSignIn-Login_Error.jpg",             
      ],
      grayCancelBtn: false,
    },
    links: {
      github: "https://github.com/lpremuda/react-firebase-auth-app",
      demo: "https://react-firebase-auth-app.herokuapp.com/login"
    }
  },

  // MEN Library
  {
    hero: {
      title: "Full-Stack MongoDB, Express, and Node Library App",
      description: "MongoDB, Express, and Node working together to build full-stack RESTful following the MVC design pattern",
      image: {
        src: "images/YourLibrary/YourLibrary-Index.jpg",
        alt: "YourLibrary-Index.jpg"
      },
      backgroundColor: "blue",
      hideButtons: false,
      hideDemoButton: false
    },
    dialog: {
      projectDescription: [
        "Full-stack MongoDB, Express, and Node app with EJS templating for rendering views. User can perform CRUD actions on authors and books.",
        "Node running Express to route incoming requests, perform database queries, and return appropriate responses.",
        "RESTful API for creating, reading, updating, and deleting books and authors per user input.",
        "MongoDB using Mongoose.js to create Author and Book schema and models, as well as database queries. Database deployed with MongoDB Atlas.",
        "EJS Embedded Javascript templating to dynamically create HTML files on server side.",
        "Deployed to Heroku using Node.js buildpack.",
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
        "url(images/YourLibrary/YourLibrary-Index.jpg)",
        "url(images/YourLibrary/YourLibrary-Book_New.jpg)",
        "url(images/YourLibrary/YourLibrary-Book_Show.jpg)",
        "url(images/YourLibrary/YourLibrary-Author_New.jpg)",
        "url(images/YourLibrary/YourLibrary-Author_Show.jpg)",        
      ],
      imageFilesNoURL: [
        "images/YourLibrary/YourLibrary-Index.jpg",
        "images/YourLibrary/YourLibrary-Book_New.jpg",
        "images/YourLibrary/YourLibrary-Book_Show.jpg",
        "images/YourLibrary/YourLibrary-Author_New.jpg",
        "images/YourLibrary/YourLibrary-Author_Show.jpg",        
      ],
      alts: [
        "YourLibrary-Index.jpg",
        "YourLibrary-Book_New.jpg",
        "YourLibrary-Book_Show.jpg",
        "YourLibrary-Author_New.jpg",
        "YourLibrary-Author_Show.jpg",        
      ],
      grayCancelBtn: true,
    },
    links: {
      github: "https://github.com/lpremuda/YourLibrary",
      demo: "https://your-library.herokuapp.com/"
    }
  },

  // Personal Website
  {
    hero: {
      title: "LUCAS PREMUDA Portfolio Website",
      description: "Full-stack React-based, responsive portfolio website with Material UI front-end and Node/Express back-end",
      image: {
        src: "images/PersonalWebsite/PersonalWebsite-Hero-image.jpg",
        alt: "PersonalWebsite-Hero-image.jpg"
      },
      backgroundColor: "#fff",
      hideButtons: false,
      hideDemoButton: true,
    },
    dialog: {
      projectDescription: [
        "Full-stack personal portfolio website (front-end intensive with light back-end).",
        "Material UI framework used to accelerate front-end development.",
        "Express app on back-end to both accept contact form POST requests that initiate email transport, as well as serve static files built by create-react-app.",
        "Nodemailer module using Sendinblue SMTP server to send website owner an email with users' name, email address, and message when the contact form is submitted.",
        "Deployed to Heroku using Node.js buildpack. Heroku Node.js buildpack starts Express server and initiates create-react-app build command, which creates static files to serve.",
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
        "url(images/PersonalWebsite/PersonalWebsite-Hero-image.jpg)",
        "url(images/PersonalWebsite/PersonalWebsite-Project1.jpg)",
        "url(images/PersonalWebsite/PersonalWebsite-Resume.jpg)",     
        "url(images/PersonalWebsite/PersonalWebsite-Hero-image.jpg)",
        "url(images/PersonalWebsite/PersonalWebsite-Contact-page.jpg)",
        "url(images/PersonalWebsite/PersonalWebsite-About-page.jpg)",    
        "url(images/PersonalWebsite/PersonalWebsite-Hero-image-mobile.jpg)",
        "url(images/PersonalWebsite/PersonalWebsite-Sidebar.jpg)",  
      ],
      imageFilesNoURL: [
        "images/PersonalWebsite/PersonalWebsite-Hero-image.jpg",
        "images/PersonalWebsite/PersonalWebsite-Project1.jpg",
        "images/PersonalWebsite/PersonalWebsite-Resume.jpg",   
        "images/PersonalWebsite/PersonalWebsite-Hero-image.jpg",
        "images/PersonalWebsite/PersonalWebsite-Contact-page.jpg",
        "images/PersonalWebsite/PersonalWebsite-About-page.jpg",   
        "images/PersonalWebsite/PersonalWebsite-Hero-image-mobile.jpg",
        "images/PersonalWebsite/PersonalWebsite-Sidebar.jpg",         
      ],
      alts: [
        "PersonalWebsite-Hero-image.jpg",
        "PersonalWebsite-Project1.jpg",
        "PersonalWebsite-About-page.jpg", 
        "PersonalWebsite-Resume.jpg",
        "PersonalWebsite-Contact-page.jpg",
        "PersonalWebsite-About-page.jpg",    
        "PersonalWebsite-Hero-image-mobile.jpg",
        "PersonalWebsite-Sidebar.jpg",           
      ],
      grayCancelBtn: false,
    },
    links: {
      github: "https://github.com/lpremuda/personal-website-fullstack",
      demo: "no-demo"
    }
  },

  // More Projects to Come
  {
    hero: {
      title: "More Projects to Come...",
      description: "More projects will be coming soon. Stay tuned!",
      image: {
        src: "images/MoreToCome/under_construction.jpg",
        alt: "under_construction.jpg"
      },
      backgroundColor: "#fff",
      hideButtons: true,
      hideDemoButton: true, // doesn't matter
    },
    dialog: {
      projectDescription: [
        "React-based sign-in app. User is able to Sign Up, Log In, Recover Password, Change Username, Change Password, and Sign Out.",
        "Heroku Node.js buildpack starts Express server and initiates create-react-app build command, which creates static files to serve.",
        "Express serves static files and creates route for a contact form submission to initiate a Nodemailer email to be sent.",
        "Nodemailer module using Sendinblue SMTP server to send website owner an email with users' name, email address, and message when the contact form is submitted.",
        "Deployed to Heroku.",
      ],
      frontEnd: [
        "React",
        "Material UI",
        "HTML5",
        "CSS3",
      ],
      backEnd: [
      ],
      imageFiles: [
        "url(images/MoreToCome/under_construction.jpg)",        
      ],
      imageFilesNoURL: [
        "images/MoreToCome/under_construction.jpg",           
      ],
      alts: [
        "under_construction.jpg",           
      ],
      grayCancelBtn: false,
    },
    links: {
      github: "no-url",
      demo: "no-url"
    }
  },
] 