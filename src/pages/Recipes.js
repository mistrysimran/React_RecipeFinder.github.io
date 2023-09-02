import { useEffect, useState } from "react";
import RecipeList from "../Components/RecipeList";
import Search from "../Components/Search";
import { getRecipes } from "../services/api";
import { Container } from "semantic-ui-react";

const Recipes = () => {

    const [searchQuery, setSearchQuery] = useState('pizza');
    const [recipes, setRecipes] = useState([]);

    const getSearchResult = async () => {
        let result = await getRecipes(searchQuery);
        if (result && result.recipes) {
            setRecipes(result.recipes);
        }

    }

    useEffect(() => {
        getSearchResult();
    }, [searchQuery]);

    return (
        <Container className="recipes">
            <Search setSearchQuery={setSearchQuery}/>
            <RecipeList recipes={recipes} searchQuery={searchQuery} />
        </Container>
    )
}

export default Recipes;