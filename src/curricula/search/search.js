import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../public/Bit.png";
import SearchIcon from "@mui/icons-material/Search";
import colors from "../../utils/colors.js";

const curriculaTitles = [
  "Curriculum 1-&",
  "Curriculum 2-&",
  "Curriculum 3&",
  "Curriculum 4",
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredCards = curriculaTitles
    .filter((title) => title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((curriculaTitle) => (
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={logo}
            alt="logo"
          ></CardMedia>
          <CardContent>{curriculaTitle}</CardContent>
        </Card>
      </Grid>
    ));

  let searchResult =
    filteredCards.length > 0 ? (
      filteredCards
    ) : (
      <Grid
        item
        xs={12}
        style={{
          textAlign: "center",
          padding: "4rem",
        }}
      >
        No results found.
      </Grid>
    );

  return (
    <div>
      <Card
        style={{
          marginLeft: "4rem",
          marginRight: "4rem",
          padding: "2rem",
          backgroundColor: colors.secondary,
        }}
      >
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Search for Curricula:
        </Typography>
        <CardContent>
          <TextField
            id="outlined-start-adornment"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            style={{
              backgroundColor: "white",
              //   width: "50%",
            }}
          />
        </CardContent>
      </Card>

      <Grid container spacing={6} style={{ padding: "4rem" }}>
        {searchResult}
      </Grid>
    </div>
  );
};

export default Search;
