import Logo from "../../../components/UI/Logo/Logo";
import Burger from "./Burger/Burger";
import classes from './Nav.module.scss';
import NavLinks from "./NavLinks/NavLinks";

export const Nav = ({show}) => {
  return ( <nav className={classes.Nav}>
    <Logo/>
    <NavLinks/>
    <Burger show={show}/>
  </nav> );
}
 