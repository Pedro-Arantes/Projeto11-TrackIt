import styled from 'styled-components';


export const MainStyled = styled.main`
margin-top: 70px;
margin-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;

height: 100%;
width: 100%;




p{
    font-size: 23px;
    color: #126BA5;
    font-weight: 400;
}
button{
    border-style: none;
    width: 40px;
    height: 35px;

    border-radius: 5px;
    font-size: 27px;
}
`
export const SpanStyle = styled.span`
width: 338px;
word-wrap: break-word;

color: #666666;
font-size: 18px;
margin-bottom: 160px;
`
export const HabitStyle = styled.div`

display: ${props => props.stat === false ? "none":"flex"};
flex-direction: column;


width: 340px;
height: 180px;
background-color: white;

margin-bottom: 50px;

button{
    width: 30px;
    height: 30px;

    font-size: 20px;

   
    border-width: 1px;
    border-style: solid;
    border-color: #D4D4D4;
    

    display: flex;
    align-items: center;
}
input{
    height: 45px ;
    width: 303px;
    border-radius: 5px;
    border-color: #D4D4D4;
    border-style: solid;
    border-width: 1px;
    
    font-size: 20px;
    padding: 10px;
    margin-top: 15px;
    margin-left: 15px;

    ::placeholder{
        color: #D4D4D4;
        
    }
}

`
export const CancSaveStyle = styled.div`

width: 100%;

display: flex;
gap: 20px;
align-items: flex-end;
justify-content: flex-end;
margin-right: 35px;
margin-top: 20px;
padding: 10px;

p{
    display: flex;
    height:35px;
    align-items: center;
    font-size: 16px;
    color: #52B6FF;
}
button{
    background-color: #52B6FF;
    width:84px;
    height: 35px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
svg{
    height: 20px;
    width: 20px;
}

`
export const TitleStyle = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
margin-bottom: 20px;

button{
    background-color: #52B6FF ;
}

`
export const WeekBtnStyle = styled.div`
display: flex;
gap: 5px;
justify-content: flex-start;
margin-left: 15px;
margin-top: 6px;


`
export const DayWeekStyle = styled.button`
background-color: ${props=> props.da};
color:${props=> props.d};
`
export const DayStyHab = styled.button`
background-color: ${props=> props.cor?"#CFCFCF":"white"};
color:${props=> props.cor?"white":"#DBDBDB"};

`

export const HabitCardSt= styled.div`

display: flex;
flex-direction: column;
justify-content: center;

width: 340px;
height: 91px;
background-color: white;
border-radius: 5px;
margin-bottom: 20px;

button{
    width: 30px;
    height: 30px;

    font-size: 20px;

   
    border-width: 1px;
    border-style: solid;
    border-color: #D4D4D4;
 

    display: flex;
    align-items: center;
}
h1{
    font-size: 20px;
    color: #666666;
    padding: 10px;
}

`
export const ImgStyle = styled.div`

display: flex;
align-items: center;
justify-content: flex-end;
position: relative;

img{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 1px;
    right: 6px;
}
`
export const BtnPlus = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: white;
`
