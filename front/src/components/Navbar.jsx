import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
  background: "linear-gradient(45deg, #120f79 30%, #135f7d 90%)",
  boxShadow: "none",
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  cursor: "pointer",
});

const StyledButton = styled(Button)({
  color: "white",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#41aee5",
  },
});

const StyledIconButton = styled(IconButton)({
  color: "white",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#41aee5",
  },
});

function Navbar() {
  return (
    <StyledAppBar>
      <Toolbar>
        <StyledTypography variant="h6">Ecommerce de Remeras</StyledTypography>
        <StyledButton>
          <Link to="/">Inicio</Link>
        </StyledButton>
        <StyledButton>
          <Link to="/product">Remeras</Link>
        </StyledButton>
        <StyledButton>
          <Link to="/about">Contacto</Link>
        </StyledButton>
        <StyledIconButton size="large" edge="end" title="cuenta de usuario">
          <AccountCircleIcon />
        </StyledIconButton>
        <StyledIconButton size="large" edge="end" title="carrito de compras">
          <ShoppingCartIcon />
        </StyledIconButton>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
