import React, {useState, useEffct} from "react";
import {Projects,Conteinner_Menu, Menu, Li, } from './styled'


export default function Project(){

    const [menuLeft, setMenuLeft] = useState('-140px')
    const [menuHover, setmenuHover] = useState('280px')
    const [iframe, setIframe] = useState('https://pepsiplk.netlify.app/')

    return (
        <Projects>
            <section>
                <div onClick={()=>menuLeft ===  '0px' ? setMenuLeft('-140px') : setMenuLeft('0px')}>

                </div>
            </section>
            <Conteinner_Menu>
                <Menu menuLeft={menuLeft}>
                    <ul>
                        <Li menuHover={ menuLeft === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://pepsiplk.netlify.app/')}>
                            Pepsi
                        </Li>
                        <Li  menuHover={ menuLeft === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://todolist-phi-pink.vercel.app/')}>
                            Td-List
                        </Li>
                        <Li menuHover={ menuLeft === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://4g4iu1.csb.app/')}>
                            Contador
                        </Li>
                        <Li menuHover={ menuLeft === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://415cut.csb.app/#')}>
                            Area-Login
                        </Li>
                        <Li menuHover={ menuLeft === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://calc-imc-orpin.vercel.app/')}>
                           Calc-IMC
                        </Li>
                        <Li  menuHover={ menuLeft === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://aquamarine-sherbet-91f7dd.netlify.app/')}>
                           Dell vovies
                        </Li>
                        <Li  menuHover={ menuLeft=== '-140px' ? menuHover : ''} onClick={()=> setIframe('https://gudivnw.vercel.app/')}>
                            Gudi
                        </Li>
                        <Li  menuHover={ menuLeft === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://manoelfss.github.io/Project_Portflow/')}>
                            Portflow
                        </Li>
                        <Li  menuHover={ menuLeft === '-140px' ? menuHover : ''} onClick={()=> setIframe('https://simulador-auditivo.vercel.app/')}>
                            Simulador Auditivo
                        </Li>
                    </ul>
                </Menu>
                <div className="area_projetos">
                    <iframe  src={iframe} frameborder="0" allowfullscreen></iframe>
                </div>
            </Conteinner_Menu>

        </Projects>
    )
}