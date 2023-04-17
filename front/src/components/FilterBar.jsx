import React from "react";
import {
  useGetCategoriesQuery,
  useGetColorsQuery,
} from "../store/api/productsQuery";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "./SearchBar";

const FilterBar = ({ filters, setFilters, filterQuery }) => {
  const { data: allCategories } = useGetCategoriesQuery();
  const { data: allColors } = useGetColorsQuery();

  return (
    <Box>
      <SearchBar setFilters={setFilters} />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Caracteristicas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {allCategories &&
            allCategories.map((el) => (
              <Button
                key={el._id}
                onClick={() => setFilters(`?category=${el.name}`)}
              >
                {el.name}
              </Button>
            ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Talles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {allCategories &&
            allCategories.map((el) => (
              <Button key={el._id}>{el.category}</Button>
            ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Colores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {allColors &&
            allColors.map((el) => (
              <Button
                key={el._id}
                onClick={() => setFilters(`?color=${el.name}`)}
              >
                {el.name}
              </Button>
            ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterBar;
