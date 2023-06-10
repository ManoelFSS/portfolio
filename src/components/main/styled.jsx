import styled from 'styled-components'


export const Mains = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 100px);
    justify-content: center;
    position: relative;

    section{
        display: flex;
        justify-content: center;
        flex-wrap: wrap-reverse;
    }
 
`;

export const Container_Nave = styled.div`
    width: 100%;
    height: ${(props)=> props.naveMargin};
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 1s  ;

    h3{
        position: absolute;
        bottom: 10px;
        font-size: 20px;
        font-weight: bolder;
    }
`


export const Conteiner_left = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

`;

export const Area_title = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    h1{
        font-weight: bolder;
    }
    span{
        color: #b65903;
        padding-right: 20px;
        font-size: clamp(1vw,2vw + 2vw,2em);
    }


    p{

        font-size: clamp(1vw,2vw + 2vw,1.8em);
        color: #353434;
        text-transform: uppercase;
        word-spacing:15px;
        font-weight: bolder;
     
    }

    @media(max-width: 860px){  
        justify-content: center;
        align-items: center;
         max-width: 100%;
         text-align: center;
        
        h1{
            font-size: clamp(1vw,2vw + 2vw,1.4em);
            
        }

        p{
            font-size: clamp(1vw,2vw + 2vw,1.4em);
           
        }

      
        span{
            font-size: clamp(1vw,4.5vw + 2vw,1.3em);
        }
    }
`;



export const Area_btn  = styled.section`
    
    display: flex;
    min-width: 100;
    gap: 20px;
    padding: 10px 0px;


    a{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 200px;
        min-width:170px;
        height: 40px;
        border:solid 1px #b65903 ;
        background-color: #b65903;
        border-radius: 20px;
        color: #fff;
        font-weight: bolder;
        transition: all 0.3s;
    }
    a:hover{
        background-color: #9e4c00;
        border:solid 1px #9e4c00 ;
    }
`;

export const Container_redeSociais = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 40px 0px;
    gap: 10px;
    
 a{
     display:flex;
     height: 5vh;
     width: 5vh;
     background-color: #9e4c00;
     border-radius: 50%;
     transition: all 0.3s;
 }

 a:nth-child(3){
     height: 7vh;
     width: 7vh;
     margin-top: -8px;
     
 } 

 a:hover{
     transform: scale(1.1);
 }

 a img{
     width: 100%;
     height: 100%;
     border-radius: 50%;
 }

`

export const Button = styled.button`

    max-width: 200px;
    min-width:170px;
    height: 40px;
    border-radius: 20px;
    border:solid 3px #292929 ;
    background-color:#383838;
    color:#fff;
    font-weight: bolder;
    transition: all 0.3s;

    &:hover{
        border:solid 3px #686868 ;
        background-color:#686868;
    }
`;


export const Conteiner_right = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;

    img{
        height:300px;
        width: 300px;
        border-radius: 100%;
    }
    @media(max-width: 860px){  
      
       img{
            height:200px;
            width: 200px; 
       }
   
    }
`;


export const Article = styled.article`
    position:absolute;
    bottom:0px;
    width: 100%;
    height: ${(props)=> props.modal};
    background: #3a3a3a url(https://i.ytimg.com/vi/DRSbkYryPhA/maxresdefault.jpg) no-repeat center / cover;
    transition: all 1s;
    z-index: 1;
    bottom: 0;
    color: #fff;



`;

export const Span = styled.span`

    cursor: pointer;
    background: url(${props=> props.nave}) no-repeat center / cover;
    width: 8vh;
    height:8vh;
    border-radius: 50%;
    transform: ${props=> props.naveRotate};
    animation: anima 0.3s  alternate-reverse infinite;
    position: absolute;
    z-index: 2;
    transition: all 1s 1s ;

    @keyframes anima {
        0%{
          top: 5px;
        }
        100%{
           top: 0px;
        }
    }             
    
`;
