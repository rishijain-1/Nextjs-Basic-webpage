import Link from "next/link";
import LinkStyle from "./links.module.css"
import NAvlink from "./Navlink/NAvlink";
const Links =()=>{
    const links = [
        {
            title: 'Home',
            path:'/'
        },
        {
            title: 'About',
            path:'/about',
        },
        {
            title: 'Contact',
            path:'/contact',
        },
    ];
    return(
        <div className={LinkStyle.links}>
            {links.map((link => (
                <NAvlink item={link} key={link.title} />
            )))}
       
        </div>
    );
}

export default Links