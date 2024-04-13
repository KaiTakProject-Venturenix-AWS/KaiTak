import Box from "@mui/material/Box";

import DrawIcon from "@mui/icons-material/Draw";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import modal1 from "../../../pic/modal1.jpg.webp";
import modal2 from "../../../pic/modal2.jpg.webp";
import modal21 from "../../../pic/modal21.jpg.webp";
import modal3 from "../../../pic/modal3.jpg.webp";

const images = [
  {
    url: modal1,
    title: "Sports Avenue",
    width: "70%",
    onclick: 1,
  },
  {
    url: modal2,
    title: "Main Plaza",
    width: "70%",
    onclick: 2,
  },
  {
    url: modal3,
    title: "South Plaza",
    width: "70%",
    onclick: 3,
  },
  {
    url: modal21,
    title: "Main Stadium",
    width: "70%",
    onclick: 3,
  },
];
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      // opacity: 0.15,
      opacity: 0.6, // Reduce opacity to 0.4
      backgroundColor: "rgba(0,0,0) ", // Grey background with opacity
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    //hover 出框
    "& .MuiTypography-root": {
      //  border: "4px solid currentColor",
      opacity: 1,
      color: "white",
    },
  },
}));
const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.black,
}));
const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  // backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function StableDiffusionPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: "#202020" }}
    >
      <Box>
        {/* Left Part */}
        <Grid item width="50%" textAlign="left" p={2}>
          <Typography
            variant="h4"
            gutterBottom
            color={"white"}
            sx={{
              width: "500px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Prompt Your Creative
          </Typography>
          <TextField
            id="filled-basic"
            multiline
            rows={5}
            variant="outlined"
            placeholder="Enter your text here"
            fullWidth
            sx={{
              width: "500px",
              marginBottom: 2,
              backgroundColor: "white"
            }}
            InputProps={{
              inputProps: {
                style: { color: "black" }, // Set placeholder text color to white
              },
            }}
          />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<DrawIcon />}
            sx={{
              width: "500px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Get Creative
          </Button>
        </Grid>
      </Box>
      {/* Right Part */}
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gridTemplateColumns: "repeat(2, 1fr)", // Two columns
          gap: 1, // Gap between items
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Center the content vertically
          // minHeight: '100vh', // Set minimum height to 100% of the viewport height
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              // width: image.width,
              width: "100%", // Each item takes full width of its container
              maxWidth: "400px", // Limit maximum width of each item if needed
            }}
            // onClick={() => handleImageClick(image.onclick)}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  opacity: 0,
                }}
              >
                {image.title}
                {/* <ImageMarked className="MuiImageMarked-root" /> */}
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Grid>
    </Box>
  );
}
