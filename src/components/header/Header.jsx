import React, {useState} from "react";
import {Headers,Span, Li, Menu} from './styled'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from '../main/Main'
import Project from '../projetos/Project'





function Header(){

    const [toogleDark, setToogleDark] = useState('0px')
    const [menuAtivo, setmenuAtivo] = useState('portfolio')
    const [fundoToogle, setFundoToogle] = useState('url(data:image/png;base64,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) no-repeat center / cover')
    const [darkModel, setDarkModel] = useState('#000')


    const handDarkModel = ()=>{
        if(toogleDark === '0px'){
            document.querySelector('body').style.background = 'url(https://i.ytimg.com/vi/DRSbkYryPhA/maxresdefault.jpg) no-repeat center / cover'
            document.querySelector('body').style.color = '#fff'
            setDarkModel('#fff')
            setFundoToogle(' url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdT2TtGlkypSMtdGC6t8ClKIqurF5QIRPczTuJ0v-lEUikWM_h) no-repeat center / cover')
        }else{ 
            document.querySelector('body').style.background = '#818080'
            document.querySelector('body').style.color = '#383737'
            setDarkModel('#000')
            setFundoToogle('url(data:image/png;base64,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) no-repeat center / cover')
        }
    }


    return (
        <div>
        <BrowserRouter>
            <Headers>
                <h3>M F</h3>
                <nav>
                    <ul>
                        <Link to='/' className={"link"}>
                            <Li darkModel={darkModel} className={`${menuAtivo === 'portfolio' ? 'ativo' : ''} `} onClick={()=> setmenuAtivo('portfolio')}>
                                PORTFÓLIO
                            </Li>
                        </Link>
                        <Link to='projetos'  className={"link"}>
                            <Li darkModel={darkModel} className={`${menuAtivo === 'PROJETOS' ? 'ativo' : ''} `} onClick={()=>  setmenuAtivo('PROJETOS')}>
                                PROJETOS
                            </Li>
                        </Link>
                    </ul>
                </nav>
                <div>
                    <Span className="toogles" fundoToogle={fundoToogle} toogleDark={toogleDark} onClick={()=> `${handDarkModel()} ${toogleDark === '0px' ? setToogleDark('25px') : setToogleDark('0px')}`}></Span>
                </div>
                <Menu onClick={()=> document.querySelector('nav').style.right === '0%' ?  document.querySelector('nav').style.right = '-50%' : document.querySelector('nav').style.right = '0%'} >

                </Menu>
            </Headers>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/projetos" element={<Project/>} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Header;