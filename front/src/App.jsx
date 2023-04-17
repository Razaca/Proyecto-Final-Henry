import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
/* pages */
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ProductsPage from "./pages/ProducstPage";
import AdminPage from "./pages/AdminPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container sx={{ mt: 10 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
