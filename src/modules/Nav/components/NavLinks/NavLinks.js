import { NavLink } from "react-router-dom";
import classes from "./NavLinks.module.scss"
const NavLinks = ({drawer}) => {
  return (<ul className={drawer ? classes.DrawerLinks : classes.NavLinks}>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/products'>Products</NavLink></li>
  </ul>);
}

export default NavLinks;