import { Button } from "semantic-ui-react";
import Header from "../Components/common/Header";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Header title='Recipe Radar' bgClass='bg-image'>
        <Button
            content='Search Recipes'
            color="primary"
            as={Link} to='/recipes'
            size="big"
        />
      </Header>
    </div>
  )
}

export default Home;
