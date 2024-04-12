import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import logo from '../LoginPage/Logo.png'

export default function StableDiffusionPage() {
    return (
            <Box display="flex" alignItems="center" height="100vh">
                {/* Left Part */}
                <Box width="50%" textAlign="left" p={2}>
                    <Typography variant="h3" gutterBottom>
                        Input something
                    </Typography>
                    <TextField
                        multiline
                        rows={10}
                        variant="outlined"
                        placeholder="Enter your text here"
                        fullWidth

                    />
                </Box>

                {/* Right Part */}
                <Box width="50%" p={2} style={{height: "80vh"}}>
                    <ImageList cols={2} rowHeight={400}>
                        <ImageListItem>
                            {/* Your first image */}
                            <img src={logo} alt="Image 1"/>
                        </ImageListItem>
                        <ImageListItem>
                            {/* Your second image */}
                            <img src={logo} alt="Image 2"/>
                        </ImageListItem>
                        <ImageListItem>
                            {/* Your third image */}
                            <img src={logo} alt="Image 3"/>
                        </ImageListItem>
                        <ImageListItem>
                            {/* Your fourth image */}
                            <img src={logo} alt="Image 4"/>
                        </ImageListItem>
                    </ImageList>
                </Box>
            </Box>
    );
}