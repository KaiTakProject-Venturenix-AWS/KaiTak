import Box from "@mui/material/Box";

import { Grid } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import modal1 from "../../../pic/modal1.jpg.webp";
import modal2 from "../../../pic/modal2.jpg.webp";
import modal21 from "../../../pic/modal21.jpg.webp";
import modal3 from "../../../pic/modal3.jpg.webp";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

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

export default function StableDiffusionPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: "#202020" }}
    >
      <Grid container spacing={3} >
        {/* <Grid item style={{ width: "500px" }}> */}
        <Grid item xs={6} style={{ display: "flex", justifyContent: "center" }}>
          <LeftComponent />
        </Grid>
        <Grid item xs={6} style={{ display: "flex", justifyContent: "center" }}>
          <RightComponent images={images} />
        </Grid>
      </Grid>
    </Box>
  );
}
