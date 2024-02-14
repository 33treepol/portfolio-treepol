import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// import image
import profile from '../img/profileImage.png'
import office from '../img/office.jpg'

// import logo
import onDesk from '../img/svg logo/who-am-i.svg'
import html5 from '../img/svg logo/icons8-html5.svg'
import CSS3 from '../img/svg logo/icons8-css.svg'
import JS from '../img/svg logo/icons8-javascript.svg'
import NODE from '../img/svg logo/icons8-node-js.svg'
import REACT from '../img/svg logo/icons8-react-native.svg'
import EXPRESS from '../img/svg logo/icons8-express-js.svg'
import MONGODB from '../img/svg logo/mongodb-icon.svg'
import FIGMA from '../img/svg logo/icons8-figma.svg'

import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        ochre: {
            main: '#1D9BF0',
            // light: 'rgba(255, 0, 0, 1)',
            // dark: 'rgba(60, 60, 60, 0.76)',
            // contrastText: 'rgba(255, 255, 255, 1)',
        },
    },
});

function Home2() {

    const logo = ["html5", "CSS3"];

    return (
        <Box sx={{ bgcolor: 'rgb(12, 11, 51)' }}>   {/* rgb(12, 11, 51) , rgba(143, 143, 143, 1)*/}
            <Header />

            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1, bgcolor: '' }}>

                    <Grid container sx={{ p: '50px 0 50px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                        <Grid item xs={12} sm={6} >
                            <Typography variant="h3" sx={{ color: '#eff3f4' }}>Treepol Pintookanok</Typography>
                            <TypingText />
                            <Typography variant="h6" sx={{ color: '#eff3f4' }}>Junior Software Developer Bootcamp Cohort#6 at Generation Thailand who passionate in learning and driven to apply my skills to efficiently address customer needs and elevate the quality of products.</Typography>
                            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'start' }, pt: '40px' }}>
                                <button style={{ border: '3px solid #1D9BF0', color: '#1D9BF0', borderRadius: '50px', height: '50px', width: '150px', backgroundColor: '#0c0b3300', fontWeight: '800', cursor: 'pointer' }}>Download CV</button>
                            </Box>
                            <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, pt: '40px' }}>
                                <ThemeProvider theme={theme}>
                                    <a href="https://www.linkedin.com/in/tpintookanok/" target="_blank"><LinkedInIcon sx={{ p: '0px 20px 0 20px', cursor: 'pointer' }} color="error" fontSize="large" /></a>
                                    <a href="https://github.com/33treepol" target="_blank"><GitHubIcon sx={{ p: '0 20px 0 20px', cursor: 'pointer' }} color="success" fontSize="large" /></a>
                                </ThemeProvider>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'end' } }}>
                            <img src={profile} alt="" width={'66%'} style={{ borderRadius: '1000px', border: '5px solid #1D9BF0' }} />
                        </Grid>
                    </Grid>

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

                            <Typography variant="h3" sx={{ color: 'rgb(29, 155, 240)', fontWeight: '700' }}>Who i am</Typography>
                            <br /><br />
                            
                            <Typography variant="h6" sx={{ color: '#eff3f4' }}>My previous role, I was unexpectedly moved from the Retoucher position to work on the WordPress website editor without any prior coding knowledge which made me realize productivity. After doing it for a while, I had realized that I must learn how to produce websites with good methods and must also resolve problems that occur in the correct way.
                                <br />I decided to get fully study the basics of coding and also continue take course of full-stack web developer in MERN stack with Generation Thailand
                                <br />I intend to create products and solve problems that arise as accurately and accurately as possible
                            </Typography>

                        </Grid>

                    </Grid>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant="h3" sx={{ color: 'rgb(29, 155, 240)', fontWeight: '700', textAlign: 'center' }}>Skills</Typography>

                    <Grid item xs={12} sx={{ p: '50px 0 50px 0', display: 'flex', gap: '70px', flexWrap: 'wrap', justifyContent: {xs: 'center'} }}>
                        {/* <InsertSkill logoText={logo} /> */}

                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={html5} alt="html5" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center' }}>HTML5</p>
                        </Box>


                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={CSS3} alt="css3" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center' }}>CSS3</p>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={JS} alt="js" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center' }}>JavaScript</p>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={NODE} alt="node" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center' }}>Node Js</p>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img className="logoR" src={REACT} alt="react" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center' }}>REACT</p>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={EXPRESS} alt="express" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center' }}>EXPRESS</p>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={MONGODB} alt="mongoDB" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center' }}>Mongo DB</p>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '160px', boxShadow: '0 0 12px rgb(29, 155, 240)', borderRadius: '10px', height: '160px' }}>
                            <img src={FIGMA} alt="figma" width={'80px'} />
                            <br />
                            <p style={{ color: 'white', textAlign: 'center' }}>Figma</p>
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
        <div class="typewriter">
            <h2 style={{ color: 'rgb(29, 155, 240)' }}>Software Developer</h2>
        </div>
    );
}

function Header() {
    return (
        <Box sx={{ p: '0 100px 0 100px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'rgba(0, 0, 0, 0.11)' }}>
            <Box>
                <Button sx={{ fontWeight: '900', fontFamily: 'cursive' }} color="error" variant="text">T.Pintook</Button>
            </Box>

            {/* <Box >
                <Button sx={{ fontWeight: '600', textTransform: 'none' }} variant="text">Home</Button>
                <Button sx={{ fontWeight: '600', textTransform: 'none' }} variant="text">about</Button>
                <Button sx={{ fontWeight: '600', textTransform: 'none' }} variant="text">skill</Button>
                <Button sx={{ fontWeight: '600', textTransform: 'none' }} variant="text">project</Button>
                <Button sx={{ fontWeight: '600', textTransform: 'none' }} variant="text">contact</Button>
            </Box> */}
        </Box>
    );
}

export default Home2;