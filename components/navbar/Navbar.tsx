import Links from './Links/Links';
import Navstyles  from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={Navstyles.container}>
    <div className={Navstyles.logo}>Logo</div>
    <Links/>
    </div>
  )
}

export default Navbar