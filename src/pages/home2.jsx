import { Box, Button, CardMedia, Container, Grid, IconButton, Typography, Drawer, Backdrop } from "@mui/material";
import { Delete } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

// import image
import profile from '../img/profileImage.png'
import office from '../img/office.jpg'

// import logo
import Clang from '../img/svg logo/icons8-c.svg'
import onDesk from '../img/svg logo/who-am-i.svg'
import html5 from '../img/svg logo/icons8-html5.svg'
import CSS3 from '../img/svg logo/icons8-css.svg'
import JS from '../img/svg logo/icons8-javascript.svg'
import NODE from '../img/svg logo/icons8-node-js.svg'
import REACT from '../img/svg logo/icons8-react-native.svg'
import EXPRESS from '../img/svg logo/icons8-express-js.svg'
import MONGODB from '../img/svg logo/mongodb-icon.svg'
import FIGMA from '../img/svg logo/icons8-figma.svg'
import reactP from '../img/reactProject.png'
import colmar from '../img/colmarHTMLCSS.png'
import contactUs from '../img/svg logo/contactsImage.svg'
import chibaProject from '../img/ChibaProject.png'
import RedHatProject from '../img/JavascriptAssessment.png'


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from "react";
const theme = createTheme({
    palette: {
        ochre: {
            main: '#1D9BF0',
            // light: 'rgba(255, 0, 0, 1)',
            // dark: 'rgba(60, 60, 60, 0.76)',
            // contrastText: 'rgba(255, 255, 255, 1)',
        },
        headBtn: { main: 'rgb(29, 155, 240)' },
    },
});

function Home2() {

    const logo = ["html5", "CSS3"];

    return (
        <Box sx={{ bgcolor: 'rgb(12, 11, 51)' }}>   {/* rgb(12, 11, 51) , rgba(143, 143, 143, 1)*/}
            <span id="home"></span>

            <Header />

            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1, bgcolor: '' }}>

                    <Grid container sx={{ p: '50px 0 50px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                        <Grid item xs={12} sm={6} >
                            <Typography variant="h3" sx={{ color: '#eff3f4', pt: {xs: '50px', md: '0px'} }}>Treepol Pintookanok</Typography>
                            <TypingText />
                            <Typography variant="h6" sx={{ color: '#eff3f4' }}>Junior Software Developer Bootcamp Cohort#6 at Generation Thailand who passionate in learning and driven to apply my skills to efficiently address customer needs and elevate the quality of products.</Typography>
                            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'start' }, pt: '40px' }}>
                                <a href="https://drive.google.com/file/d/1HlfkbQsDQ4PpL8tiKWPlmzaNCYURxxTQ/view?usp=sharing" target="_blank"><button className='loadHover'>Download CV</button></a>
                            </Box>
                            <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, pt: '40px' }}>
                                <ThemeProvider theme={theme}>
                                    <a href="https://www.linkedin.com/in/tpintookanok/" target="_blank" ><LinkedInIcon className="iconhover" color="ochre" sx={{ p: '0 20px 0 20px', cursor: 'pointer', fontSize: 40 }}/></a>
                                    <a href="https://github.com/33treepol" target="_blank" ><GitHubIcon className="iconhover" color="ochre" sx={{ p: '0 20px 0 20px', cursor: 'pointer', fontSize: 40 }}/></a>
                                </ThemeProvider>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'end' } }}>
                            <img src={profile} alt="" width={'66%'} style={{ borderRadius: '1000px', border: '5px solid #1D9BF0' }} />
                        </Grid>
                    </Grid>

                    <span id="about"></span>
                    <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: '5px', p: '50px 0 50px 0' }}>

                        <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', bgcolor: 'rgb(29, 155, 240)' }}></Box>
                        <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', bgcolor: 'rgb(29, 155, 240)' }}></Box>
                        <Box sx={{ width: '95%', height: '5px', borderRadius: '10px', bgcolor: 'rgb(29, 155, 240)' }}></Box>
                    </Grid>

                    {/* -------------- Secrion 2 */}
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'start' } }}>
                            <img src={onDesk} alt="on Desk" width={'80%'} style={{ borderRadius: '50px', border: '5px solid #1D9BF0' }} />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography variant="h3" sx={{ color: 'rgb(29, 155, 240)', fontWeight: '700', pt: {xs: '50px', md: '0px'},textAlign: {xs:'center', md: 'left'} }}>About me</Typography>
                            <br /><br />

                            <Typography variant="h6" sx={{ color: '#eff3f4' }}>My previous role, I was unexpectedly moved from the Retoucher position to work on the WordPress website editor without any prior coding knowledge which made me aware of working quality. After doing it for a while, I had realized that I must learn how to produce websites with good methods and must also resolve problems that occur in the correct way.
                                <br />I decided to get fully study the basics of coding and also continue take course of full-stack web developer in MERN stack.
                                <br />I intend to create products and solve problems that arise as accurately and accurately as possible
                            </Typography>

                        </Grid>

                    </Grid>
                    <span id="skill"></span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant="h3" sx={{ color: 'rgb(29, 155, 240)', fontWeight: '700', textAlign: 'center' }}>Skills</Typography>
                    <Grid item xs={12} sx={{ p: '50px 0 50px 0', display: 'flex', gap: '70px', flexWrap: 'wrap', justifyContent: { xs: 'center' } }}>
                        {/* <InsertSkill logoText={logo} /> */}

                        <Box className='skills-box' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={Clang} alt="Clang" width={'70px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }}>C</p>
                        </Box>

                        <Box className='skills-box' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={html5} alt="html5" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }}>HTML5</p>
                        </Box>


                        <Box className='skills-box' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={CSS3} alt="css3" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }}>CSS3</p>
                        </Box>

                        <Box className='skills-box' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={JS} alt="js" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }}>JavaScript</p>
                        </Box>

                        <Box className='skills-box' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={NODE} alt="node" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }}>Node Js</p>
                        </Box>

                        <Box className='skills-box' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img className="logoR" src={REACT} alt="react" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }}>React</p>
                        </Box>

                        <Box className='skills-box' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={EXPRESS} alt="express" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }}>Express</p>
                        </Box>

                        <Box className='skills-box' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={MONGODB} alt="mongoDB" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }}>Mongo DB</p>
                        </Box>

                        <Box className='skills-box' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={FIGMA} alt="figma" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center', fontFamily: 'sans-serif' }}>Figma</p>
                        </Box>

                    </Grid>

                    <span id="project"></span>
                    <Grid item xs={12} sx={{ p: '50px 0 0px 0', display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center' } }}>
                        <Typography variant="h3" sx={{ color: 'rgb(29, 155, 240)', fontWeight: '700' }}>Projects</Typography>
                        <Projects />
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: '5px', p: '50px 0 0px 0' }}>
                        <Box sx={{ width: '95%', height: '5px', borderRadius: '10px', bgcolor: 'rgb(29, 155, 240)' }}></Box>
                        <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', bgcolor: 'rgb(29, 155, 240)' }}></Box>
                        <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', bgcolor: 'rgb(29, 155, 240)' }}></Box>
                    </Grid>

                    <span id="contact"></span>
                    <Grid item xs={12} sx={{
                        p: '100px 0 100px 0', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', justifyContent: { xs: 'center' }
                    }}>

                        <Typography variant="h3" sx={{ color: 'rgb(29, 155, 240)', fontWeight: '700' }}>Contact</Typography>



                        <Box sx={{ textAlign: { xs: 'center', sm: 'center' }, pt: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <ThemeProvider theme={theme}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                                    <a target="_blank" className="iconhover"><PhoneIcon color="ochre" fontSize="large" /></a>
                                    <a target="_blank" style={{ textDecoration: 'none' }}>

                                        <Typography sx={{ color: 'white', fontSize: '30px' }}>086-568-2056</Typography>
                                    </a>

                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                                    <a href="mailto:t.pintook@gmail.com" target="_blank" className="iconhover"><EmailIcon sx={{ cursor: 'pointer' }} color="ochre" fontSize="large" /></a>
                                    <a href="mailto:t.pintook@gmail.com" target="_blank" style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ color: 'white', fontSize: '30px' }}>t.pintook@gmail.com</Typography>
                                    </a>

                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                                    <a href="https://www.linkedin.com/in/tpintookanok/" target="_blank" className="iconhover"><LinkedInIcon sx={{ cursor: 'pointer' }} color="ochre" fontSize="large" /></a>
                                    <a href="https://www.linkedin.com/in/tpintookanok/" target="_blank" style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ color: 'white', fontSize: '30px' }}>LinkedIn</Typography>
                                    </a>

                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                                    <a href="https://github.com/33treepol" target="_blank" className="iconhover"><GitHubIcon sx={{ cursor: 'pointer' }} color="ochre" fontSize="large" /></a>
                                    <a href="https://github.com/33treepol" target="_blank" style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ color: 'white', fontSize: '30px' }}>GitHub</Typography>
                                    </a>
                                </Box>

                            </ThemeProvider>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

// function InsertSkill({ logoText }) {
//     return (
//         <>
//             {logoText.map((element, index) => (
//                 <h1 key={index}>{element}</h1>
//                 <img src={html5} alt="html5" width={'80px'} />
//                 <p style={{color: 'white'}}>HTML5</p>

//             ))}
//         </>
//     );
// }

function TypingText() {
    return (
        <div className="typewriter">
            <h2 style={{ color: 'rgb(29, 155, 240)' }}>Software Developer</h2>
        </div>
    );
}

function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    p: '0 100px 0 100px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bgcolor: 'rgb(12, 11, 51)',
                    position: 'sticky', // Make the header sticky
                    top: 0, // Stick to the top of the viewport
                    zIndex: 1000, // Set a high z-index to ensure it's above other elements
                }}
            >
                <Box>
                    <Button
                        href="#home"
                        sx={{
                            fontWeight: '900',
                            fontFamily: 'cursive',
                            fontSize: '30px',
                            background: 'linear-gradient(90deg, rgba(202,199,255,1) 0%, rgba(5,27,80,1) 0%, rgba(118,9,121,1) 0%, rgba(0,155,255,1) 83%)',
                            WebkitBackgroundClip: 'text', // For Webkit browsers to apply gradient to text
                            color: 'transparent', // Make text transparent to reveal the gradient
                            border: 'none', // Remove border
                            cursor: 'pointer', // Set cursor to pointer
                        }}
                        variant="text"

                    >
                        T.Pintook
                    </Button>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex', gap: '40px' } }}>
                    {/* Display these buttons for medium and larger screens */}
                    <Button href="#home" sx={{ fontWeight: '600', textTransform: 'none', fontSize: '22px' }} color="ochre" variant="text">
                        Home
                    </Button>
                    <Button href="#about" sx={{ fontWeight: '600', textTransform: 'none', fontSize: '22px' }} color="ochre" variant="text">
                        About
                    </Button>
                    <Button href="#skill" sx={{ fontWeight: '600', textTransform: 'none', fontSize: '22px' }} color="ochre" variant="text">
                        Skill
                    </Button>
                    <Button href="#project" sx={{ fontWeight: '600', textTransform: 'none', fontSize: '22px' }} color="ochre" variant="text">
                        Project
                    </Button>
                    <Button href="#contact" sx={{ fontWeight: '600', textTransform: 'none', fontSize: '22px' }} color="ochre" variant="text">
                        Contact
                    </Button>
                </Box>



                {/* Hamburger menu for small screens */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton onClick={toggleDrawer} color="ochre">
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} BackdropComponent={Backdrop}
                        sx={{
                            '& .MuiDrawer-paper': {
                                backgroundColor: '#15202b', // Set the background color to red
                            },
                        }}
                    >
                        <Box sx={{ width: 200, display: 'flex', flexDirection: 'column' }}>
                            <Button href="#home" sx={{ fontWeight: '600', textTransform: 'none', fontSize: '40px' }} variant="text">
                                Home
                            </Button>
                            <Button href="#about" sx={{ fontWeight: '600', textTransform: 'none', fontSize: '40px' }} variant="text">
                                About
                            </Button>
                            <Button href="#skill" sx={{ fontWeight: '600', textTransform: 'none', fontSize: '40px' }} variant="text">
                                Skill
                            </Button>
                            <Button href="#project" sx={{ fontWeight: '600', textTransform: 'none', fontSize: '40px' }} variant="text">
                                Project
                            </Button>
                            <Button href="#contact" sx={{ fontWeight: '600', textTransform: 'none', fontSize: '40px' }} variant="text">
                                Contact
                            </Button>
                        </Box>
                    </Drawer>
                </Box>
            </Box>
        </ThemeProvider>
    );
}



function Projects() {
    return (
        <>
            <Grid container item sx={{ p: { xs: '50px 0 50px 0', md: '0px 0 50px 0' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', p: '0px' }}>
                    <CardMedia
                        component="img"
                        height="300px"
                        image={chibaProject}
                        alt="project1"
                        sx={{ borderRadius: '8px' }}
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: '0px', md: '50px' } }}>
                    <Typography variant="h4" sx={{ p: { xs: '20px 0 0px 0', md: '0 0px 30px 0px' }, color: 'rgba(169, 255, 57, 1)' }}>PlayHub Project</Typography>
                    <Typography sx={{ fontSize: '20px', p: { xs: '10px 0 10px 0', md: '0 0px 30px 50px' }, color: 'white' }}>PlayHub project is a web application for exercising. You can log in to booking sport cord, record your exercise. The app will calculate calories</Typography>

                    <div style={{ display: 'flex', gap: '50px' }}>
                        <a href="https://chiba-matcha-front-end.vercel.app/" target="_blank"><button className='loadHover2'>VIEW</button></a>
                        <a href="https://github.com/33treepol/chiba-matcha-front-end" target="_blank"><button className='loadHover2'>GIT</button></a>
                    </div>

                </Grid>
            </Grid>

            <Grid container item sx={{ p: { xs: '50px 0 50px 0', md: '0px 0 50px 0' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', p: '0px' }}>
                    <CardMedia
                        component="img"
                        height="300px"
                        image={RedHatProject}
                        alt="project1"
                        sx={{ borderRadius: '8px' }}
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: '0px', md: '50px' } }}>
                    <Typography variant="h4" sx={{ p: { xs: '20px 0 0px 0', md: '0 0px 30px 0px' }, color: 'rgba(169, 255, 57, 1)' }}>Find a Hat Project</Typography>
                    <Typography sx={{ fontSize: '20px', p: { xs: '10px 0 10px 0', md: '0 0px 30px 50px' }, color: 'white' }}>Find a Hat is JavaScript mini-game that I created on Replit. Play as a guy in search of red hat while evading cactus. Use 'u,' 'd,' 'r' and 'l' to move, and win by reaching the red hat.</Typography>

                    <a href="https://replit.com/@lertjungbay/33-treepol-jsd-find-your-hat" target="_blank"><button className='loadHover2'>VIEW</button></a>

                </Grid>
            </Grid>

            <Grid container item sx={{ p: { xs: '50px 0 50px 0', md: '0px 0 50px 0' }, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', p: '0px' }}>
                    <CardMedia
                        component="img"
                        height="300px"
                        image={reactP}
                        alt="project1"
                        sx={{ borderRadius: '8px' }}
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: '0px', md: '50px' } }}>
                    <Typography variant="h4" sx={{ p: { xs: '20px 0 0px 0', md: '0 0px 30px 0px' }, color: 'rgba(169, 255, 57, 1)' }}>React CRUD</Typography>
                    <Typography sx={{ fontSize: '20px', p: { xs: '10px 0 10px 0', md: '0 0px 30px 50px' }, color: 'white' }}>React project using JavaScript and React hooks to send data to a backend database. The website allows administrators to create and delete data on the admin page, and users can view this data on the user page.</Typography>

                    <div style={{ display: 'flex', gap: '50px' }}>
                        <a href="https://career-changer-react-assessment-eight.vercel.app/" target="_blank"><button className='loadHover2'>VIEW</button></a>
                        <a href="https://github.com/33treepol/career-changer-react-assessment" target="_blank"><button className='loadHover2'>GIT</button></a>
                    </div>

                </Grid>
            </Grid>

            <Grid container item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', p: '0px' }}>
                    <CardMedia
                        component="img"
                        height="300px"
                        image={colmar}
                        alt="project1"
                        sx={{ borderRadius: '8px' }}
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: '0px', md: '50px' } }}>
                    <Typography variant="h4" sx={{ p: { xs: '20px 0 0px 0', md: '0 0px 30px 0px' }, color: 'rgba(169, 255, 57, 1)' }}>Colmar Academy</Typography>
                    <Typography sx={{ fontSize: '20px', p: { xs: '10px 0 10px', md: '0 0px 30px 50px' }, color: 'white' }}>A static web page was builded with only HTML and CSS. Build as exercise for vanilla coding.</Typography>
                    <div style={{ display: 'flex', gap: '50px' }}>
                        <a href="https://33-goh-colmar.vercel.app/" target="_blank"><button className='loadHover2'>VIEW</button></a>
                        <a href="https://github.com/33treepol/33-goh-colmar" target="_blank"><button className='loadHover2'>GIT</button></a>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}



export default Home2;