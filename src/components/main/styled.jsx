import styled from 'styled-components'


export const Mains = styled.main`
    display: flex;
    width: 100%;
    height: calc(100vh - 10vh);
    flex-wrap: wrap-reverse;
    justify-content: center;
    padding:0px 20px ;
    position: relative;
   

`;

export const Conteiner_left = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
 

    h1{
        font-weight: bolder;
    }
    span{
        color: #b65903;
        padding-right: 20px;
        font-size: clamp(1vw,2vw + 2vw,2em);
    }


    p{
        font-size: clamp(1vw,2vw + 2vw,2em);
        color: #353434;
        text-transform: uppercase;
        word-spacing:15px;
        font-weight: bolder;
     
    }

    div{
        display: flex;
        align-items: center;
        width:100%;
        padding-left: 30px;
      

    }
    

    div:nth-child(1){
        flex: 3;
        flex-direction: column;
        align-items:unset;
        justify-content: center;
       
    }

    div:nth-child(1) section{
        display: flex;
        align-items: center;
        gap: 40px;
        height: 30%;
        width: 100%;
      

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

       
       
    }


    div:nth-child(2){
        align-items: start;
        justify-content: left;
       
        gap: 5vh;
        width: 100%;
        height: 30vh;
        margin-top:-30px;
      
        a{
            display:flex;
            height: 6vh;
            width: 6vh;
            background-color: #9e4c00;
            border-radius: 50%;
            transition: all 0.3s;
        }

        a:nth-child(3){
            height: 8vh;
            width: 8vh;
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

        div{
            padding-left:0px;
        }
        span{
            font-size: clamp(1vw,4.5vw + 2vw,1.3em);
        }

        div:nth-child(1){
            align-items: center;
            max-width: 100%;
        }
        div:nth-child(1) section{
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            height: auto;
            padding: 10px;
            margin-bottom: 40px;
            min-width:300px ;
            border: solid yellow 2px;
        }
        
        div:nth-child(2){
            align-items: start;
            justify-content:center;
            margin-bottom:50px;
            height: auto;
            border: solid red px;
            margin-bottom:70px;
          
        }
        
       
     
      
    }




`;


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

 
    img{
        height: 50vh;
        border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
    }
    @media(max-width: 860px){  
       border: solid 1px red;
       height: auto;
       img{
            height: auto;
            padding:10px;
       }
   
    }
`;


export const Article = styled.article`
    position: absolute;
    bottom:0px;
    width: 100%;
    height: ${(props)=> props.modal};
    background: #3a3a3a url(https://i.ytimg.com/vi/DRSbkYryPhA/maxresdefault.jpg) no-repeat center / cover;
    transition: all 1s;

    @media(max-width: 550px){  
      
    }
  
`;

export const Span = styled.span`
    cursor: pointer;
    position:absolute;
    top: ${props=> props.topBotto};
    transition: all 1s;
    z-index: 9999;
    transform: translate(-50%, -50%) ;
   

    
    &::after{
        content: '';
        background: url(${props=> props.nave}) no-repeat center / cover;
        position: absolute;
        width: 8vh;
        height:8vh;
        font-weight: 900;
        font-size: 25px;
        border-radius: 50%;
        transform: ${props=> props.naveRotate};
        transition: all 1s 1s;
        animation: anima 0.3s  alternate-reverse infinite;
        left: -24px;
        
    }

    @keyframes anima {
        0%{
            top: -50px;
        }
        100%{
            top: -46px;
        }
    }             
    
`;
