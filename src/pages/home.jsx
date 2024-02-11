import { AppBar, Box, Button, CardMedia, Grid, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import React, { useState, useEffect } from 'react';


// import image
import lhtml from '../img/html5.svg'
import lcss from '../img/css3.svg'
import ljs from '../img/javascript.svg'
import lreact from '../img/react.svg'
import lnode from '../img/node-js.svg'
import lexpress from '../img/express-light.svg'
import lmongo from '../img/mongodb.svg'
import colmar from '../img/colmarHTMLCSS.png'
import reactP from '../img/reactProject.png'

// import image skill section
import faceFront from '../img/front.png'
import myhand from '../img/hand.png'


function App() {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backgroundPositionY = `calc(50% - ${scrollPosition * 0.5}px)`;

    return (
        <Box sx={{ bgcolor: 'rgba(143, 143, 143, 1)' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button sx={{ color: 'rgba(169, 255, 57, 1)', fontWeight: '900' }}>t.pintook</Button>
                        </Typography>
                        <Button href="" className="nav-btn" sx={{ color: 'rgba(169, 255, 57, 1)', fontWeight: '600' }}>Home</Button>
                        <Button href="" className="nav-btn" sx={{ color: 'rgba(169, 255, 57, 1)', fontWeight: '600' }}>About me</Button>
                        <Button href="" className="nav-btn" sx={{ color: 'rgba(169, 255, 57, 1)', fontWeight: '600' }}>Skills</Button>
                        <Button href="" className="nav-btn" sx={{ color: 'rgba(169, 255, 57, 1)', fontWeight: '600' }}>Projects</Button>
                    </Toolbar>
                </AppBar>
            </Box>


            <Box sx={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', gap: '50px', p: '50px 0 50px 0' }}>
                <Typography variant="h2" sx={{ width: '100%', textAlign: 'center', color: 'rgba(0, 252, 255, 1)' }} >Hello, <span style={{ color: 'white' }}>I'm </span><span className="treepol">Treepol Pintookanok</span></Typography>
                <Typography variant="h5" sx={{ width: '60%', textAlign: 'center' }}>
                    Junior Software Developer Bootcamp Cohort#6 at Generation Thailand who passionate in driven to apply my skills to efficiently address customer needs and elevate the quality of products.
                </Typography>
            </Box>
            <Box sx={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', gap: '20px', bgcolor: 'rgba(57, 57, 57, 1) ' }}>
                <Typography variant="h4" sx={{ width: '100%', textAlign: 'center', pt: '50px', fontWeight: '600', color: 'rgba(157, 255, 0, 1)' }} >About Me</Typography>
                <Typography variant="h5" sx={{ width: '60%', textAlign: 'left', pb: '50px' }}>
                    My previous role, I was unexpectedly moved from the Retoucher position to work on the WordPress website editor without any prior coding knowledge which made me realize productivity.<br />
                    I realized that I must learn how to produce websites with good methods and must also resolve problems that occur in the correct way.<br />
                    I decided get fully study the basics of coding and also continue take course of full-stack web developer in MERN stack with Generation Thailand
                    I intend to create products and solve problems that arise as accurately and accurately as possible.
                </Typography>
            </Box>
            <Box className='sectionSkills' sx={{
                height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', gap: '20px',
                // backgroundImage: `url(${faceFront})`,
                // backgroundRepeat: 'no-repeat',
                // backgroundPositionX: 'center',
                // backgroundPositionY: backgroundPositionY,
                // backgroundSize: '300px',

            }}>
                <Typography variant="h4" sx={{ width: '100%', textAlign: 'center', pt: '50px', fontWeight: '600', color: 'rgba(0, 252, 255, 1)' }} >Skills</Typography>
                <Box sx={{ display: 'flex', gap: '50px', pb: '50px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <img src={lhtml} alt="html" width='100px' />
                    <img src={lcss} alt="css" width='100px' />
                    <img src={ljs} alt="js" width='100px' />
                    <img src={lnode} alt="express" width='100px' />
                    <img className="logoR" src={lreact} alt="react" width='100px' />
                    <img src={lexpress} alt="mongodb" width='100px' />
                    <img src={lmongo} alt="mongodb" width='100px' />

                </Box>
                {/* <Box sx={{
                    textAlign: 'center',
                }}>
                    <img src={myhand} alt="hand" width={'30%'} style={{ margin: '-4px' }} />
                </Box> */}
            </Box>




            <Box>
                <Grid container sx={{ height: 'auto', color: 'white', bgcolor: 'rgba(57, 57, 57, 1)', p: '50px 0 0px 0' }}>
                    <Grid item xs={12} >
                        <Typography variant="h2" sx={{ textAlign: 'center', color: 'rgba(169, 255, 57, 1)' }}>Projects</Typography>
                    </Grid>

                    <Grid container item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', p: '50px' }}>
                            <CardMedia
                                component="img"
                                height="300px"
                                image={reactP}
                                alt="project1"
                                sx={{ borderRadius: '8px' }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: '0px', md: '50px' } }}>
                            <Typography variant="h4" sx={{ p: '0 0px 30px 0px', color: 'rgba(169, 255, 57, 1)' }}>React CRUD</Typography>
                            <Typography sx={{ fontSize: '20px', p: '0 50px 30px 50px', color: 'white' }}>React project using JavaScript and React hooks to send data to a backend database. The website allows administrators to create and delete data on the admin page, and users can view this data on the user page.</Typography>
                            <Button variant="contained" color="error" target="_blank" href="https://career-changer-react-assessment-eight.vercel.app/">View</Button>
                        </Grid>
                    </Grid>

                    <Grid container item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', p: '50px' }}>
                            <CardMedia
                                component="img"
                                height="300px"
                                image={colmar}
                                alt="project1"
                                sx={{ borderRadius: '8px' }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: '0px', md: '50px' } }}>
                            <Typography variant="h4" sx={{ p: '0 0px 30px 0px', color: 'rgba(169, 255, 57, 1)' }}>Colmar Academy</Typography>
                            <Typography sx={{ fontSize: '20px', p: '0 50px 30px 50px', color: 'white' }}>A static web page was builded with only HTML and CSS. Build as exercise for vanilla coding.</Typography>
                            <Button sx={{mb: '50px'}} variant="contained" color="error" target="_blank" href="https://33-goh-colmar.vercel.app/">View</Button>
                        </Grid>
                    </Grid>

                </Grid>

            </Box>

            <Box sx={{ p: '30px 0 30px 0' }}>
                <Box sx={{ maxWidth: '250px', bgcolor: 'white', height: 'auto', m: '0 auto 0 auto', borderRadius: '16px', p: '30px 0 30px 0' }}>

                    <Typography variant="h4" sx={{ textAlign: 'center', pb: '30px' }}>Contact</Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', pb: '30px' }}>You can find me here</Typography>
                    <Box sx={{textAlign: 'center'}}>
                        <LinkedInIcon href='https://www.linkedin.com/in/tpintookanok/' sx={{p: '0 20px 0 20px', cursor: 'pointer'}} fontSize="large" />
                        <GitHubIcon href='https://github.com/33treepol' sx={{p: '0 20px 0 20px', cursor: 'pointer'}} fontSize="large" />
                    </Box>
                </Box>

            </Box>

        </Box>
    );
}

export default App;