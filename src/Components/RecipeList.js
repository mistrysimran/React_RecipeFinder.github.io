import { Container, Grid, Header } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({recipes, searchQuery}) => {
  return (
    <Container className="recipe-list">
      <Header 
        size="huge"
        content={`RECIPE LIST FOR ${searchQuery}`}
        textAlign="center"
      />

      {/* <Grid columns={4} doubling stackable centered> */}
      <Grid centered>
        {
            recipes && recipes.map(recipe => (
                <Grid.Column computer={4} tablet={8} mobile={13}>
                {/* <Grid.Column> */}
                    <RecipeListItem recipe={recipe}/>
                </Grid.Column>
            ))
        }
      </Grid>
    </Container>
  )
}

export default RecipeList;
