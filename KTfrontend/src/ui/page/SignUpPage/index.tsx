import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../LoginPage/Venturenix_2024.png'
import {useNavigate} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import {createTheme, ThemeProvider} from "@mui/material/styles";

export default function SignUpPage() {
    const navigate = useNavigate();
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${logo})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h5" gutterBottom mb={4}>Sign Up</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Name"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Email" type="email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Password" type="password"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Phone Number" type="tel"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth color="primary">Sign Up</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
