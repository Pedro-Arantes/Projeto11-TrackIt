import styled from 'styled-components';


export const MainStyled = styled.main`

height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
gap: 15px;

img{
    width: 180px;
    height: 180px;
}
a{
    font-size: 14px;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
;
}

`
export const FormStyled = styled.form`

display: flex;
flex-direction: column;
gap: 5px;

input{
    height: 45px ;
    width: 303px;
    border-radius: 5px;
    border-color: #D4D4D4;
    border-style: solid;
    border-width: 1px;

    font-size: 20px;
    padding: 10px;

    ::placeholder{
        color: #D4D4D4;
        
    }
}


`
export const LoadingBtn = styled.button`

    display: ${props => props.state === false ? "none" : ""};
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    font-size: 21px;
    color: white;
    opacity: 0.7;

    border-radius: 5px;
    border-style: none;

    div{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 13px;
    }
`
export const BtnStyle = styled.button`
    display: ${props => props.state === false ? "" : "none"};
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    font-size: 21px;
    color: white;

    border-radius: 5px;
    border-style: none;

`
