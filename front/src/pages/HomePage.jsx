import Typography from "@mui/material/Typography";
import Cards from "../components/Cards";
import { useGetProductsQuery } from "../store/api/productsQuery";

const HomePage = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  return (
    <div>
      <Typography
        variant="h1"
        color="initial"
        textAlign="center"
        paddingTop={2}
      >
        Ecommerce de Remeras
      </Typography>
      <Cards products={products} />
    </div>
  );
};

export default HomePage;
