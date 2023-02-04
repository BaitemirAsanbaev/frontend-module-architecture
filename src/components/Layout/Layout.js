import { Nav } from "../../modules/Nav"
import { Footer } from "../../modules/Footer"
import Drawer from "../../modules/Nav/components/Drawer/Drawer";
import { useState } from "react";
import Backdrop from "../../modules/Nav/components/Backdrop/Backdrop";

const Layout = ({ children }) => {
  const [hidden, setHidden] = useState(true)
  return (<>
    <Nav show={()=>setHidden(false)}/>
    <Drawer hidden={hidden}/>
    {hidden ? null : <Backdrop hide={()=>setHidden(true)}/>}
    {children}
    <Footer />
  </>);
}

export default Layout;