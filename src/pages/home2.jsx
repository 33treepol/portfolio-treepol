import { Box, Button, Grid, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

// import image
import profile from '../img/profileImage.png'
import office from '../img/office.jpg'


function Home2() {
    return (
        <Box>
            <Header />

            <Grid container sx={{ maxWidth: '70%', m: '0 auto 0 auto', pt: '60px' }}>

                <Grid item xs={12} lg={6} sx={{width: '50%'}}>
                    <img src={profile} alt="myprofile" style={{ borderRadius: '16px' }} />
                </Grid>
                <Grid item xs={12} lg={6} sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', width: '50%' }}>
                    <Typography variant="h1">Software-Developer</Typography>
                    <Typography variant="subtitle1">Hi, I am “Kath” or “Sukanda Saeieo.”Junior Software Developer bootcamp cohort5 at Generation Thailand who passionate in coding and want to expand knowledge to the next level</Typography>
                    <Button sx={{ maxWidth: '50%' }} variant="outlined" endIcon={<Delete />}>
                        Download CV
                    </Button>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Button variant="text">#About</Button>
                    <Box sx={{display: 'flex', flexGrow: '1'}}>
                        <Typography>Adaptable professional with a proven history of excellence in customer service, administrative, and secretary roles, currently enrolled in a rigorous software development bootcamp. Fusing my customer-centric mindset with emerging technical skills, I aspire to secure a software developer position. Eager to merge problem-solving prowess, meticulous organization, and a collaborative demeanor to craft innovative and impactful solutions as part of a dynamic development team</Typography>
                        <img src={office} alt="office" style={{ borderRadius: '16px' }} />
                    </Box>
                </Grid>

            </Grid>

        </Box>
    );
}

function Header() {
    return (
        <Box sx={{ p: '0 100px 0 100px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'rgba(0, 0, 0, 0.11)' }}>
            <Box>
                <Button sx={{ fontWeight: '900' }} color="error" variant="text">T.Pintook</Button>
            </Box>

            <Box >
                <Button sx={{ fontWeight: '600', textTransform: 'none' }} variant="text">Home</Button>
                <Button sx={{ fontWeight: '600' }} variant="text">about</Button>
                <Button sx={{ fontWeight: '600' }} variant="text">skill</Button>
                <Button sx={{ fontWeight: '600' }} variant="text">project</Button>
                <Button sx={{ fontWeight: '600' }} variant="text">contact</Button>
            </Box>
        </Box>
    );
}

export default Home2;