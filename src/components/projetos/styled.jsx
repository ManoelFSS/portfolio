import styled from 'styled-components'
import IconeSom from '../assets/som.png'

export const Projects = styled.main`

    section{
        display: flex;
        background-color: #b65903;
        height: 5vh;
        justify-content: center;
        align-items: center;
        position: relative;
       
        div{
            position: absolute;
            left: 30px;
            height: 4vh;
            width: 4vh;
            cursor: pointer;
            border-radius: 50%;
            background: url(https://cdn-icons-png.flaticon.com/512/660/660376.png) no-repeat center / cover;
        }

        
    }
`;

export const Conteinner_Menu = styled.aside`
    display: flex;


    ul{
        list-style: none;
    }

    .area_projetos{
        display: flex;
        justify-content: flex-end;
        height: calc(100vh - 13vh);
        width: 100vw;
   
    }

    iframe {
      position: absolute;
      height: calc(100vh - 13vh);
      width:100%;
    }
 
`;

export const Menu = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${(props)=> props.menuLeft};
    width: 200px;
    height: calc(100vh - 13vh);
    background-color: #70707073;
    z-index: 1;
    transition: all 0.4s;

    li:nth-child(1){
        background: #b65a03cf url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVyepLzoLM02-oii5T8KpbGe4MZ0AQRwqxQ&usqp=CAU) no-repeat center  right / 60px 60px;
    }
    li:nth-child(2){
        background: #b65a03cf url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGCRC_Khf3TRacqCaov73qujhIdErfa7U3NIBgd0vpToFQgBW0) no-repeat center right / 60px 60px;
    }
    li:nth-child(3){
        background: #b65a03cf url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8x2ThR0hyBXXk_yBIrtc6WoqJdWV1yXSRvTSgk9tmW5fbh1louA8m0qPreFqkEnRo7M&usqp=CAU) no-repeat center right / 60px 60px;
    }
    li:nth-child(4){
        background: #b65a03cf url(https://media.licdn.com/dms/image/C4D0BAQHdxnT1uEt__A/company-logo_200_200/0/1555610039836?e=2147483647&v=beta&t=n-dnWjg3Pw0PcR52t10yqqpYCzQ-jjv5oh6OdKTuoH0) no-repeat center right / 60px 70px;
    }
    li:nth-child(5){
        background: #b65a03cf url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvEnZCX91OSy44DXs6dcDC1l9Y9ON_OXkxzA&usqp=CAU) no-repeat center right / 60px 60px;
    }

    li:nth-child(6){
        background: #b65a03cf url(https://c4.wallpaperflare.com/wallpaper/276/371/674/computer-dell-wallpaper-thumb.jpg) no-repeat center right / 65px 60px;
    }
   
    li:nth-child(7){
        background: #b65a03cf url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqSwVc3s0OgRFojxjqQu59EHt1U47fxCO-fNYFSTcXi0LRqzK73gDnW4rOJERbaoOin8&usqp=CAU) no-repeat center right / 60px 60px;
    }
    li:nth-child(9){
        background: #b65a03cf url(${IconeSom}) no-repeat center right / 60px 60px ;
    
    }

`;

export const Li = styled.li`

    display:flex;
    justify-content:left;
    align-items: center;
    padding-left: 20px ;
    width: 195px;
    height: 8vh;
    margin-top: 5px;
    background-color: #b65a0392;
    color: #fff;
    transition: all 0.4s;
    border-radius: 0px 10px 10px 0px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
          transform: scale(1.1);
            margin-left: ${(props)=> props.menuHover};
        }
`;