import styled from 'styled-components'


export const Mains = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 80px);
    position: relative;
    
    @media(min-width:800px) and (max-width:800px){
        height: 115vh;
        justify-content: flex-start;
    }

    @media(min-width:670px) and (max-width:670px){
        height: 115vh;
        justify-content: flex-start;
    }

    @media(max-width:624px){
        justify-content: flex-start;
    }

    section{
        display: flex;
        justify-content: center;
        flex-wrap: wrap-reverse;
    }

 
`;

export const Area_form = styled.div`
    display:${props => props.modelContato};
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: 4;
    border: solid 1px red;
    transition: all 0.4s;


    .formulario{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 600px;
        height: 600px;
        background-color:  #b65903;
        border-radius: 40px;
        padding: 20px;
        box-shadow: 3px 6px 20px 1px #000000a2;

        @media(max-width:620px){
            width: 350px;
            height:400px;
        }
        
        @media(max-width:375px){
            width:290px;
            height:500px;
        }

        div{
            padding: 10px;
        }

        input{
            width: 300px;
            height: 50px;
            display: block;
            border: none;
            border-radius: 10px;
            font-size: 1.2rem;
            padding: 4px 8px 4px 8px;
            box-shadow:  inset 3px 6px 20px 1px #0000007f;

            @media(max-width:620px){
                width: 250px;
               
            }
        }

        input::placeholder{
            font-size: 1.2rem;
        }

        label {
           display: block;
           width: 80px;
           padding: 5px 0px 5px 0px;
           font-size: 24px;
           font-weight: bold;
           color: #ffffff;
           border-bottom: solid 4px #000;
           margin-bottom: 10px;
        }

        .form_btn{
            margin-top: 20px;
            background-color: #000;
            color: #ffffff;
            box-shadow: 3px 6px 20px 1px #000000cf;
            cursor: pointer;
        }

       p{
           margin-top:20px;
           font-size: 22px;
           font-weight: bold;
           transition: all 0.3s;
           color: #000;
        }
        p:hover{
            color: red;
            cursor: pointer;
        }
    }
`;

export const Container_Nave = styled.div`
    width: 100%;
    height: ${(props)=> props.naveMargin};
    position: absolute;
    bottom:0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 1s  ;


    h3{
        position: absolute;
        bottom: 70px;
        font-size: 30px;
        font-weight: bolder;
        
        @media(max-width:550px){
            font-size: 24px;
         }
    }

  
`

export const Conteiner_left = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Area_title = styled.div`
    display: flex;
    flex-direction: column;

    h3{
        font-size: 30px;
    }

    h1{
        font-weight: bolder;
        font-size: 30px;
    }
    span{
        color: #b65903;
        padding-right: 10px;
        font-size: clamp(1vw,2vw + 2vw,3em);
    }


    p{

        font-size: clamp(1vw,2vw + 2vw,2.4em);
        color: #555454;
        text-transform: uppercase;
        word-spacing:10px;
        font-weight: bolder;
     
    }

    @media(max-width: 860px){  
        justify-content: center;
        align-items: center;
         max-width: 100%;
         text-align: center;
        
        h1{
            font-size: clamp(2vw,2vw + 2.5vw,1.5em);
            
        }

        p{
            font-size: clamp(1vw,2vw + 2vw,1.4em);
           
        }

      
        span{
            font-size: clamp(1vw,4.5vw + 2vw,1.3em);
        }
    }

    @media(max-width: 480px){ 
    
        p{
            font-size:14px;
        }
    } 

    @media(max-width:624px){
        text-align: center;
    }
`;



export const Area_btn  = styled.section`
    
    display: flex;
    min-width: 100;
    gap: 20px;
    padding: 20px 0px;

    @media(max-width:670px){
        padding: 10px;
    }


    a{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 200px;
        min-width:180px;
        height: 50px;
        border:solid 1px #b65903 ;
        background-color: #b65903;
        border-radius: 20px;
        color: #fff;
        font-weight: bolder;
        transition: all 0.3s;
        cursor: pointer;
        @media(max-width:379px){
            height: 40px;
        }
    }
    a:hover{
        background-color: #9e4c00;
        border:solid 1px #9e4c00 ;
    }
   
`;

export const Container_redeSociais = styled.section`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px;

    @media(max-width:670px){
        padding: 10px;
    }
        
    a{
        display:flex;
        height: 50px;
        width: 50px;
        background-color: #9e4c00;
        border-radius: 50%;
        transition: all 0.3s;

        @media(max-width:670px){
            height: 30px;
            width: 30px;
        }

        @media(max-width:379px){
            height: 30px;
        }
        @media(max-width:340px){
            height: 30px;
            width: 30px;
        }
    }

    a:nth-child(3){
        height: 60px;
        width: 60px;
        margin-top: -10px;
        @media(max-width:670px){
            height: 40px;
            width: 40px;
        }
        
        @media(max-width:379px){
            height: 40px;
        }

        @media(max-width:340px){
            height: 40px;
            width: 40px;
        }
        
    } 

    a:hover{
        transform: scale(1.1);
    }

    a img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

`;

export const Button = styled.button`

    max-width: 200px;
    min-width:180px;
    height: 50px;
    border-radius: 20px;
    border:solid 3px #292929 ;
    background-color:#383838;
    color:#fff;
    font-weight: bolder;
    transition: all 0.3s;
    cursor: pointer;

    @media(max-width:379px){
        height: 40px;
    }

    &:hover{
        border:solid 3px #686868 ;
        background-color:#686868;
    }
`;


export const Conteiner_right = styled.section`
    display: flex;
    justify-content: center;
    padding: 20px;

    img{
        height:500px;
        width: 500px;
        border-radius: 100%;
    }
    @media(max-width: 1154px){  
      
       img{
            height:250px;
            width: 250px; 
       }
   
    }
    @media(max-width:694px){ 

        padding: 10px;

        img{
            height:200px;
            width: 200px; 
       }
     }

     @media(max-width:430px){ 
        img{
            height:180px;
            width: 180px; 
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
    width: 60px;
    height:60px;
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
