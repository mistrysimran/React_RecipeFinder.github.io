import { useState } from "react";
import { Form, Grid, Input } from "semantic-ui-react";

const Search = ({setSearchQuery}) => {

    const [value, setValue] = useState("");

    const onFormSubmit = () => {
        setSearchQuery(value);
    }

    return (
        <Grid columns={1} textAlign="center" className="search-box">
            <Grid.Column>
                <h2 className="search-heading">Search Recipes with <span style={{ color: '#2185d0' }}>Recipe Radar</span></h2>
                {/* <h4>Input items separated by comma</h4> */}
                <Form onSubmit={onFormSubmit}>
                    <Input
                        className="inp"
                        placeholder="pumpkin"
                        action={{ icon: 'search', color: 'blue' }}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Search;