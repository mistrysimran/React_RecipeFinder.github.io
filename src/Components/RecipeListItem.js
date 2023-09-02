import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardDescription, CardHeader } from "semantic-ui-react";


const RecipeListItem = ({recipe}) => {
  return (
    <Card style={{margin: 'auto'}}>
      <img src={recipe.image_url} alt="thumbnail" style={{height:170}} />
      <Card.Content>
        <CardHeader content={recipe.title} />
        <CardDescription>
            <h4>{recipe.publisher}</h4>
        </CardDescription>
      </Card.Content>

      <CardContent>
        <Button 
            as={Link}
            to={`/recipes/${recipe.recipe_id}`}
            content="Details"
            color="blue"
            size="tiny"
        />
        <Button 
            href={recipe.source_url}
            target="_blank"
            content="Recipe URL"
            color="green"
            size="tiny"
        />
      </CardContent>
    </Card>
  )
}

export default RecipeListItem;
