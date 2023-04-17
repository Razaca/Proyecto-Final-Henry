import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";

const SearchContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  border: "1px solid #c1c0c0",
  margin: 5,
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "12px",
  color: theme.palette.primary.main,
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "12px",
    width: "200px",
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
  },
}));

function SearchBar({ setFilters }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon onClick={() => setFilters(`?name=${searchText}`)} />
      </SearchIconWrapper>
      <SearchInput
        placeholder="Search…"
        value={searchText}
        onChange={handleSearchTextChange}
        inputProps={{ "aria-label": "search" }}
      />
    </SearchContainer>
  );
}

export default SearchBar;
