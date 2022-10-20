import styled from 'styled-components';


export const FooterStyle = styled.footer`
position: fixed;
bottom: 0;
width: 100%;
height: 70px;
background-color: white;

display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;
font-size: 18px;
color: #52B6FF;

svg{
    
    width: 100px;
    height: 100px;
    margin-bottom: 40px;
    
    background-color: #52B6FF;
    border-radius: 100px;

}

p{
    margin-bottom: 130px;
    
    font-size: 20px;

    color: white;
}
h3{
    margin-left: 10px;
    margin-right: 10px;
}
a{
    text-decoration: none;
    color: #52B6FF;
}

`