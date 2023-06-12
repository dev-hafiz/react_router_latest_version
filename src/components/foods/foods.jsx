import { Container, Grid } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Food from "../food/food";

const Foods = () => {
  const foods = useLoaderData();
  const foodsBasket = foods.categories;
  return (
    <Container>
      <Grid sx={{ marginTop: "30px" }} container spacing={2}>
        {foodsBasket.map((food) => (
          <Food key={food.idCategory} food={food} />
        ))}
      </Grid>
    </Container>
  );
};

export default Foods;
