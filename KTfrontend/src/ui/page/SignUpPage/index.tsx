import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../LoginPage/Logo.png'
import {useNavigate} from "react-router-dom";

export default function SignUpPage() {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#fff' }}>
            <Box sx={{ width: '50%', p: 4 }}>
                <img src={logo} alt="School Brand" style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Box sx={{ width: '50%', p: 4 }}>
                <Typography variant="h5" gutterBottom mb={4}>Sign Up</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Name" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" type="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Password" type="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Phone Number" type="tel" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" fullWidth color="primary">Sign Up</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
