import React, {useState, useEffct} from "react";
import {Projects, Conteinner, Aside, Li} from './styled'


export default function Project(){

    const [menu, setmenu] = useState('-140px')
    const [menuHover, setmenuHover] = useState('280px')
    const [iframe, setIframe] = useState('https://pepsiplk.netlify.app/')

 
       
 




    return (
        <Projects>
            <section>
                <div onClick={()=>menu ===  '0px' ? setmenu('-140px') : setmenu('0px')}>

                </div>
            </section>
            <Conteinner>
                <Aside menu={menu}>
                    <ul>
                        <Li menuHover={ menu === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://pepsiplk.netlify.app/')}>
                            Pepsi
                        </Li>
                        <Li  menuHover={ menu === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://todolist-phi-pink.vercel.app/')}>
                            Td-List
                        </Li>
                        <Li menuHover={ menu === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://4g4iu1.csb.app/')}>
                            Contador
                        </Li>
                        <Li menuHover={ menu === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://415cut.csb.app/#')}>
                            Area-Login
                        </Li>
                        <Li menuHover={ menu === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://hortifruti-five.vercel.app/')}>
                           Hortfruti
                        </Li>
                        <Li  menuHover={ menu === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://5bcx1g.csb.app/')}>
                           Rick-Morty
                        </Li>
                        <Li  menuHover={ menu === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://manoelfss.github.io/Beat/')}>
                            Beat 
                        </Li>
                        <Li  menuHover={ menu === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://manoelfss.github.io/Project_Portflow/')}>
                            Portflow
                        </Li>
                        <Li  menuHover={ menu === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://manoelfss.github.io/FIST_SITE/')}>
                            Cine-vnw
                        </Li>
                    </ul>
                </Aside>
                <div>
                    <iframe  src={iframe} frameborder="0" allowfullscreen></iframe>
                   
                </div>
            </Conteinner>

        </Projects>
    )
}