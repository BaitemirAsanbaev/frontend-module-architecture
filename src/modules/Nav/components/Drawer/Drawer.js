import Logo from "../../../../components/UI/Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import classes from "./Drawer.module.scss";
const Drawer = ({hidden}) => {
  return ( <div className={classes.Drawer} style={hidden ? {transform: 'translateX(1000px)'}: {}}>
    <Logo/>
    <NavLinks drawer/>
  </div> );
}
 
export default Drawer;