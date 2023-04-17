import React from "react";
import { Button, Typography } from "@mui/material";
import Circle from "@mui/icons-material/Circle";

const CheckboxGroup = ({ values, setter, getter, title }) => {
  function handlerCategories(category) {
    if (getter.includes(category)) {
      setter(getter.filter((el) => el !== category));
    } else {
      setter([...getter, category]);
    }
  }

  return (
    <div>
      <Typography>{title}</Typography>
      {values &&
        values.map((el) => (
          <Button
            sx={{ m: 0.5 }}
            variant={getter.includes(el.name) ? "outlined" : null}
            key={el._id}
            onClick={() => handlerCategories(el.name)}
            endIcon={
              el.code ? (
                <Circle
                  sx={{
                    color: el.code,
                    border: "1px solid grey",
                    borderRadius: "50%",
                  }}
                />
              ) : null
            }
          >
            {el.name}
          </Button>
        ))}
    </div>
  );
};

export default CheckboxGroup;
