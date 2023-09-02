import { Menu } from "semantic-ui-react";
import { logo } from "../../Constants/constant";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <Menu borderless size="huge" fixed="top">
            <Menu.Item as={Link} to='/'>
                <img src={logo} alt="logo" className="logo-img" />
                <span className="logo-name">Recipe Radar</span>
            </Menu.Item>
            <Menu.Item name="Home" as={Link} to='/' />
            <Menu.Item name="Recipes" as={Link} to='/recipes' />
        </Menu>
    )
}

export default Navbar;