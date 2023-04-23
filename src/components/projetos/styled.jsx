import styled from 'styled-components'

export const Projects = styled.main`
    
    height: calc(100vh - 10vh);
  
   

    section{
        display: flex;
        background-color: #b65903;
        height: 6vh;
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

export const Conteinner = styled.article`
    display: flex;
    height: calc(100vh - 16vh);
    position: relative;

    ul{
        list-style: none;
    }

    iframe {
        position: absolute;
        height: 100%;
        width: 100%;
    }
 
`;

export const Aside = styled.aside`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${(props)=> props.menu};
    width: 200px;
    height:  calc(100vh - 16vh);
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
        background: #b65a03cf url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiRY0HD_l3K2Wr7Tl-tHFHjbRjv3sf9phajH2O4FfrinI3da4) no-repeat center right / 60px 60px;
    }

    li:nth-child(6){
        background: #b65a03cf url(https://i.etsystatic.com/40406947/r/il/f42e13/4525209248/il_fullxfull.4525209248_2ze5.jpg) no-repeat center right / 60px 60px;
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