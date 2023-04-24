import styled from 'styled-components'


export const Headers = styled.header`

    min-height: 10vh;
    width: 100%;
    display: flex;
    border-bottom: solid 2px #FF7A00;
    align-items: center;
    padding: 0px 20px;
  
    h3{
        font-size: clamp(1vw,4vw + 2vw,3em);
        padding: 10px;
        font-family: 'Stalinist One';
      
      
    }


    nav {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding: 10px 50px;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 40px;
    }

    .link{
        text-decoration: none;
    }
    
    div {
        display: block;
        width: 50px;
        height: 25px;
        background-color: #FF7A00;
        box-shadow: inset 0px 0px 6px 1px #000;
        border-radius: 20px;
        position: relative;
        margin: 10px;
    }

    .ativo{
        color: #FF7A00;
    }

    @media(max-width: 860px){  
     
    }

    @media(max-width:535px){

        gap: 200px;

        h3{
            font-size: clamp(1vw,4vw + 2vw,2em)
        };

        ul{
            width: 100%;
            display: block;
        }
        li {
            display: flex;
            font-size: clamp(1vw,4vw + 2vw,1.8em);
            width:100%;
            justify-content: center;
            margin-top: 15px;
        }
        nav{
            display:flex;
            width: 50%;
            height:100vh ;
            justify-content: center ;
            padding-top: 100px;
            position: fixed;
            right:-50%;
            transition: all 0.4s;
            box-shadow: -3px 0px 24px #000;
            top: 0;
            background-color: #969696e1;
            z-index: 3;
        }
    }


`;

export const Li = styled.li`
    
        text-decoration: none;
        color:${props => props.darkModel};
        font-size: clamp(1vw,1.8vw + 1vw,1.3em);
        font-weight: bolder;
        cursor: pointer;
        transition: all 0.3s;
 

    &:hover{
        color: #FF7A00;
    }
`;

export  const Span = styled.span`
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        top: -1px;
        left: ${props => props.toogleDark};
        box-shadow: 2px 2px 5px #000, 0px 0px 10px #FF7A00;
        transition: all 0.4s;
        background: ${props => props.fundoToogle };
    
        &:hover{
            box-shadow: 2px 2px 5px #000, 0px 0px 10px #ff7700, 0px 0px 30px #ff8800cc ;
        
        }
`;


export const Menu = styled.span`
    display: none;
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
    background:#1f1f1f url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTA6Y7-IAzXhJ8Rox7Q6O6OtjHSjahCtoeNmODGITFQbwrICoL) no-repeat center / 102% 102%;

    @media(max-width:535px){
        display:block;
        position: absolute;
        right:20px;
        z-index: 4;
    }
`;