"use client"

import {useState} from "react"
import  styles from "./links.module.css"
import NavLink from "@/compnents/navbar/links//navLink/navLink"

const Links = () => {
    const links = [

        {title:"Homepage",
            path:"/",
        },
        {title:"About",
            path:"/about",
        },
        {title:"Contact",
            path:"/contact",
        },
        {title:"Blog",
            path:"/blog",
        },
    ]

    const [open,set0pen] = useState(false)

    const session = true
    const isAdmin = true
    return (
        <div className={styles.cont}>
            <div className={styles.links}>
           {links.map((link=> (
               <NavLink  item={link} key={link.title}  >{link.title}</NavLink>
            )))}
            {
               session ?(
                   <>
                {isAdmin && 
                    <NavLink item={{ title:"Admin", path:"/admin"}} />}
                    <button className={styles.logout}>Logout</button>
                </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />
                )}
            </div>
            <button className={styles.menuBtn} onClick={()=> set0pen((prev) => !prev)}>Menu</button>
            {
                open && (

                    <div className={styles.mopile}>
                    {links.map((link) => (<NavLink item={link} key={link.title} /> 
                ))}
                </div>
            )}
        </div>
    )
}

export default Links