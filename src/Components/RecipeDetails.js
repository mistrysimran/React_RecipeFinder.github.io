import { useEffect, useState } from "react";
import { getRecipe } from "../services/api";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, GridColumn, Header, Image, Segment, SegmentGroup } from "semantic-ui-react";


const RecipeDetails = () => {

    const [recipe, setRecipe] = useState({});

    const { recipeId } = useParams();

    useEffect(() =>{
        const getData = async () => {
            let result = await getRecipe(recipeId);
            if(result && result.recipe)
            {
                setRecipe(result.recipe);
            }
        }
        getData();
    }, [])

    return (
        Object.keys(recipe).length > 0 ?
        <Grid container stackable columns={2} className="details" >
            <GridColumn>
                <Button 
                    as={Link}
                    to={'/recipes'}
                    content='Back To Recipe'
                    color="yellow"
                    style = {{marginBottom:40}}
                />
                <Image src={recipe.image_url} alt='thumbnail' />
            </GridColumn>

            <GridColumn>
                <Header size="medium">{recipe.title}</Header>
                <p>Provided By:  {recipe.publisher}</p>
                <Button 
                    href={recipe.publisher_url}
                    target="_blank"
                    content='Publisher webpage'
                    color="blue"
                />
                <Button 
                    href={recipe.source_url}
                    target="_blank"
                    content='Recipe URL'
                    color="green"
                />
                <Header size="large" content='Ingredients' />

                <SegmentGroup>
                    {
                        recipe && recipe.ingredients.map(data =>(
                            <Segment>
                                <h5>{data}</h5>
                            </Segment>
                        ))
                    }
                </SegmentGroup>
            </GridColumn>
        </Grid> : null
    )
}

export default RecipeDetails;
